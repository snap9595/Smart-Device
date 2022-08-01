let header = document.querySelector('.header');
let main = document.querySelector('.main');
let footer = document.querySelector('.footer');
let modalButton = document.querySelector('[data-open-modal]');
let modal = document.querySelector('.modal');
let close = document.querySelector('.modal__close-btn');
let overlay = document.querySelector('[data-close-modal]');
let nameInput = document.querySelector('#modal-name');
let agreementInput = document.querySelector('#modal-agreement');
const inputFirst = document.querySelector('#modal-input-first');
const inputLast = document.querySelector('#modal-input-last');

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

      header.setAttribute('inert', 'true');
      main.setAttribute('inert', 'true');
      footer.setAttribute('inert', 'true');

      nameInput.focus();

      close.addEventListener('click', function () {
        closeModal();
      });

      document.addEventListener('keydown', closeKeyModal);
      overlay.addEventListener('click', closeModal);

      inputLast.addEventListener('focus', () => {
        close.focus();
      });
      inputFirst.addEventListener('focus', () => {
        agreementInput.focus();
      });
    }
  });

  function closeModal() {
    modal.classList.remove('is-active');
    document.body.style.overflow = 'auto';
    header.removeAttribute('inert');
    main.removeAttribute('inert');
    footer.removeAttribute('inert');
  }
};

export {addModal};
