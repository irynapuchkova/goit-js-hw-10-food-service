import './sass/main.scss';
import menuItems from './menu.json';
import menuItemsTpl from './templates/menuItemTpl.hbs'

console.log(menuItems);
console.log(menuItemsTpl({ or: 'be_happy' }));
