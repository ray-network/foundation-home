import store from "store"
import actions from "./actions"

const STORED_SETTINGS = (storedSettings) => {
  const settings = {}
  Object.keys(storedSettings).forEach((key) => {
    const item = store.get(`ray.wallet.settings.${key}`)
    settings[key] = typeof item !== "undefined" ? item : storedSettings[key]
  })
  return settings
}

const initialState = {
  ...STORED_SETTINGS({
    theme: "default",
    cookiesViewed: false,
  }),
  megaMenu: false,
  networkState: {},
  history: {},
  prices: {},
  pools: {},
}

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
