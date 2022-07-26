import {addDescription} from './modules/description';
import {openAccordion} from './modules/accordion';
import {addModal} from './modules/modals';
import {addMask} from './modules/mask';
import {addLocalStorage} from './modules/local-storage';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    addDescription();
    openAccordion();
    addModal();
    addMask();
    addLocalStorage();
  });
});
