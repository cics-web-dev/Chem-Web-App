import type { Actions } from './$types';
// import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const chapter = formData.get('chapter-number');
        const question = formData.get('question-number');
        const feedback = formData.get('feedback-field');

        await fetch(
            'https://script.google.com/macros/s/AKfycbxzqR6ReKJhW6S-rORQxgT5HS0lX0moJnv2n9xzCwGhLixAproAgKtoAYxo-k2wYynG/exec',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    chapter: chapter,
                    question: question,
                    feedback: feedback
                })
            }
        )
            .then((response) => response.text())
            .then((result) => console.log(`result from server: ${result}`))
            .catch((error) => console.error(error));

        // Process the form data and perform actions
        return { success: true };
    }
} satisfies Actions;
