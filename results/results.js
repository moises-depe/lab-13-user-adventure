import hpScore from './hp-score.js';
import coinScore from './coin-score.js';
import { aliveCoinMessages, deadCoinMessages } from './messages.js';

// goes & grabs the user from the local storage
const user = JSON.parse(localStorage.getItem('USER'));

const storylineDisplay = document.getElementById('story-line-display');

const hpCoinResults = document.getElementById('hp-coins-results');

const hpResults = hpScore(user.hp);

const coinResults = coinScore(user.coins);

hpCoinResults.textContent = hpResults;

const healthMessage = {
    dead: 'you are dead',
    injured: 'you weak, but atleast you survived',
    healthy: 'you survived, You ARE now considered to be a LIVING LEGEND!',
};

const hpMessage = healthMessage[hpResults];

let coinMessages = null;


// this is for wether the user is dead, we select another message
if (hpResults === 'dead') {

    coinMessages = deadCoinMessages;
}
else {
    coinMessages = aliveCoinMessages;
}

// grab the coins message from the object
const coinMessage = coinMessages[coinResults];

const story = `After your adventures, 
    ${user.name} the ${user.character}, 
    ${hpMessage} and ${coinMessage}.`;

storylineDisplay.textContent = story;

const returnButton = document.getElementById('return-button');

returnButton.textContent = 'restart game';

returnButton.addEventListener('click', () => {

    window.location = '../index.html';
});

