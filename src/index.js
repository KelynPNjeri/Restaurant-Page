import './style.css';
import { restaurantTitle, createMenuTabs } from './dom';
import { createMenuPage } from './menu';
import { createContactPage } from './contact'

const contentDiv = document.getElementById('content');
contentDiv.appendChild(restaurantTitle());
contentDiv.appendChild(createMenuTabs());

const openMenu = () => {
  const tablinksArr = document.querySelectorAll('.tablinks');
  for (let i = 0; i <= tablinksArr.length; i + 1) {

    let tabID = tablinksArr[i].id;
    switch (tabID) {
      case 'menu':
        alert('Menu Page.');
        break;

      case 'main-meal-tab':
        alert('Contact Page.');
        break;

      default:
        break;
    }

  }
  
};




