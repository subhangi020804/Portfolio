document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    message.style.display = 'block';
    form.reset();
  });
});