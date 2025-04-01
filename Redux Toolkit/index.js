const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(cakeActions.ordered(2));
store.dispatch(cakeActions.ordered(2));
store.dispatch(cakeActions.ordered(2));

store.dispatch(cakeActions.restocked(6));

store.dispatch(icecreamActions.ordered(2));
store.dispatch(icecreamActions.ordered(2));
store.dispatch(icecreamActions.ordered(2));

store.dispatch(icecreamActions.restocked(6));

store.dispatch(fetchUsers());

unsubscribe();