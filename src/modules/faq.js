const faq = () => {
    const accordeon = document.querySelector('.accordeon');
    const element = accordeon.querySelectorAll('.element');
    const content = accordeon.querySelectorAll('.element-content');
    let active = accordeon.querySelector('.active');

    element.forEach(e => {
        e.addEventListener('click', () => {
            active.classList.remove('active');
            e.classList.add('active');

            active = accordeon.querySelector('.active');
        });
    });
};

export default faq;