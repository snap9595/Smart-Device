import {iosVhFix} from './utils/ios-vh-fix';
import {addDescription} from './modules/description';
import {openAccordion} from './modules/accordion';
import {addModal} from './modules/modals/modals';
import {addMask} from './modules/mask';


window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  window.addEventListener('load', () => {
    addDescription();
    openAccordion();
    addModal();
    addMask();
  });
});
