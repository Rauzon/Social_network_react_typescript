import {ActionCreatorsType, typeOfActionDispatch} from "../TypesForRedux"
import {IAuthData} from "../redux-store";



//typization for reducer
type usersReducerType = (state: IAuthData, action: ActionCreatorsType) => IAuthData


const initialAuthState: IAuthData = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer: usersReducerType = (state = initialAuthState, action) => {

    switch (action.type) {
        case typeOfActionDispatch.SET_AUTH_DATA:
            let isAuth = (!state.login) ? false : true

            return {...state, ...action.authData, isAuth}
        default:
            return state
    }
}

