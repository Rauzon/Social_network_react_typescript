import {createSelector} from 'reselect'
import {StateType} from "../redux-store";
import {UserType} from "../reducers/usersPage-reducer";

type GetUsersType = (state: StateType) => UserType[]
type GetTotalUsersCountType = (state: StateType) => number
type GetPageSizeType = (state: StateType) => number
type GetCurrentPageType = (state: StateType) => number
type GetIsFetchingType = (state: StateType) => boolean
type GetIsFollowingInProgressType = (state: StateType) => number[]


//Users
const getUsers: GetUsersType = (state) => state.usersPage.users

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users
})


//totalUsersCount
const getTotalUsersCount: GetTotalUsersCountType = (state) => state.usersPage.totalUsersCount

export const getTotalUsersCountSelector = createSelector(getTotalUsersCount, (totalUsersCount) => {
    return totalUsersCount
})


//pageSize
const getPageSize: GetPageSizeType = (state) => state.usersPage.pageSize

export const getPageSizeSelector = createSelector(getPageSize, (pageSize) => {
    return pageSize
})

//currentPage
const getCurrentPage: GetCurrentPageType = (state) => state.usersPage.currentPage

export const getCurrentPageSelector = createSelector(getCurrentPage, (currentPage) => {
    return currentPage
})

//isFetching
const getIsFetching: GetIsFetchingType = (state) => state.usersPage.isFetching

export const getIsFetchingSelector = createSelector(getIsFetching, (isFetching) => {
    return isFetching
})

//getIsFollowingInProgress
const getIsFollowingInProgress: GetIsFollowingInProgressType = (state) => state.usersPage.isFollowingInProgress

export const getIsFollowingInProgressTypeSelector = createSelector(getIsFollowingInProgress, (getIsFollowingInProgress) => {
    return getIsFollowingInProgress
})