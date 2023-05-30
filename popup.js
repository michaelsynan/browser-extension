// popup.js
window.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    const tabName = activeTab.title || 'Unknown Tab';
    const message = `Welcome to my extension!\nActive Tab: ${tabName}`;
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
  });
});
