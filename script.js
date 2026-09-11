const year = new Date().getFullYear();
document.querySelectorAll('[data-year]').forEach(el => el.textContent = year);
document.querySelectorAll('[data-contact-form]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    if (status) status.textContent = 'Thanks. Your message has been prepared. Please email gsm@gsmlawyers.com.au to complete the enquiry.';
  });
});
