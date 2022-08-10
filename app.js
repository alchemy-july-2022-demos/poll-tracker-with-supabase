// grab our form
const createForm = document.getElementById('create-poll');
// initialize our state
let question = '';
let optionA = '';
let optionB = '';
// add submit event listener

createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    question = data.get('quest');
    optionA = data.get('option-a');
    optionB = data.get('option-b');
});
// update our state from our form data
// call displayCurrentPoll
