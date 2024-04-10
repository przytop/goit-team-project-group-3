import './sass/main.scss';

// ------- CONST ------- //
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const modalYourorder = document.querySelector('#modal-yourorder');

// ------- SCRIPTS ------- //
// --- header --- //
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

// --- fruits --- //
document.querySelector('#order-btn-click').addEventListener('click', () => {
  modalYourorder.classList.remove('is-closed');
});

// --- yourorder --- //
document.querySelector('#modal-btn-close').addEventListener('click', () => {
  modalYourorder.classList.add('is-closed');
});

document.querySelector('#modal-btn-submit').addEventListener('click', () => {
  modalYourorder.classList.add('is-closed');
});

// --- thankyou --- //
document.querySelector('#thankyou-btn').addEventListener('click', () => {
  document.querySelector('#modal-thankyou').classList.add('is-closed');
});
