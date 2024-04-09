import './sass/main.scss';

// ------- SCRIPTS ------- //
// document.querySelector('#').addEventListener('click', () => {
//   document.querySelector('#').classList.add('is-closed');

// document.querySelector('#').addEventListener('click', () => {
//   document.querySelector('#').classList.remove('is-closed');

// --- yourorder --- //
document.querySelector('#modal-btn-close').addEventListener('click', () => {
  document.querySelector('#modal-yourorder').classList.add('is-closed');
});
