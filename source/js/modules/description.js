let aboutUs = document.querySelector('.about-us__inner');
let button = document.querySelector('[data-text-button]');
let aboutText = document.querySelector('.about-us__text-hidden');

const addDescription = () => {
  aboutUs.classList.remove('is-nojs');
  aboutText.classList.remove('is-nojs');
  button.style.display = 'inline-block';
  button.addEventListener('click', function (evt) {
    toggleMenu(evt);
  });

  function toggleMenu(evt) {
    evt.preventDefault();
    aboutUs.classList.toggle('is-active');
    aboutText.classList.toggle('is-active');
    if (aboutUs.classList.contains('is-active')) {
      button.textContent = 'Свернуть';
    } else {
      button.textContent = 'Подробнее';
    }
  }
};

export {addDescription};
