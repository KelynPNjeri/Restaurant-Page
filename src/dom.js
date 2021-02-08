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
  const tabMenu = document.createElement('ul');
  tabMenu.className = 'tab';
  tabMenu.innerHTML = `
    <li data-tab-target="#menu">Menu</li>
    <li data-tab-target="#contact">Contact</li>
  `;
  return tabMenu;
};

export { restaurantTitle, createMenuTabs };

/* eslint no-useless-concat: off */
