import '../styles/style.scss';
import 'virtual:svg-icons-register';
import 'lazysizes';
import { formComponents } from '../blocks/formComponents/formComponents';
import { tub } from '../blocks/tab/tab';

document.addEventListener('DOMContentLoaded', function () {
  formComponents();
  tub();
});
