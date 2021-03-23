import data from './menu.json';
import cardsTpl from './templates/cards-template.hbs';

const ref = {
  body: document.querySelector('body'),
  cardList: document.querySelector('.js-menu'),
  themeSwitcher: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const cardsMarkup = createCardsMarkup(data);

ref.cardList.insertAdjacentHTML('beforeend', cardsMarkup);
ref.body.classList.add(Theme.LIGHT);
ref.themeSwitcher.addEventListener('change', changeTheme);

checkTheme();

function createCardsMarkup(data) {
  return cardsTpl(data);
}

function changeTheme(e) {
  e.target.checked
    ? ref.body.classList.add(Theme.DARK)
    : ref.body.classList.remove(Theme.DARK);

  localStorage.setItem('theme', JSON.stringify(e.target.checked));
}

function checkTheme() {
  const savedSettings = JSON.parse(localStorage.getItem('theme'));
  ref.themeSwitcher.checked = savedSettings;

  savedSettings
    ? ref.body.classList.add(Theme.DARK)
    : ref.body.classList.remove(Theme.LIGHT);
}
