import {ActionCreatorsType, typeOfActionDispatch} from "../ActionCreators"


export type InitialAppStateType = {
    isInitialized: boolean,
    error: null | string,
}

const initialAppState = {
    isInitialized: false,
    error: null,
}

export const appReducer = (state: InitialAppStateType = initialAppState, action: ActionCreatorsType): InitialAppStateType => {
    switch (action.type) {
        case typeOfActionDispatch.INITIALIZED_APP:
            return {...state, isInitialized: true};
        case typeOfActionDispatch.SET_ERROR:
            return {...state, error: action.error};
        default:
            return state
    }
}


