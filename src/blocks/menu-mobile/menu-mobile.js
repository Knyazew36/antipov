export const menuMobile = () => {
  const container = document.querySelector('.menu-mobile');
  const overlay = container.querySelector('.overlay');
  const closeButton = document.querySelector('[data-menu-close]');

  const menuOff = () => {
    container.classList.remove('--active');
    document.querySelector('body').classList.remove('--scroll-lock');
  };
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    container.classList.toggle('--active');
    document.querySelector('body').classList.toggle('--scroll-lock');
  });

  closeButton.addEventListener('click', () => {
    menuOff();
  });

  overlay.addEventListener('click', () => {
    menuOff();
  });
};
