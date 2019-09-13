try {
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

  document.addEventListener('DOMContentLoaded', function () {
    neatified(preventions)

    // NOTE: Neatify every DOM element created.
    const observer = new MutationObserver(function (mutationList, observer) {
      const nodeAdded = []

      mutationList.forEach(function (mutation) {
        nodeAdded.push(...mutation.addedNodes)
      })

      neatified(preventions, Array.from(nodeAdded))
    })
    observer.observe(document.querySelector('html'), { childList: true, subtree: true })
  })
} catch (error) {
  console.log('Error: ' + error)
}
