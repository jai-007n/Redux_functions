var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {
  name: 'Anonymous'
}, action) => {
  // state = state || {name: 'Anonymous'};
console.log('New action', action);
switch(action.type){
  case 'CHANGE_NAME':
  return{
    ...state,
    name:action.name
  };
   default:{
    return state;
  }
}
  return state;
};
var store = redux.createStore(reducer);

console.log('currentState', store.getState());

store.dispatch({
  type:'CHANGE_NAME',
  name: 'Andrew'
});

console.log('name should be andrew',store.getState());
