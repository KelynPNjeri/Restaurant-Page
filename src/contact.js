const createContactPage = () => {
  const contactDiv = document.createElement('div');
  contactDiv.id = 'contact';
  contactDiv.innerHTML = `
    <p>Neopolis Restaurant</p>
    <span>Delivering excellence</span>
    <p>Mykonos, Greece</p>
  `;
  return contactDiv;
};

export { createContactPage };
