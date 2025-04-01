const redux = require('redux')

const createStore = redux.createStore
const combineReducers = redux.combineReducers

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOKED = 'CAKE_RESTOKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOKED = 'ICECREAM_RESTOKED'

// Action Creator
function orderCake(){
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

function restockCake(val = 1){
    return {
        type: CAKE_RESTOKED,
        quantity: val
    }
}

function orderIcecream(){
    return {
        type: ICECREAM_ORDERED,
        quantity: 1
    }
}

function restockIcecream(val = 1){
    return {
        type: ICECREAM_RESTOKED,
        quantity: val
    }
}

// Initial State
const initialCakeState = {
    numOfCakes: 10
}

const initialIcecreamState = {
    numOfIcecreams: 20
}

// Reducer Function
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED :
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.quantity
            }
        case CAKE_RESTOKED :
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.quantity
            }
        default :
            return state
    }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED :
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams - action.quantity
            }
        case ICECREAM_RESTOKED :
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams + action.quantity
            }
        default :
            return state
    }
}

const combinedReducer = combineReducers({
    cake: cakeReducer, 
    icecream: icecreamReducer
})

// Store
const store = createStore(combinedReducer)

// getState()
console.log(store.getState())

// Listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// dispatch()
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())


store.dispatch(restockCake(3))

store.dispatch(orderIcecream())
store.dispatch(orderIcecream())
store.dispatch(orderIcecream())


store.dispatch(restockIcecream(3))


// Remove Listener
unsubscribe();