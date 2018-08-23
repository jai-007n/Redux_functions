var redux = require('redux');

console.log('redux starting exapmle');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {

    switch(action.type){
    case 'CHANGE_TEXT':
    return{
      ...state,
      searchText:action.searchText
    };
     default:{
      return state;
    }
  }
};
var store = redux.createStore(reducer);

console.log('current state ' ,store.getState());

store.dispatch({
  type:'CHANGE_TEXT',
  searchText: 'Hi I am jai'
});

console.log('new search Text',store.getState());
