import { createSelector } from 'reselect'
import {StateType} from "../redux-store";

type GetIsAuthType = (state: StateType) => boolean
type GetServerErrorType = (state: StateType) => string | null
type GetCaptchaType = (state: StateType) => any




//isAuth
const getIsAuth:GetIsAuthType = (state) => state.auth.isAuth

export const getIsAuthSelector = createSelector(getIsAuth,(isAuth) => {
        return isAuth
})


//serverError
const getServerError:GetServerErrorType = (state) => state.auth.error

export const getServerErrorSelector = createSelector(getServerError,(serverError) => {
        return serverError
})

//getCaptcha
const getCaptcha:GetCaptchaType = (state) => state.auth.captcha

export const getCaptchaSelector = createSelector(getCaptcha,(captcha) => {
        return captcha
})