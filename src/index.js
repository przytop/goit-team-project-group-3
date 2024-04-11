import './sass/main.scss';

// ------- CONST ------- //
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const modalYourOrder = document.querySelector('#modal-yourorder');
const modalThankYou = document.querySelector('#modal-thankyou');

// ------- SCRIPTS ------- //
// --- header --- //
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

// --- fruits --- //
document.querySelector('#order-btn-click').addEventListener('click', () => {
  modalYourOrder.classList.remove('is-closed');
});

// --- contacts --- //
document.querySelector('#contacts-modal-button').addEventListener('click', () => {
  modalThankYou.classList.remove('is-closed');
});

// --- yourorder --- //
document.querySelector('#modal-btn-close').addEventListener('click', () => {
  modalYourOrder.classList.add('is-closed');
});

document.querySelector('#modal-btn-submit').addEventListener('click', () => {
  modalYourOrder.classList.add('is-closed');
});

// --- thankyou --- //
document.querySelector('#thankyou-btn').addEventListener('click', () => {
  modalThankYou.classList.add('is-closed');
});
