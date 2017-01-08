var background = chrome.extension.getBackgroundPage();
localStorage.setItem('goTime', false);

function initPage() {
  var requestListener = function(details) {
    if (details.type !== 'main_frame' || localStorage.getItem('goTime') === 'false') {
      return;
    }

    for (var i = 0; i < details.requestHeaders.length; ++i) {
      if (details.requestHeaders[i].name === 'Cookie') {
        details.requestHeaders[i].value = localStorage.getItem('cookies');
        break;
      }
    }

    localStorage.setItem('goTime', false);

    return {requestHeaders: details.requestHeaders}
  };

  chrome.webRequest.onBeforeSendHeaders.addListener(requestListener, {
    urls: ["<all_urls>"]
  }, ["requestHeaders", "blocking"]);
}

initPage();
