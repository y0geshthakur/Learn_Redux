Project Structure
1. app folder -> store.js to store all the redux store logic.
2. features -> cake and icecream.
3. Action logic and reducer logic in a single slice file.

Steps: 
1. createSlice
2. cakeSlice -> Pass an object with 3 keys name, initialState and reducers.
3. module.exports = cakeSlice.reducer
4. module.exports.actions = cakeSlice.actions
5. configureStore from redux-toolkit
6. import cakeReducer
7. create a store with configureStore by passing a object with the key reducer which is an object consisting of all the reducers required in the application.
8. export the store
9. inside index.js import the store and the actions
10. Use the getState(), dispatch, subscribe and unsubscribe on the store for cakeActions.
11. Can repeat process for implementing Icecream functionality.


Reduces the Boiler Plate code from redux.