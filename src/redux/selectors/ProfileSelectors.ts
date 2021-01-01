import {createSelector} from 'reselect'
import {StateType} from "../redux-store";
import {ProfilePageType} from '../reducers/profilePage-reducer';

type GetProfilePageType = (state: StateType) => ProfilePageType
type GetUserIdType = (state: StateType) => number | null


//profilePage
const getProfilePage: GetProfilePageType = (state) => state.profilePage

export const getProfilePageSelector = createSelector(getProfilePage, (profile) => {
    return profile
})


//profilePage
const getUserId: GetUserIdType = (state) => state.auth.id

export const getUserIdSelector = createSelector(getUserId, (userId) => {
    return userId
})