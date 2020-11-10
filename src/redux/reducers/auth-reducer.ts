import {ActionCreatorsType, typeOfActionDispatch} from "../TypesForRedux"
import {IAuthData} from "../redux-store";


//typization for reducer
type usersReducerType = (state: IAuthData, action: ActionCreatorsType) => IAuthData


const initialAuthState: IAuthData = {
    id: null,
    email: null,
    login: null,
    captcha: '',
    isAuth: false,
    error: null,
}

export const authReducer: usersReducerType = (state = initialAuthState, action) => {
    switch (action.type) {
        case typeOfActionDispatch.SET_AUTH_DATA:

            let copyState = {...state, ...action.authData}
            let isAuth = (copyState.login) ? true : false
            return {...copyState, isAuth}

        case typeOfActionDispatch.SET_AUTH_ERROR:

            return {...state, error: (action.error) ? action.error : null}

        case typeOfActionDispatch.SET_CAPTCHA_VALUE:
            return {...state, captcha: action.captcha}

        default:
            return state
    }
}


