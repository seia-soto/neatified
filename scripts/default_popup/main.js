document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    const tab = tabs[0]
    const url = new URL(tab.url)
    const hostname = url.hostname

    chrome.storage.local.get(['sitesDisabled', 'neatifiedDisabled'], function (result) {
      result.sitesDisabled = result.sitesDisabled || []

      chrome.storage.local.set({
        sitesDisabled: result.sitesDisabled,
        neatifiedDisabled: result.neatifiedDisabled
      })

      document.querySelector('#neatified-LocalToggle').checked = true
      document.querySelector('#neatified-GlobalToggle').checked = true

      if (result.sitesDisabled.indexOf(hostname) > -1) {
        document.querySelector('#neatified-LocalToggle').checked = false
      }
      if (result.neatifiedDisabled) {
        document.querySelector('#neatified-LocalToggle').disabled = true
        document.querySelector('#neatified-LocalToggle').checked = false

        document.querySelector('#neatified-GlobalToggle').checked = false
      }

      document.querySelector('#neatified-LocalToggle').addEventListener('click', function () {
        if (result.sitesDisabled.indexOf(hostname) == -1) {
          result.sitesDisabled.push(hostname)
        } else {
          result.sitesDisabled.splice(result.sitesDisabled.indexOf(hostname), 1)
        }

        chrome.storage.local.set({
          sitesDisabled: result.sitesDisabled,
          neatifiedDisabled: result.neatifiedDisabled
        })
        chrome.tabs.update(tabs[0].id, { url: tabs[0].url })
      })
      document.querySelector('#neatified-GlobalToggle').addEventListener('click', function () {
        result.neatifiedDisabled = !result.neatifiedDisabled

        if (result.neatifiedDisabled) {
          document.querySelector('#neatified-LocalToggle').disabled = true
          document.querySelector('#neatified-LocalToggle').checked = false
        } else {
          document.querySelector('#neatified-LocalToggle').disabled = false
          document.querySelector('#neatified-LocalToggle').checked = !result.sitesDisabled.indexOf(hostname) > -1
        }

        chrome.storage.local.set({
          sitesDisabled: result.sitesDisabled,
          neatifiedDisabled: result.neatifiedDisabled
        })
        chrome.tabs.update(tabs[0].id, { url: tabs[0].url })
      })
    })
  })
})
