<script lang="ts"> 
    import { selected_store } from "./store.js";
    export let option;
    export let index;
    export let correct;
    export let checked;

    // this boolean defines whether the current element has been selected
    let selected: boolean = checked;

    // this function adds the option to the store with selected options and removes it if it is de-selected
    function select() {
        selected = !selected;
        if (selected) {
            selected_store.update((_store) => {
                _store.push(index);
                return _store;
            });
        }
        else {
            selected_store.update(_store => _store.filter(entry => entry !== index));
        }
    }
</script>

<!-- This displays the checkbox -->
{#if correct.length > 1}
    <input
        type="checkbox"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        id={index.toString()}
        checked={checked}
        on:click={select}
        value={index}
    />
<!-- this displays the radio button (more on this later) -->
{:else}
    <input class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" type="radio" id={index.toString()} bind:group={selected} value={index} />
<!-- this displays the label for the option -->
{/if}
<label class="text-sm ms-2" for={index.toString()}>{option}</label>
<br />