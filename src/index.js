import './style.css';
import { restaurantTitle, createMenuTabs } from './dom';
import { createMenuPage } from './menu';
import { createContactPage } from './contact';

const contentDiv = document.getElementById('content');
contentDiv.appendChild(restaurantTitle());
contentDiv.appendChild(createMenuTabs());

const menuTab = document.getElementById('menu');
menuTab.addEventListener('click', contentDiv.appendChild(createMenuPage()));

const contactTab = document.getElementById('contact');
contactTab.addEventListener('click', contentDiv.appendChild(createContactPage()));
