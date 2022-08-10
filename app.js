// grab our form
const createForm = document.getElementById('create-poll');
const voteA = document.getElementById('vote-a');
const voteB = document.getElementById('vote-b');

// initialize our state
let question = '';
let optionA = '';
let optionB = '';
let optionAVotes = 0;
let optionBVotes = 0;
// add submit event listener

createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // update our state from our form data
    const data = new FormData(createForm);
    question = data.get('quest');
    optionA = data.get('option-a');
    optionB = data.get('option-b');
    // call displayCurrentPoll
    displayCurrentPoll();
});

function displayCurrentPoll() {
    const questionElem = document.getElementById('question');
    questionElem.textContent = question;
    const optionAElem = document.getElementById('option-a');
    optionAElem.textContent = optionA;
    const optionBElem = document.getElementById('option-b');
    optionBElem.textContent = optionB;
}

// Voting Functionality
// initialize our state
// add event listeners to our buttons
//   update the state
//   inject the state into the HTML
voteA.addEventListener('click', () => {
    optionAVotes++;
    voteA.textContent = optionAVotes;
});

voteB.addEventListener('click', () => {
    optionBVotes++;
    voteB.textContent = optionBVotes;
});
