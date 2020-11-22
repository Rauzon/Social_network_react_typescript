import {ActionCreatorsType, typeOfActionDispatch} from "../TypesForRedux"


export type AppStateType = typeof initialAppState

const initialAppState = {
    isInitialized: false
}

export const appReducer = (state:AppStateType = initialAppState, action:ActionCreatorsType):AppStateType => {
    switch (action.type) {
        case typeOfActionDispatch.INITIALIZED_APP:
            return {...state, isInitialized: true}

        default:
            return state
    }
}


