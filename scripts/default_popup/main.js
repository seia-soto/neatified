const states = {
  reset: 0
}

const actionable_buttons = 'div.buttons > button'
const reset_button = 'button[data-util-action="reset"]'

/**
 * Set content script injection mode with UI
 *
 * @param {HTMLElement} el The element to set active
 * @param {string} action The action to use
 */
const ui_set_action = async (el, action) => {
  ui_disable_all_buttons()

  set_action(await get_current_host(), action)
  el.classList.add('active')
}

/**
 * Disable all active buttons
 */
const ui_disable_all_buttons = () => {
  document.querySelectorAll(actionable_buttons).forEach(el => {
    el.classList.remove('active')
  })
}

/**
 * Enable button with current value
 */
const ui_enable_active_button = async () => {
  const action = await get_action(await get_current_host())

  document.querySelector(`[data-action-mode='${action}']`).classList.add('active')
}

/**
 * Reset all config with UI
 */
const ui_reset_config = async () => {
  if (states.reset) {
    return
  }

  const el = document.querySelector(reset_button)

  el.classList.remove('active')
  el.innerHTML = '초기화 중...'
  states.reset = 1

  await reset_config()

  el.classList.add('active')
  el.innerHTML = '설정 초기화'
  states.reset = 0

  // reload current popup
  window.location.reload()
}

/**
 * Add onclick hook to all actionable buttons
 */
const ui_hook_action_buttons = () => {
  ui_disable_all_buttons()

  document.querySelectorAll(actionable_buttons).forEach(el => {
    /**
     * @type {string}
     */
    const action = el.dataset.actionMode

    el.addEventListener('click', () => ui_set_action(el, action))
  })

  // reset button
  document.querySelector(reset_button).addEventListener('click', () => ui_reset_config())
}

////////////////////

ui_hook_action_buttons()
ui_enable_active_button()
