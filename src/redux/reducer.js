import {combineReducers} from 'redux'

function addressBooks(state = [], action) {
    if (action.type === 'LOAD_BOOKS') {
        return action.addressBooks;
    } else {
        return state
    }
}

function contacts(state = {}, action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return  {...state, [action.addressBookName]: [...state[action.addressBookName], action.contact]};
        case 'LOAD_CONTACTS':
            return action.contacts;
        default:
            return state
    }
}

const rootReducer = combineReducers({addressBooks, contacts});

export default rootReducer
