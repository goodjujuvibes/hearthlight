(function () {
  'use strict';
  document.documentElement.classList.add('js');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  function closeMenu() {
    menu.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    menu.querySelector('span').textContent = '+';
  }
  menu.addEventListener('click', function () {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    menu.querySelector('span').textContent = open ? '−' : '+';
  });
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      menu.focus();
    }
  });
  const dialog = document.querySelector('.invite-dialog');
  const configured = window.HEARTHLIGHT_CONFIG?.discordUrl;
  let invite = null;
  try {
    const url = new URL(configured);
    if (url.protocol === 'https:' && (url.hostname === 'discord.gg' ||
        ((url.hostname === 'discord.com' || url.hostname === 'www.discord.com') && url.pathname.startsWith('/invite/')))) {
      invite = url.href;
    }
  } catch (_) { /* No configured invite yet. */ }
  document.querySelectorAll('[data-discord]').forEach(function (link) {
    if (invite) {
      link.href = invite;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else if (typeof dialog.showModal === 'function') {
      link.setAttribute('aria-haspopup', 'dialog');
      link.addEventListener('click', function (event) {
        event.preventDefault();
        dialog.showModal();
      });
    }
  });
  if (invite) {
    document.querySelectorAll('[data-invite-status]').forEach(function (note) { note.hidden = true; });
    const joinAnswer = document.querySelector('.faq-list details:last-child .answer p');
    joinAnswer.textContent = 'Start with a hello in the Hearthlight Discord. Tell us a little about yourself and what you enjoy in-game, ask your questions, and see whether the company feels right.';
  }
  dialog.querySelectorAll('[data-close]').forEach(function (button) {
    button.addEventListener('click', function () { dialog.close(); });
  });
  dialog.addEventListener('click', function (event) {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
})();
