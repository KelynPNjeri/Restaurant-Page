/* eslint-disable import/prefer-default-export */

export const createMenuPage = () => {
  const parentMenuDiv = document.createElement('div');
  parentMenuDiv.classList.add('tabcontent');
  parentMenuDiv.innerHTML = `
    <div id="menu" data-tab-content class="active">
      <ul>
        <h3 class='category-title'>Appetizer</h3>
        <li>Appetizer One</li>
        <li>Appetizer Two</li>
        <li>Appetizer Three</li>
        <li>Appetizer Four</li>
      </ul>
      <ul>
        <h3 class='category-title'>Main Meal</h3>
        <li>Main Meal One</li>
        <li>Main Meal Two</li>
        <li>Main Meal Three</li>
        <li>Main Meal Four</li>
      </ul>
      <ul>
        <h3 class='category-title'>Dessert</h3>
        <li>Dessert One</li>
        <li>Dessert Two</li>
        <li>Dessert Three</li>
        <li>Dessert Four</li>
      </ul>
      <ul>
        <h3 class='category-title'>Snack</h3>
        <li>Snack One</li>
        <li>Snack Two</li>
        <li>Snack Three</li>
        <li>Snack Four</li>
      </ul>
    </div>
  `;
  return parentMenuDiv;
};
