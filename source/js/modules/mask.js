import iMask from 'imask';

const addMask = () => {
  const inputTel = document.querySelectorAll('[data-tel]');
  inputTel.forEach((input) => iMask(input, {mask: '+{7}(000)000-00-00'}));
};

export {addMask};
