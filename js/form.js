// Contact form: no backend, so it opens the visitor's email app with the
// message pre-filled, and gives inline confirmation.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form || !status) return;

  const DEST_EMAIL = 'premjha.dev@gmail.com';

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const subject = (data.get('subject') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    if (!name || !email || !subject || !message) {
      status.textContent = 'Please fill in every field before sending.';
      status.style.color = '#F87171';
      return;
    }

    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${DEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    status.style.color = '#34D399';
    status.textContent = 'Opening your email app to send this…';

    form.reset();
  });
});
