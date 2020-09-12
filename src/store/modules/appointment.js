import {
  ADD_APPOINTMENT,
  REMOVE_APPOINTMENT,
  SAVE_ALL
} from "actions";

const local_strage_name = "appointments";

var storage = JSON.parse(localStorage.getItem(local_strage_name));

const state = {
  list: storage ? storage : []
};

const getters = {
};

const actions = {
  [ADD_APPOINTMENT]: ({ commit, dispatch }, appointment) => {
    commit(ADD_APPOINTMENT,appointment);    
    dispatch(SAVE_ALL);
  },
  [REMOVE_APPOINTMENT]: ({ commit,dispatch},index) => {
    commit(REMOVE_APPOINTMENT,index);    
    dispatch(SAVE_ALL);
  },
  [SAVE_ALL]: ({state }) => {    
    localStorage.setItem(local_strage_name, JSON.stringify(state.list));
  }
};

const mutations = {
  [ADD_APPOINTMENT]: (state, appointment) => {
    appointment.iscompleted=false;
    state.list.push(appointment);
  },
  [REMOVE_APPOINTMENT]: (state, index) => {
    state.list.splice(index, 1);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
