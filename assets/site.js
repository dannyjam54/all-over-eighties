function toggleMenu(){const nav=document.getElementById('nav');const button=document.querySelector('.menu');nav.classList.toggle('open');button.setAttribute('aria-expanded',nav.classList.contains('open'));}
document.addEventListener('DOMContentLoaded',()=>{const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();});

// Booking enquiry form: submit via FormSubmit AJAX and show clear feedback.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');
  if (!form) return;
  const button = document.getElementById('booking-submit');
  const status = document.getElementById('booking-status');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Sending enquiry…';
    status.textContent = 'Please wait while we send your enquiry.';
    status.className = 'form-status';
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      const result = await response.json();
      if (response.ok && (result.success === 'true' || result.success === true || result.success === '1')) {
        form.reset();
        status.textContent = 'Thank you! Your enquiry has been sent. We will be in touch soon.';
        status.className = 'form-status success';
      } else {
        throw new Error(result.message || 'The form service did not accept the enquiry.');
      }
    } catch (error) {
      status.textContent = 'Sorry, we could not confirm that your enquiry was sent. Please email allovereighties@gmail.com directly, or try again in a moment.';
      status.className = 'form-status error';
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });
});
