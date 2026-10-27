/* Swedemount Roofing & Siding — page behaviour
 * 1. Project carousel (arrows + progress bars)
 * 2. Free-estimate form (sends to Formspree once you add your form ID)
 */
(function () {
  'use strict';

  /* ---------- 1. Project carousel ---------- */
  var track = document.getElementById('sm-track');
  var bars = Array.prototype.slice.call(document.querySelectorAll('.sm-bar'));
  var prev = document.getElementById('sm-prev');
  var next = document.getElementById('sm-next');

  if (track) {
    var cards = track.children;
    // Stop one card early so the last two projects always sit side by side.
    var positions = Math.max(1, cards.length - 1);
    var current = 0;

    function step() {
      if (!cards.length) return 0;
      var gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
      return cards[0].getBoundingClientRect().width + gap;
    }

    function go(i) {
      current = (i + positions) % positions;
      track.style.transform = 'translateX(' + (-current * step()) + 'px)';
      bars.forEach(function (b, k) { b.setAttribute('aria-pressed', String(k === current)); });
    }

    if (prev) prev.addEventListener('click', function () { go(current - 1); });
    if (next) next.addEventListener('click', function () { go(current + 1); });
    bars.forEach(function (b) {
      b.addEventListener('click', function () { go(parseInt(b.getAttribute('data-slide'), 10) || 0); });
    });
    window.addEventListener('resize', function () { go(current); });
  }

  /* ---------- 2. Free-estimate form ---------- */
  var form = document.getElementById('sm-form');
  var sent = document.getElementById('sm-sent');

  function showSent() {
    if (form) form.hidden = true;
    if (sent) { sent.hidden = false; sent.focus && sent.setAttribute('tabindex', '-1'); sent.focus && sent.focus(); }
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var action = form.getAttribute('action') || '';

      // Not connected yet: show the confirmation so the page can be previewed.
      if (action.indexOf('YOUR_FORM_ID') !== -1) {
        console.warn('Estimate form is not connected yet. Add your Formspree form ID in index.html.');
        showSent();
        return;
      }

      var button = form.querySelector('button[type="submit"]');
      if (button) { button.disabled = true; button.textContent = 'Sending…'; }

      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (res.ok) { showSent(); return; }
        throw new Error('Request failed');
      }).catch(function () {
        if (button) { button.disabled = false; button.textContent = 'Request my free estimate'; }
        alert('Sorry, your request did not go through. Please call (862) 220-3662.');
      });
    });
  }
})();
