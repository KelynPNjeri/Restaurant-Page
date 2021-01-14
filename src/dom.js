const restaurantTitle = () => {
  const restaurantBrand = document.createElement('div');
  restaurantBrand.id = 'branding';
  
};



const itemList = (type) => {
  const itemDB = document.createElement("ul");
  const appetizeTitle = document.createElement("h3");
  appetizeTitle.className = "category-title";
  appetizeTitle.innerText = `${type}`;
  const item1 = document.createElement("li");
  item1.innerText = `${type}` + " One";
  const item2 = document.createElement("li");
  item2.innerText = `${type}` + " Two";
  const item3 = document.createElement("li");
  item3.innerText = `${type}` + " Three";
  const item4 = document.createElement("li");
  item4.innerText = `${type}` + " Four";
  itemDB.appendChild(appetizeTitle);
  itemDB.appendChild(item1);
  itemDB.appendChild(item2);
  itemDB.appendChild(item3);
  itemDB.appendChild(item4);
  return itemDB;
};

export { restaurantTitle, itemList };

/* eslint no-useless-concat: off */
