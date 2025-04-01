const redux = require('redux')
const produce = require('immer').produce
const createStore = redux.createStore

const initialState = {
    name: 'Yogesh',
    address: {
        street: 'Mahalaxmi Nagar',
        city: 'Nagpur',
        state: 'Maharashtra'
    }
}

const STREET_UPDATED = 'STREET_UPDATED'

function updateStreet(street){
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case STREET_UPDATED :
            // return{
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default :
            return state
    }
}

const store = createStore(reducer)

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(updateStreet('Mahalaxmi Nagar 3'));

unsubscribe();