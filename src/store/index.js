import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		user: null,
		logged: false
  },
  mutations: {
		setUser (state, user) {
			state.user = user
		},
		login (state) {
			state.logged = true
		},
		loggout (state) {
			state.logged = false
			state.user = null
		}
  },
  actions: {
  },
  modules: {
  }
})
