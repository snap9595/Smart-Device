import IMask from 'imask';

const addMask = () => {
  const inputs = document.querySelectorAll('[data-tel]');
  // eslint-disable-next-line
  inputs.forEach((input) => IMask(input, {mask: '+{7}(000)000-00-00'}));
};

export {addMask};
