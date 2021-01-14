import "./style.css";
import { restaurantTitle, createMenuTabs } from "./dom";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";

const contentDiv = document.getElementById("content");
contentDiv.appendChild(restaurantTitle());
contentDiv.appendChild(createMenuTabs());

const openMenu = (id) => {
  switch (id) {
    case "menu":
      alert("Menu");
      break;

    case "contact":
      alert("Contact");
    default:
      break;
  }
};

const menuTab = document.getElementById("menu");
menuTab.addEventListener("click", () => {
    openMenu(menuTab.id);
});

const contactTab = document.getElementById("contact");
contactTab.addEventListener("click", () => {
    openMenu(contactTab.id);
});
