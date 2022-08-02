let header = document.querySelector('.header');
let main = document.querySelector('.main');
let footer = document.querySelector('.footer');
let modalButton = document.querySelector('[data-open-modal]');
let modal = document.querySelector('.modal');
let close = document.querySelector('.modal__close-btn');
let overlay = document.querySelector('[data-close-modal]');
let nameInput = document.querySelector('#modal-name');
let lastInput = document.querySelector('#last-input');

const addModal = () => {
  const isEscapeKey = (evt) => evt.key === 'Escape';

  function closeKeyModal(evt) {
    if (isEscapeKey(evt)) {
      closeModal();
    }
  }

  modalButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.toggle('is-active');

    if (modal.classList.contains('is-active')) {
      document.body.style.overflow = 'hidden';
      openModal();
      header.setAttribute('inert', 'true');
      main.setAttribute('inert', 'true');
      footer.setAttribute('inert', 'true');

      nameInput.focus();

      close.addEventListener('click', function () {
        closeModal();
      });

      document.addEventListener('keydown', closeKeyModal);
      overlay.addEventListener('click', closeModal);

      lastInput.addEventListener('focus', () => {
        close.focus();
      });
    }
  });

  function openModal() {
    modal.style.display = 'flex';
    modal.style.pointerEvents = 'auto';
  }

  function closeModal() {
    modal.classList.remove('is-active');
    document.body.style.overflow = 'auto';
    modal.style.display = 'none';
    modal.style.pointerEvents = 'none';
    header.removeAttribute('inert');
    main.removeAttribute('inert');
    footer.removeAttribute('inert');
  }
};

export {addModal};
