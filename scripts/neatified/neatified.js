const profiles = {
  disable: {
    events: [],
    attributes: [],
    useStyler: false,
    useObserver: false
  },
  enable_soft: {
    events: [
      'copy',
      'dragstart',
      'contextmenu',
      'selectstart'
    ],
    attributes: [
      'oncontextmenu'
    ],
    useStyler: true,
    useObserver: true
  },
  enable_strict: {
    events: [
      'copy',
      'dragstart',
      'contextmenu',
      'selectstart',
      'selectionchange',
      'mouseup',
      'mousedown',
      'keydown',
      'keyup',
      'keypress'
    ],
    attributes: [
      'oncontextmenu'
    ],
    useStyler: true,
    useObserver: true
  }
}

const neatified = (options, elements) => {
  elements = elements || Array.from(document.querySelectorAll('body > *'))

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]

    if (typeof element === 'object' && element !== null) {
      for (let k = 0; k < options.events.length; k++) {
        const eventName = options.events[k]

        element.addEventListener(eventName, function (event) {
          event.stopPropagation()
        }, true)
      }
      for (let j = 0; j < options.attributes.length; j++) {
        const attrName = options.attributes[j]

        if (element.nodeType != 3 /* If Node is not [object Text] (Text node) */) {
          element.removeAttribute(attrName)
        }
      }
    }
  }
}

const neatified_styler = () => {
  const styleCtx = `
    html, body, *, *::after, *::before {
      cursor: auto !important;
      user-select: auto !important;
      -webkit-user-select: auto !important;
      -webkit-user-drag: auto !important;
      -webkit-app-region: auto !important;
    }
  `
  const style = document.createElement('style')

  style.innerHTML = styleCtx

  document.querySelector('head').appendChild(style)
}

const neatified_observer = profile => {
  const observer = new MutationObserver(function (mutationList) {
    const nodeAdded = []

    for (let k = 0; k < mutationList.length; k++) {
      nodeAdded.push(...mutationList[k].addedNodes)

      if (mutationList[k].type === 'attributes') { // NOTE: attributes already filtered.
        nodeAdded.push(mutationList[k].target)
      }
    }

    neatified(profile, Array.from(nodeAdded))
  })

  observer.observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: profile.attributes
  })
}

const neatified_init = async () => {
  const action = await get_action((new URL(location.href)).hostname)
  const profile = profiles[action]

  neatified(profile)

  if (profile.useStyler) neatified_styler()
  if (profile.useObserver) neatified_observer(profile)
}

neatified_init()
