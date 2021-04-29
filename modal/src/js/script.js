'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');

// Toggle on and off Modal
const toggleModal = () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

// Open when click on btn
btnOpenModal.addEventListener('click', toggleModal);
// Close when click on X
btnCloseModal.addEventListener('click', toggleModal);
//  Close when click outside the modal
overlay.addEventListener('click', toggleModal);
// Close when you press ESC on keyboard
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) toggleModal();
});