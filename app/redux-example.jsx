var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {
  name: 'Anonymous'
}, action) => {
  // state = state || {name: 'Anonymous'};

  return state;
};
var store = redux.createStore(reducer);

console.log('currentState', store.getState());
