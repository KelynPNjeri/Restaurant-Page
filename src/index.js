import "./style.css";
import { restaurantTitle } from "./dom";
import { createMenuPage } from "./menu";

const contentDiv = document.getElementById("content");

const openMenu = (id) => {
  switch (id) {
    case "appetizer-tab":
      alert("Hey there appetizers.");
      break;

    case "main-meal-tab":
      alert("Hey there Main Meal.");
      break;

    default:
      break;
  }
};

const createMenuTabs = () => {
  const tabMenu = document.createElement('div');
  tabMenu.className = 'tab';
  tabMenu.innerHTML = `
    <button class="tablinks" id="appetizer-tab" onClick="openMenu(this.id)"">Main Menu</button>
    <button class="tablinks" id="main-course-tab" onClick="openMenu(this.id);"">Contact Us</button>
  `;
  return tabMenu;
};

contentDiv.appendChild(restaurantTitle());
contentDiv.appendChild(createMenuTabs());
