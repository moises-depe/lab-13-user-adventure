import fighter from '../data.js';
import { findById } from '../utils.js';

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('section img');
const form = document.querySelector('form');



const params = new URLSearchParams(window.location.search);


const fighterId = params.get('id');


const fighters = findById(fighter, fighterId);


h1.textContent = fighters.title;
p.textContent = fighters.description;
img.src = `../assets/${fighters.image}`;

for (let choice of fighters.choices) {

    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);

    form.append(label);
}

const button = document.createElement('button');

button.textContent = 'Submit';

form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);


    const selectionId = formData.get('choices');

    const choice = findById(fighters.choices, selectionId);
    const user = JSON.parse(localStorage.getItem('USER'));

    user.hp += choice.hp;
    user.coins += choice.coins;

    user.completed[fighterId] = true;


    localStorage.setItem('USER', JSON.stringify(user));

    window.location = '../map';
});

