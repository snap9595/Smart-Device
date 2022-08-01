const inputFields = document.querySelectorAll('input');
const textareas = document.querySelectorAll('textarea');

const addLocalStorage = () => {
  inputFields.forEach((inputField) => {
    const key = inputField.id;
    inputField.value = localStorage.getItem(key);
    inputField.addEventListener('input', () => {
      localStorage.setItem(key, inputField.value);
    });
  });

  textareas.forEach((textarea) => {
    const key = textarea.id;
    textarea.value = localStorage.getItem(key);
    textarea.addEventListener('input', () => {
      localStorage.setItem(key, textarea.value);
    });
  });
};

export {addLocalStorage};
