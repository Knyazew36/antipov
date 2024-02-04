import '../styles/style.scss';
import 'virtual:svg-icons-register';
import 'lazysizes';
import { formComponents } from '../blocks/formComponents/formComponents';
import { tub } from '../blocks/tab/tab';
import { menuMobile } from '../blocks/menu-mobile/menu-mobile';

document.addEventListener('DOMContentLoaded', function () {
  formComponents();
  tub();
  menuMobile();
});
