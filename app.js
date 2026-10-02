/* Hearthlight Discord invite. Replace null with the new invite when ready.
   This setting activates every join link; the archived invite is not reused. */
const DISCORD_URL = null;

(function () {
  'use strict';
  const dialog = document.querySelector('.invite-dialog');
  let invite = null;
  let inviteHistoryAdded = false;

  try {
    const url = new URL(DISCORD_URL);
    if (url.protocol === 'https:' && (url.hostname === 'discord.gg' ||
        ((url.hostname === 'discord.com' || url.hostname === 'www.discord.com') && url.pathname.startsWith('/invite/')))) {
      invite = url.href;
    }
  } catch (_) { /* No Hearthlight invite yet. */ }

  function openInvite() {
    if (dialog.open) return;
    dialog.showModal();
    try {
      history.pushState({ hearthlightInvite: true }, '');
      inviteHistoryAdded = true;
    } catch (_) { /* The dialog still works when history is unavailable. */ }
  }

  function dismissInvite() {
    if (inviteHistoryAdded) history.back();
    else dialog.close();
  }

  document.querySelectorAll('[data-discord]').forEach(function (link) {
    if (invite) {
      link.href = invite;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else if (typeof dialog.showModal === 'function') {
      link.setAttribute('aria-haspopup', 'dialog');
      link.addEventListener('click', function (event) {
        event.preventDefault();
        openInvite();
      });
    }
  });

  if (invite) {
    document.querySelectorAll('[data-invite-status], [data-invite-faq]').forEach(function (note) {
      note.hidden = true;
    });
  }

  window.addEventListener('popstate', function () {
    inviteHistoryAdded = false;
    if (dialog.open) dialog.close();
  });
  dialog.addEventListener('cancel', function (event) {
    event.preventDefault();
    dismissInvite();
  });
  dialog.querySelectorAll('[data-close-invite]').forEach(function (button) {
    button.addEventListener('click', dismissInvite);
  });
  dialog.addEventListener('click', function (event) {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dismissInvite();
  });
})();
