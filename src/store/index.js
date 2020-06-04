import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var local=JSON.parse(localStorage.getItem('cards'));

export default new Vuex.Store({
  state: {
    cards:local?local:[{name:"Name1",description:"description1"},
             {name:"Name2",description:"description2"}]
  },
  mutations: {
    addCard: (state,card) => {
        state.cards.push(card); 
        localStorage.setItem("cards", JSON.stringify(state.cards));
    },
    replaceCard:(state,elems) => {
      state.cards.splice(elems.to, 0, state.cards.splice(elems.from, 1)[0]);
      localStorage.setItem("cards", JSON.stringify(state.cards));

    },
  },
  actions: {

  },
  modules: {
  }
})
