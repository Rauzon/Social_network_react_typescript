import {ActionCreatorsType, typeOfActionDispatch} from "../ActionCreators"


export type InitialAppStateType = typeof initialAppState

const initialAppState = {
    isInitialized: false
}

export const appReducer = (state:InitialAppStateType = initialAppState, action:ActionCreatorsType):InitialAppStateType => {
    switch (action.type) {
        case typeOfActionDispatch.INITIALIZED_APP:
            return {...state, isInitialized: true}

        default:
            return state
    }
}


