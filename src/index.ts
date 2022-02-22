import { Store } from 'vuex'

const store = new Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    add (context) {
      context.commit('increment');
    }
  }
})

export { store as wallet }
