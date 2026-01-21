chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension TrackLol installée.');
});

// Exemple de message reçu du content script ou du popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.greeting === "hello") {
    sendResponse({farewell: "goodbye"});
  }
});
