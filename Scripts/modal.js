// modal.js
const modalCustom = document.querySelector('.modal-custom');
const manuModal = document.querySelector('.manu-modal');

modalCustom.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    manuModal.classList.add('show');
});

modalCustom.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        manuModal.classList.remove('show');
    }, 200);
});