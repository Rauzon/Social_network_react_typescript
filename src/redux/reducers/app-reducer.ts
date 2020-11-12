import {ActionCreatorsType, typeOfActionDispatch} from "../TypesForRedux"


//typization for reducer
type AppReducerType = (state: InitialAppStateType, action: ActionCreatorsType) => InitialAppStateType

export type InitialAppStateType = typeof initialAppState

const initialAppState = {
    isInitialized: false
}

export const appReducer: AppReducerType = (state = initialAppState, action) => {
    switch (action.type) {
        case typeOfActionDispatch.INITIALIZED_APP:
            return {...state, isInitialized: true}

        default:
            return state
    }
}


