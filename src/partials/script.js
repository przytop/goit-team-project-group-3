const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const modalYourOrder = document.querySelector('#modal-yourorder');
const modalThankYou = document.querySelector('#modal-thankyou');

// HEADER

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

document.querySelector('#header-basket').addEventListener('click', () => {
  modalYourOrder.classList.remove('is-hidden');
  bodyScrollLock.disableBodyScroll(document.body);
});

document.querySelector('#header-basket-white').addEventListener('click', () => {
  modalYourOrder.classList.remove('is-hidden');
  bodyScrollLock.disableBodyScroll(document.body);
});

// FRUITS
document.querySelector('#order-btn-click').addEventListener('click', () => {
  modalYourOrder.classList.remove('is-hidden');
  bodyScrollLock.disableBodyScroll(document.body);
});

// CONTACTS
document.querySelector('#contacts-modal-button').addEventListener('click', () => {
  modalThankYou.classList.remove('is-hidden');
});

// YOUR ORDER
document.querySelector('#modal-btn-close').addEventListener('click', () => {
  modalYourOrder.classList.add('is-hidden');
  bodyScrollLock.enableBodyScroll(document.body);
});

document.querySelector('#checkbox-input-one').addEventListener('click', () => {
  document.querySelector('#checkbox-icon-one').classList.toggle('is-hidden');
});

document.querySelector('#checkbox-input-two').addEventListener('click', () => {
  document.querySelector('#checkbox-icon-two').classList.toggle('is-hidden');
});

document.querySelector('#checkbox-input-three').addEventListener('click', () => {
  document.querySelector('#checkbox-icon-three').classList.toggle('is-hidden');
});

document.querySelector('#modal-btn-submit').addEventListener('click', () => {
  modalYourOrder.classList.add('is-hidden');
  modalThankYou.classList.remove('is-hidden');
});

// THANK YOU
document.querySelector('#thankyou-btn').addEventListener('click', () => {
  modalThankYou.classList.add('is-hidden');
  bodyScrollLock.enableBodyScroll(document.body);
});
