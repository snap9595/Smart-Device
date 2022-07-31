let footerMenu = document.querySelectorAll('[data-menu]');

const openAccordion = () => {

  footerMenu.forEach((element) => {
    if (element.classList.contains('is-nojs')) {
      element.classList.remove('is-nojs');
    }
  });

  footerMenu.forEach((element) => {
    element.addEventListener('click', () => {
      if (element.classList.contains('is-active')) {
        element.classList.remove('is-active');
      } else {
        footerMenu.forEach((accordion) => accordion.classList.remove('is-active'));
        element.classList.add('is-active');
      }
    });
  });
};

export {openAccordion};
