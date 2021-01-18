import './style.css';
import { restaurantTitle, createMenuTabs } from './dom';
import { createMenuPage } from './menu';
import { createContactPage } from './contact';

const contentDiv = document.getElementById('content');
contentDiv.appendChild(restaurantTitle());
contentDiv.appendChild(createMenuTabs());

const openMenu = (id) => {
  switch (id) {
    case 'menu':
      contentDiv.appendChild(createMenuPage()).style.display = 'block';
      document.getElementById('contact').style.display = 'none';
      break;

    case 'contact-tab':
      contentDiv.appendChild(createContactPage()).style.display = 'block';
      document.getElementById('restaurant-menu').style.display = 'none';
  }
};

const menuTab = document.getElementById('menu');
menuTab.addEventListener('click', () => {
  openMenu(menuTab.id);
});

const contactTab = document.getElementById('contact-tab');
contactTab.addEventListener('click', () => {
  openMenu(contactTab.id);
});
