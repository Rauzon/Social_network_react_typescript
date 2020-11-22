import { createSelector } from 'reselect'
import {stateType} from "../redux-store";
import { ProfilePageType } from '../reducers/profilePage-reducer';

type GetProfilePageType = (state: stateType) => ProfilePageType
type GetUserIdType = (state: stateType) => number | null




//profilePage
const getProfilePage:GetProfilePageType = (state) => state.profilePage

export const getProfilePageSelector = createSelector(getProfilePage,(profile) => {
        return profile
})


//profilePage
const getUserId:GetUserIdType = (state) => state.auth.id

export const getUserIdSelector = createSelector(getUserId,(userId) => {
        return userId
})