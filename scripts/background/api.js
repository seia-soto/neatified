function sendToContent(response) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      'neatified.background.api': {
        response: response
      }
    })
  })
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request['neatified.background.api'].action) {
    case 'neatified-siteFilter':
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        const tab = tabs[0]

        chrome.storage.local.get(['neatifiedDisabled', 'sitesDisabled'], function (result) {
          sendToContent({
            tab: tab,
            storage: result
          })
        })
      })
      break;
  }
})
