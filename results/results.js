import hpScore from './hp-score.js';
import coinScore from './coin-score.js';
import { aliveCoinMessages, deadCoinMessages } from './messages.js';

// goes & grabs the user from the local storage
const user = JSON.parse(localStorage.getItem('USER'));


// grabs DOM element we want to insert
const storylineDisplay = document.getElementById('story-display');

const hpResults = hpScore(user.hp);

const coinResults = coinScore(user.coins);

const hpMessages = {
    dead: 'you are dead',
    frail: 'you weak, but atleast you survived',
    healthy: 'you survived, You ARE now a LIVING LEGEND!',
};


const hpMessage = hpMessages[hpResults];

let coinMessages = null;


// this is for wether the user is dead, we select another message
if (hpResults === 'dead') {

    coinMessages = deadCoinMessages;
}
else {
    coinMessages = aliveCoinMessages;
}

// grab the gold message from the object
const coinMessage = coinMessages[coinResults];

const story = `After your adventures, 
    ${user.name} the ${user.character}, 
    ${hpMessage} and ${coinMessage}.`;

storylineDisplay.textContent = story;