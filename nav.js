document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.querySelector('.menu-btn');
  var navigation = document.querySelector('.site-nav');
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.site-nav a').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });

  if (!menuButton || !navigation) return;

  function setMenuOpen(isOpen) {
    navigation.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.querySelector('span').textContent = isOpen ? 'Close' : 'Menu';
  }

  menuButton.addEventListener('click', function () {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenuOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 680) setMenuOpen(false);
  });

  document.querySelectorAll('[data-year]').forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });
});
