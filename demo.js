const hamburger = document.querySelectorAll('.hamburger');
hamburger.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('is-action');
  });
});