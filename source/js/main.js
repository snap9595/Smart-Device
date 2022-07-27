import {iosVhFix} from './utils/ios-vh-fix';
import {addDescription} from './modules/description';


window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  window.addEventListener('load', () => {
    addDescription();
  });
});
