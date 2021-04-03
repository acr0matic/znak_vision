/* global LazyLoad, MicroModal */

MicroModal.init({
  awaitCloseAnimation: true,
  disableFocus: true,
  disableScroll: true,
});

// eslint-disable-next-line no-unused-vars
const lazyLoadInstance = new LazyLoad();

const hireButton = document.getElementById('hire');
const hireCheck = document.getElementById('hire-check');

hireCheck.addEventListener('change', () => {
  if (!hireCheck.checked) hireButton.setAttribute('disabled', 'disabled');
  else hireButton.removeAttribute('disabled');
});
