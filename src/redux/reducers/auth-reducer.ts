import {ActionCreatorsType, typeOfActionDispatch} from "../ActionCreators"


//typization for reducer
export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    captcha?: string
}

export interface IAuthData extends AuthDataType{
    isAuth: boolean
    error: string | null
}

const initialAuthState = {
    id: null,
    email: null,
    login: null,
    captcha: '',
    isAuth: false,
    error: null,
};

export const authReducer = (state:IAuthData = initialAuthState, action: ActionCreatorsType):IAuthData => {
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
};