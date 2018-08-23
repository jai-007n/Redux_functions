var redux = require('redux');

console.log('redux starting exapmle');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {

  return state;
};

var store = redux.createStore(reducer);

console.log('current state ' ,store.getState());
