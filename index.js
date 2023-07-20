import food from './menu.json';
import foodTpl from '../templates/food.handlebars';

 const foodList = document.querySelector('.js-menu');

 const markup = foodTpl(food);
 foodList.innerHTML = markup;