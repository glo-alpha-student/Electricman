const modalPlus = () => {
    const modalContainer = document.querySelector('.modal-overlay');
    const callbackBtn = document.querySelectorAll('.button-services');

    callbackBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            modalContainer.style.display = "block";

        });
    });

    modalContainer.addEventListener('click', e => {
        if (!e.target.closest('.modal-callback') || e.target.closest('.modal-close')) {
            modalContainer.style.display = 'none';
        }
    });
};

export default modalPlus;