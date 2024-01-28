export const tub = () => {
  const container = document.querySelector('.tab');
  const tabButtons = container.querySelectorAll('[data-tab]');

  tabButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const tabId = this.getAttribute('data-tab');
      this.classList.add('--active');
      clearButtons();
      button.classList.add('--active');
      changeTab(tabId);
    });
  });

  function changeTab(tabId) {
    const tabContents = container.querySelectorAll('.tab__content');
    tabContents.forEach((tab) => {
      tab.classList.remove('--active');
    });

    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('--active');
  }

  function clearButtons() {
    tabButtons.forEach((button) => {
      button.classList.remove('--active');
    });
  }
};
