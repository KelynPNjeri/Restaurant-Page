/* eslint-disable import/prefer-default-export */
import { itemList } from './dom';

export const createMenuPage = () => {
  const menuDiv = document.createElement('div');
  menuDiv.id = 'restaurant-menu';
  menuDiv.appendChild(itemList('Appetizer'));
  menuDiv.appendChild(itemList('Main Meal'));
  menuDiv.appendChild(itemList('Dessert'));
  menuDiv.appendChild(itemList('Snack'));
  menuDiv.appendChild(itemList('Drinks'));
  return menuDiv;
};
