/* eslint-disable import/prefer-default-export */
export const createContactPage = () => {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('tabcontent');
  contactDiv.innerHTML = `
    <div id="contact" data-tab-content>
      <p>Neopolis Restaurant</p>
      <span>Delivering excellence</span>
      <p>Mykonos, Greece</p>
    </div>
  `;
  return contactDiv;
};
