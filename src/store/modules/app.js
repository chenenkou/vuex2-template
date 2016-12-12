import * as types from '../mutation-types'

// state
const state = {
  msg: 'Welcome to Your Vue.js App',
  essentialLinksName: 'Essential Links',
  essentialLinks: [
    {text: 'Core Docs', href: 'https://vuejs.org'},
    {text: 'Forum', href: 'https://forum.vuejs.org'},
    {text: 'Gitter Chat', href: 'https://gitter.im/vuejs/vue'},
    {text: 'Twitter', href: 'https://twitter.com/vuejs'},
    {text: 'Docs for This Template', href: 'http://vuejs-templates.github.io/webpack/'}
  ]
}

// getters
const getters = {
  [types.APP_ES_LINKS] (state) {
    return state.essentialLinks
  }
}

// actions
const actions = {
  [types.APP_SHOW_ES_LINKS] ({ commit, state }) {
    commit(types.APP_CHANGE_ES_LINKS)
  }
}

// mutations
const mutations = {
  [types.APP_CHANGE_ES_LINKS] (state) {
    state.essentialLinksName += '!'
  },
  [types.APP_UPDATE_ES_LINKS] (state, value) {
    state.essentialLinksName = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
