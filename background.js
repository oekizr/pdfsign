chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'OPEN_EDITOR' && message.fileId) {
    const url = chrome.runtime.getURL(`editor.html?fileId=${encodeURIComponent(message.fileId)}`);
    chrome.tabs.create({ url });
  }
});
