export default {
  namespaced: true,
  state: {
    loggedIn: false,
    user: null,
  },
  getters: {
    loggedIn: (state) => state.loggedIn,
    token: (state) => (state.user && state.user.access_token ? state.user.access_token : null),
  },
  actions: {
    login({ commit }, payload) {
      commit('loginSuccess', payload);
    },
    changeSite({ commit }, site) {
      commit('changeSite', site);
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.loggedIn = true;
      state.user = user;
    },
    logout(state) {
      state.loggedIn = false;
      state.user = null;
    },
  },
};
