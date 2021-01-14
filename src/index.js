import './style.css';
import { restaurantTitle, createMenuTabs } from './dom';
import { createMenuPage } from './menu';
import { createContactPage } from './contact';

const contentDiv = document.getElementById('content');
contentDiv.appendChild(restaurantTitle());
contentDiv.appendChild(createMenuTabs());

const menuTab = document.getElementById('menu');
menuTab.addEventListener('click', () => { 
    alert("Menu");
    document.getElementById('contact').style.display = "none";
    // document.getElementById('restaurant-menu').style.display = "flex";
    contentDiv.appendChild(createMenuPage());
});

const contactTab = document.getElementById('contact');
contactTab.addEventListener('click', () => {
    alert("Contact");
    document.getElementById('restaurant-menu').style.display = "none";
    // document.getElementById('contact').style.display = "flex";
    contentDiv.appendChild((createContactPage()));
});
