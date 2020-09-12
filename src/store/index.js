import Vue from 'vue'
import Vuex from 'vuex'
import appointment from './modules/appointment'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    appointment
  },
  strict: debug
})
