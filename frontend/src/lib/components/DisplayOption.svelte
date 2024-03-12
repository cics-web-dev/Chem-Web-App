<script lang="ts">
    import { selected_store } from './store.js';
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
        } else {
            selected_store.update((_store) => _store.filter((entry) => entry !== index));
        }
    }
</script>

<!-- This displays the checkbox -->
{#if correct.length > 1}
    <input
        type="checkbox"
        class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        id={index.toString()}
        {checked}
        on:click={select}
        value={index}
    />
    <!-- this displays the radio button (more on this later) -->
{:else}
    <input
        class="mt-0.5 shrink-0 rounded-full border-gray-200 text-blue-600 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
        type="radio"
        id={index.toString()}
        bind:group={selected}
        value={index}
    />
    <!-- this displays the label for the option -->
{/if}
<label class="ms-2 text-sm" for={index.toString()}>{option}</label>
<br />
