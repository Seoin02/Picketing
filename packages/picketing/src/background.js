let currentUrl = '';

chrome.runtime.onMessage.addListener((message, sender, senResponse) => {
  if (message.url) {
    currentUrl = message.url;
  }
});

chrome.runtime.onConnect.addListener(port => {
  if (port.name === 'popup') {
    port.postMessage({ url: currentUrl });
  }
});
