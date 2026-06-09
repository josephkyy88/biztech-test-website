/* ─── Biztech Group — Main JS ─── */

// ─── FAQ Accordion ───
function initFAQ() {
  document.querySelectorAll('.faq-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ─── Scroll reveal ───
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ─── Web3Forms — email delivery ───────────────────────────────────────────────
//
//  SETUP (one-time, ~2 minutes):
//  1. Go to https://web3forms.com
//  2. Enter:  support@biztechgroup.com.sg
//  3. Click "Create Access Key" — Web3Forms emails your key instantly (check spam).
//  4. Open contact.html and blog.html — find the hidden input named "access_key"
//     and replace  YOUR_WEB3FORMS_ACCESS_KEY  with the key you received.
//  Done. All form submissions will deliver to support@biztechgroup.com.sg.
//
const W3F_ENDPOINT = 'https://api.web3forms.com/submit';

// Builds a JSON-serialisable payload from a form.
// Multiple values under the same name (checkboxes) are joined as "A, B, C".
// botcheck is NOT filtered — if a bot checks it the value reaches Web3Forms for rejection.
function buildPayload(form) {
  const data = {};
  for (const [key, value] of new FormData(form)) {
    data[key] = key in data ? data[key] + ', ' + value : value;
  }
  data.source_url = window.location.href;
  return data;
}

// Generic submit + response handler used by all forms on this site.
function submitForm(form, btn, successText) {
  const orig = btn.textContent;
  btn.textContent = 'Sending…';
  btn.disabled = true;

  const payload = buildPayload(form);

  // Dev guard — warn clearly if key is still a placeholder
  if (!payload.access_key || payload.access_key === 'YOUR_WEB3FORMS_ACCESS_KEY') {
    console.warn(
      '[Biztech] Web3Forms key not set.\n' +
      '1. Visit https://web3forms.com\n' +
      '2. Enter support@biztechgroup.com.sg\n' +
      '3. Replace YOUR_WEB3FORMS_ACCESS_KEY in the hidden <input> inside every <form>.'
    );
    setTimeout(() => {
      btn.textContent = successText + ' (dev only — key not set)';
      btn.style.background = '#155c3d';
      setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.disabled = false; form.reset(); }, 4000);
    }, 700);
    return;
  }

  fetch(W3F_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(result => {
      if (result.success) {
        showFormSuccess(form, btn, orig, successText);
      } else {
        showFormError(btn, orig, result.message || 'Submission failed — please try again.');
      }
    })
    .catch(() => {
      showFormError(btn, orig, 'Network error — please check your connection and try again.');
    });
}

function showFormSuccess(form, btn, orig, successText) {
  btn.textContent = successText;
  btn.style.background = '#155c3d';

  // Insert a confirmation block above the submit button
  const existing = form.querySelector('.form-success-msg');
  if (!existing) {
    const msg = document.createElement('div');
    msg.className = 'form-success-msg';
    msg.style.cssText = 'background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:20px 24px;font-size:.88rem;color:#166534;line-height:1.7;';
    msg.innerHTML =
      '<strong style="display:block;font-size:.95rem;margin-bottom:6px;">Thank you for contacting Biztech Group.</strong>' +
      'We have received your enquiry and a member of our team will review your request and respond as soon as possible.<br>' +
      'For urgent matters, please contact us directly at ' +
      '<a href="mailto:support@biztechgroup.com.sg" style="color:#166534;font-weight:600;">support@biztechgroup.com.sg</a>.';
    btn.parentNode.insertBefore(msg, btn);
  }

  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    btn.disabled = false;
    form.reset();
    const msg = form.querySelector('.form-success-msg');
    if (msg) msg.remove();
  }, 6000);
}

function showFormError(btn, orig, message) {
  btn.textContent = '⚠ ' + message;
  btn.style.background = '#991b1b';
  btn.style.fontSize = '.8rem';
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.style.fontSize = ''; btn.disabled = false; }, 5000);
}

// ─── Contact form (#contact-form) ───
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm(form, form.querySelector('[type=submit]'), 'Enquiry Sent! ✓');
  });
}

// ─── Survey / RFQ form (#survey-form — future use) ───
function initSurveyForm() {
  const form = document.getElementById('survey-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm(form, form.querySelector('[type=submit]'), 'Request Received! ✓');
  });
}

// ─── Counter animation ───
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, 25);
  });
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
  }, { threshold: 0.3 });
  obs.observe(counters[0]);
}

document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
  initReveal();
  initContactForm();
  initSurveyForm();
  initCounters();
});
