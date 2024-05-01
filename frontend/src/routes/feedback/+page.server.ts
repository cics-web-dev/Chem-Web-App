export const actions = {
    default: async ({ request }) => {
      const formData = await request.formData();
      const name = formData.get('name');
      const email = formData.get('email');
      const chapter = formData.get('chapter-number');
      const question = formData.get('question-number');
      const feedback = formData.get('feedback-field');

        fetch('https://script.google.com/macros/s/AKfycbwCScH830HOwCSx5u0HQxqqcewUSWMlhKvPPyM6RHU/dev', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postData : {
                    contents : {
                        name: name,
                        email: email,
                        chapter: chapter,
                        question: question,
                        feedback: feedback
                    }
                }
                
            })
        }).then((response) => {
            if (response.ok) { console.log("feedback sent successfully"); }
            else { console.log("error encountered in sending feedback"); }
        }).catch(error => {
            console.error('Error submitting feedback:', error);
        });
    
      // Process the form data and perform actions
      return { success: true };
    },
  };