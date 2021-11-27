let browser = chrome

if (typeof window !== 'undefined') {
  browser = window.browser || browser
}

const actions = [
  'disable',
  'enable_soft',
  'enable_strict'
]

/**
 * Get current hostname of the active tab
 *
 * @returns {Promise<string>} hostname
 */
const get_current_host = async () => {
  const [tab] = await browser.tabs.query({
    active: true,
    currentWindow: true
  })

  /**
   * @type {string}
   */
  const { url } = tab

  return (new URL(url)).hostname
}

/**
 * Get content script injection mode
 *
 * @param {string} hostname
 * @returns {Promise<string>}
 */
const get_action = async (hostname) => {
  const config = await browser.storage.sync.get(hostname)

  const value = Number(config[hostname])

  return actions[value] || actions[0]
}

/**
 * Set content script injection mode
 *
 * @param {string} hostname
 * @param {string} action
 */
const set_action = async (hostname, action) => {
  await browser.storage.sync.set({
    [hostname]: actions.indexOf(action)
  })
}

/**
 * Reset all config
 */
const reset_config = async () => {
  await browser.storage.local.clear()
  await browser.storage.sync.clear()
}
