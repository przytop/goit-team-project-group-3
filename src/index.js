import './sass/main.scss';

// ------- SCRIPTS ------- //
// document.querySelector('#').addEventListener('click', () => {
//   document.querySelector('#').classList.add('is-closed');

// document.querySelector('#').addEventListener('click', () => {
//   document.querySelector('#').classList.remove('is-closed');

// --- header --- //
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

// --- yourorder --- //
const modalYourorder = document.querySelector('#modal-yourorder');

document.querySelector('#modal-btn-close').addEventListener('click', () => {
  modalYourorder.classList.add('is-closed');
});

document.querySelector('#modal-btn-submit').addEventListener('click', () => {
  modalYourorder.classList.add('is-closed');
});
