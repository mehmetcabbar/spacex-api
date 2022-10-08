import {
    ADD_LAUNCHE_REQUEST,
    ADD_LAUNCHE_SUCCESS,
    ADD_LAUNCHE_ERROR,
} from './laucheActionTypes'


export const addLauncheRequest = () => {
    return {
        type: ADD_LAUNCHE_REQUEST,
    }
}

export const addLauncheuccess = dispatch => {
    return {
        type: ADD_LAUNCHE_SUCCESS,
        payload: dispatch
    }
}

export const addLauncheError = dispatch => {
    return {
        type: ADD_LAUNCHE_ERROR,
        payload: dispatch
    }
}


