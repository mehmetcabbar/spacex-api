import { INITIAL_STATE } from '../store';
import { legacy_createStore as createStore } from 'redux';
import {
    ADD_LAUNCHE_REQUEST,
    ADD_LAUNCHE_SUCCESS,
    ADD_LAUNCHE_ERROR,
    UPDATE_LIST
} from '../actions';



export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_LAUNCHE_REQUEST":
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case "ADD_LAUNCHE_SUCCESS":
            return {
                ...state,
                isLoading: false,
                launches: action.payload,
                error: ""
            }
        case "ADD_LAUNCHE_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state
    }
}


export const store = createStore(reducer, INITIAL_STATE)