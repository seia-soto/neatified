document.addEventListener('DOMContentLoaded', function () {
  chrome.runtime.onMessage.addListener(function (response) {
    response = response['neatified.background.api'].response

    const hostname = new URL(response.tab.url).hostname
    const result = response.storage

    if (!result.neatifiedDisabled && result.sitesDisabled.indexOf(hostname) < 0) {
      const preventions = {
        events: [
          'copy',
          'dragstart',
          'contextmenu',
          'selectstart'
        ],
        attributes: [
          'oncontextmenu'
        ]
      }

      function neatified(options, elements) {
        elements = elements || Array.from(document.querySelectorAll('*'))

        elements.forEach(function (element) {
          if (typeof element === 'object' && element !== null) {
            options.events.forEach(function (eventName) {
              element.addEventListener(eventName, function (event) {
                event.stopPropagation()
              }, true)
            })
            options.attributes.forEach(function (attrName) {
              if (element.nodeType != 3 /* If Node is not [object Text] (Text node) */) {
                element.removeAttribute(attrName)
              }
            })
          }
        })
      }
      neatified(preventions)

      // NOTE: Insert stylesheet.
      const styleCtx = `
        *, *::after, *::before {
        	-webkit-user-select: auto !important;
        	-webkit-user-drag: auto !important;
        	-webkit-app-region: auto !important;
        }
      `
      const style = document.createElement('style')

      style.innerHTML = styleCtx

      document.querySelector('head').appendChild(style)

      // NOTE: Neatify every DOM element created.
      const observer = new MutationObserver(function (mutationList, observer) {
        const nodeAdded = []

        mutationList.forEach(function (mutation) {
          nodeAdded.push(...mutation.addedNodes)
        })

        neatified(preventions, Array.from(nodeAdded))
      })
      observer.observe(document.querySelector('html'), { childList: true, subtree: true })
    }
  })
  chrome.runtime.sendMessage({ 'neatified.background.api': { action: 'neatified-siteFilter' } })
})
