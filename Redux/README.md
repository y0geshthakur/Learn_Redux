Introduction: 

1. Redux is a predictable state container for JavaScript apps.
2. Redux stores and manages the state of your application.
3. Redux makes it easier to understand when, where, how and why the state of the application changes and how your application logic will behave when those changes occur.
4. Use Redux when you have multiple states and the states are accessed at multiple places in the application.
5. When the state changing logic is complex, you may switch to redux to increase predictability in your application.

Three Core Concepts:
1. Store: Stores the state of your application
2. Action: Describes what happened in the application
3. Reducer: Handles the action and decides how to update the state.

Three Principles:
1. The global state of your application is stored as an object inside a single store.
2. The only way to change the state is to dispatch an action, an object that describes what happened.
3. To specify how the state tree is updated based on actions, you write pure reducers.
	eg: Reducer - (prevState, action) => newState

Methods provided by Store:
1. getState() : Get the current state
2. dispatch(action) : Perform the necessary operation for the corresponding action
3. subscribe() : Add listener to listen to a change of state and perform some operation
4. unsubscribe() : Remove the listener

Note : If you have multiple states in the store, it is better to use multiple reducers instead of having a single reducer, because it improves readability and simplifies debugging.

Multiple reducers:
1. combinereducers : pass an object of reducers and then pass the combinedReducers to the createStore function.