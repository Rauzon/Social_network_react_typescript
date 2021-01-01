import { createSelector } from 'reselect'
import {StateType} from "../redux-store";

type GetLoginType = (state: StateType) => string | null




//login
const getLogin:GetLoginType = (state) => state.auth.login

export const getLoginSelector = createSelector(getLogin,(login) => {
        return login
})


