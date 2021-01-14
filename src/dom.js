import Icon from './icon.png';

const restaurantTitle = () => {
  const restaurantBrand = document.createElement('div');
  restaurantBrand.id = 'branding';
  const brandImage = new Image();
  brandImage.id = 'restaurant-logo';
  brandImage.src = Icon;
  const menuTitle = document.createElement('h2');
  menuTitle.innerText = 'Neopolis Restaurant';
  menuTitle.className = 'menu-title';
  restaurantBrand.appendChild(brandImage);
  restaurantBrand.appendChild(menuTitle);
  return restaurantBrand;
};

const createMenuTabs = () => {
  const tabMenu = document.createElement('div');
  tabMenu.className = 'tab';
  tabMenu.innerHTML = `
    <button class="tablinks" id="menu" onClick="openMenu(this.id)"">Main Menu</button>
    <button class="tablinks" id="contact" onClick="openMenu(this.id);"">Contact Us</button>
  `;
  return tabMenu;
};


const itemList = (type) => {
  const itemDB = document.createElement('ul');
  const appetizeTitle = document.createElement('h3');
  appetizeTitle.className = 'category-title';
  appetizeTitle.innerText = `${type}`;
  const item1 = document.createElement('li');
  item1.innerText = `${type}` + ' One';
  const item2 = document.createElement('li');
  item2.innerText = `${type}` + ' Two';
  const item3 = document.createElement('li');
  item3.innerText = `${type}` + ' Three';
  const item4 = document.createElement('li');
  item4.innerText = `${type}` + ' Four';
  itemDB.appendChild(appetizeTitle);
  itemDB.appendChild(item1);
  itemDB.appendChild(item2);
  itemDB.appendChild(item3);
  itemDB.appendChild(item4);
  return itemDB;
};

export { restaurantTitle, itemList, createMenuTabs };

/* eslint no-useless-concat: off */
