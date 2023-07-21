//import food from './menu.json';
//import foodTpl from '../templates/food.handlebars';

 //const foodList = document.querySelector('.js-menu');

 //const markup = foodTpl(food);
 //foodList.innerHTML = markup;


 const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  const themeSwitchToggle = document.getElementById('theme-switch-toggle');
  
 
  const savedTheme = localStorage.getItem('theme');
  
 
  if (savedTheme === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    themeSwitchToggle.checked = true;
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
 
  function handleThemeToggle() {
    if (themeSwitchToggle.checked) {
      document.body.classList.replace(Theme.LIGHT, Theme.DARK);
      localStorage.setItem('theme', Theme.DARK);
    } else {
      document.body.classList.replace(Theme.DARK, Theme.LIGHT);
      localStorage.setItem('theme', Theme.LIGHT);
    }
  }
  
 
  themeSwitchToggle.addEventListener('change', handleThemeToggle);
  