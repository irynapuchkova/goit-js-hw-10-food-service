import './sass/main.scss';

import menuItems from './menu.json';
import menuItemsTpl from './templates/menuItemTpl.hbs';
// import { on } from 'events';

const menuItemsList = document.querySelector('.js-menu');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeControlCheckbox = document.querySelector('input[type="checkbox"]');

console.log(themeControlCheckbox);
const body = document.querySelector('body');

menuItemsList.innerHTML = menuItemsTpl(menuItems);

themeControlCheckbox.addEventListener('change', checkboxHandler)

savedTheme()

function checkboxHandler(e) {

  if (e.target.checked) {
    body.classList.add('dark-theme')
    localStorage.setItem('Theme', Theme.DARK)
  } else {
    body.classList.remove('dark-theme', 'light-theme');
    localStorage.setItem('Theme', Theme.LIGHT)
  }
}

function savedTheme() {
  const savedTheme = localStorage.getItem('Theme');

  if (savedTheme == Theme.DARK) {
    themeControlCheckbox.checked = true;
  }

  body.classList.add(savedTheme);
}