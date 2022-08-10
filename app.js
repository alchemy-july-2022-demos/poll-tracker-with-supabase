import { createNewPoll } from './fetch-utils.js';

// grab our form
const createForm = document.getElementById('create-poll');
const voteA = document.getElementById('vote-a');
const voteB = document.getElementById('vote-b');
const closePoll = document.getElementById('close-poll');

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
    voteA.textContent = optionAVotes;
    voteB.textContent = optionBVotes;
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

// Close Poll Functionality
// add event listener to close poll button
// bundle up our state
// send our state to supabase
// reset our state
// call displayCurrentPoll
// call displayPolls
closePoll.addEventListener('click', async () => {
    const data = {
        question,
        option_a: optionA,
        option_b: optionB,
        option_a_votes: optionAVotes,
        option_b_votes: optionBVotes,
    };
    const resp = await createNewPoll(data);
    question = '';
    optionA = '';
    optionB = '';
    optionAVotes = 0;
    optionBVotes = 0;
    displayCurrentPoll();
});
