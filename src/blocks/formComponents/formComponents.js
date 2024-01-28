export const formComponents = () => {
  const inputsContainers = document.querySelectorAll('[data-input-parent]');
  const inputsCity = document.querySelectorAll('[data-input-city]');

  if (inputsContainers.length > 0) {
    inputsContainers.forEach((container) => {
      const input = container.querySelector('[data-input]');
      const reset = container.querySelector('.input-wrapper-svg');

      if (!input) return;

      input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
          container.classList.add('filled');
        } else {
          container.classList.remove('filled');
        }
      });

      if (reset) {
        reset.addEventListener('click', () => {
          input.value = '';
          input.dispatchEvent(new Event('input'));
          container.classList.remove('filled');
        });
      }
    });
  }

  if (inputsCity.length === 0) return;

  inputsCity.forEach((cityContainer) => {
    const inputCity = cityContainer.querySelector('.input-city');
    const input = cityContainer.querySelector('input');
    const resetButton = cityContainer.querySelector('.input-wrapper-svg');
    const links = cityContainer.querySelectorAll('p');

    // Обработчик для клика на элементы p
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const clickedText = e.target.textContent;
        input.value = clickedText;
        input.dispatchEvent(new Event('input'));
        inputCity.classList.remove('active');
      });
    });

    // Обработчик для клика на кнопку сброса
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        input.value = '';
        input.dispatchEvent(new Event('input'));
        inputCity.classList.remove('active');
      });
    }

    // Обработчик для ввода в инпут
    input.addEventListener('input', () => {
      if (input.value.trim().length > 0) {
        inputCity.classList.add('active');
      } else {
        inputCity.classList.remove('active');
      }
    });
  });
};
