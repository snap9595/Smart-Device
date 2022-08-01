import IMask from 'imask';

const addMask = () => {
  const inputTel = document.querySelectorAll('[data-tel]');
  // eslint-disable-next-line
  inputTel.forEach((input) => IMask(input, {mask: '+{7}(000)000-00-00'}));
};

export {addMask};
