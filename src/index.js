import "./style.css";
import { restaurantTitle } from "./dom";

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
    const tabMenu = document.createElement("div");
    tabMenu.className = "tab";
    const appetizerTab = document.createElement('button');
    appetizerTab.id = 'appetizer-tab'
    appetizerTab.onclick = openMenu(this.id);
    appetizerTab.innerText = 'Appetizer'
    // tabMenu.innerHTML = `
    //   <button class="tablinks" id="appetizer-tab" onclick=`openMenu(this.id)`">Appetizer</button>
    //   <button class="tablinks" id="main-course-tab" onclick=`openMenu(this.id)`">Main Meal</button>
    //   <button class="tablinks" id="dessert-tab" onclick="openMenu(this.id);">Dessert</button>
    // `;
    tabMenu.appendChild(appetizerTab);
    return tabMenu;
};





