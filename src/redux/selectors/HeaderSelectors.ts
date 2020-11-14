import { createSelector } from 'reselect'
import {stateType} from "../redux-store";

type GetLoginType = (state: stateType) => string | null




//login
const getLogin:GetLoginType = (state) => state.auth.login

export const getLoginSelector = createSelector(getLogin,(login) => {
        return login
})


