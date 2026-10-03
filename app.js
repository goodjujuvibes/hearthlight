/* Shared Hearthlight invite for join buttons and the FAQ link. */
const DISCORD_URL = 'https://discord.gg/GQsk74s2hz';

(function () {
  'use strict';
  let invite = null;
  try {
    const url = new URL(DISCORD_URL);
    if (url.protocol === 'https:' && (url.hostname === 'discord.gg' ||
        ((url.hostname === 'discord.com' || url.hostname === 'www.discord.com') && url.pathname.startsWith('/invite/')))) {
      invite = url.href;
    }
  } catch (_) { /* Leave links inactive until a valid invite is configured. */ }

  document.querySelectorAll('[data-discord-actions]').forEach(function (actions) {
    actions.hidden = !invite;
  });

  document.querySelectorAll('[data-discord]').forEach(function (link) {
    if (invite) {
      link.href = invite;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.setAttribute('aria-disabled', 'true');
      link.addEventListener('click', function (event) { event.preventDefault(); });
    }
  });
})();
