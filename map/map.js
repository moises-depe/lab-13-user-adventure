import fighter from '../data';

const ul = document.querySelector('ul');

const user = JSON.parse(localStorage.getItem('USER'));


let completedAllAdventures = true;

for (let adventure of fighter) {

    if (!user.completed[adventure.id]) {
        completedAllAdventures = false;
    }
}

// - If the user has <= 0 HP, redirect them to the results page

if (user.hp <= 0 || completedAllAdventures) {
    window.location = '../results';
}


for (let adventure of fighter) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = adventure.title;
    a.href = `../adventure/?id=${adventure.id}`;


    li.append(a);
    ul.append(li);
}

