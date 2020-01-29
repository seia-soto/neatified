document.addEventListener('DOMContentLoaded', function () {
  const buttons = {
    setLevel: [
      document.querySelector('#ButtonSetLevel0'),
      document.querySelector('#ButtonSetLevel1'),
      document.querySelector('#ButtonSetLevel2')
    ]
  }

  chrome.storage.local.get(['level'], function (preferences) {
    if (typeof preferences.level === 'undefined' || preferences.level === null) {
      // NOTE: Because when the config set 'nothing', javascript will always use 1 if I use `preferences.level = preferences.level || 1` instead.
      preferences.level = 1
    }

    for (let i = 0; i < buttons.setLevel.length; i++) {
      buttons.setLevel[i].addEventListener('click', function () {
        for (let k = 0; k < buttons.setLevel.length; k++) {
          buttons.setLevel[k].classList.remove('active')
        }
        buttons.setLevel[i].classList.add('active')

        chrome.storage.local.set({ level: i })
      })
    }

    buttons.setLevel[preferences.level].classList.add('active')
    chrome.storage.local.set({ level: preferences.level })
  })
})
