(() => {
  const match = window.location.pathname.match(/\/file\/d\/([^/]+)/);
  if (!match) return;
  const fileId = match[1];

  function injectButton() {
    if (document.getElementById('dps-edit-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'dps-edit-btn';
    btn.textContent = 'Edit & Tanda Tangani';
    btn.addEventListener('click', () => {
      chrome.runtime.sendMessage({ type: 'OPEN_EDITOR', fileId });
    });
    document.body.appendChild(btn);
  }

  injectButton();
  const observer = new MutationObserver(injectButton);
  observer.observe(document.body, { childList: true, subtree: true });
})();
