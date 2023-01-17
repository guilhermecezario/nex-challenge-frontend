import { createStore } from 'vuex';

import createPersistedState from 'vuex-persistedstate';

import user from './modules/user';

const store = createStore({
  namespaced: true,
  modules: {
    user,
  },
  plugins: [createPersistedState({
    key: 'nexchallenge',
  })],
});

export default store;
