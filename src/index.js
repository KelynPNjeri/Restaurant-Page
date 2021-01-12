import './style.css';
import { restaurantTitle, itemList } from './dom';

const contentDiv = document.getElementById('content');

contentDiv.appendChild(restaurantTitle());
contentDiv.appendChild(itemList('Appetizer'));
contentDiv.appendChild(itemList('Main Course'));
contentDiv.appendChild(itemList('Dessert'));
