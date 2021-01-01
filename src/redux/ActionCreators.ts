import {AuthDataType} from "./reducers/auth-reducer";
import {UserType} from "./reducers/usersPage-reducer";
import {CommonDataProfileType} from "./reducers/profilePage-reducer";

export enum typeOfActionDispatch {
    ADD_MESSAGE = "ADD_MESSAGE",
    ADD_POST = "ADD_POST",
    UPDATE_POST = "UPDATE_POST",
    FOLLOW_TO_USER = "FOLLOW_TO_USER",
    UNFOLLOW_TO_USER = "UNFOLLOW_TO_USER",
    SET_USERS = "SET_USERS",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_IS_FETCHING = "SET_IS_FETCHING",
    SET_USER_PROFILE = "SET_USER_PROFILE",
    SET_AUTH_DATA = "SET_AUTH_DATA",
    SET_FOLLOWING_IN_PROGRESS = "SET_FOLLOWING_IN_PROGRESS",
    SET_STATUS_PROFILE = "SET_STATUS_PROFILE",
    SET_AUTH_ERROR = "SET_AUTH_ERROR",
    SET_CAPTCHA_VALUE = "SET_CAPTCHA_VALUE",
    INITIALIZED_APP = "INITIALIZED_APP",
    SET_ERROR = "SET_ERROR",
}

export type ActionCreatorsType = ReturnType<typeof addPost> |
    ReturnType<typeof addMessage> |
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setIsFetching> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setAuthData> |
    ReturnType<typeof setFollowingInProgress> |
    ReturnType<typeof setStatusProfile> |
    ReturnType<typeof setAuthError> |
    ReturnType<typeof setCaptchaValue> |
    ReturnType<typeof initializedApp> |
    ReturnType<typeof setError>

//actionCreators
export const addPost = (value: string) => {
    return {
        type: typeOfActionDispatch.ADD_POST,
        value
    } as const
};
export const addMessage = (newMessage: string) => {
    return (
        {type: typeOfActionDispatch.ADD_MESSAGE, message: newMessage}
    ) as const
};
export const follow = (userId: number) => {
    return (
        {type: typeOfActionDispatch.FOLLOW_TO_USER, userId}
    ) as const
};
export const unfollow = (userId: number) => {
    return (
        {type: typeOfActionDispatch.UNFOLLOW_TO_USER, userId}
    ) as const
};
export const setUsers = (users: Array<UserType>) => {
    return (
        {type: typeOfActionDispatch.SET_USERS, users}
    ) as const
};
export const setTotalUsersCount = (totalUsersCount: number) => {
    return (
        {type: typeOfActionDispatch.SET_TOTAL_USERS_COUNT, totalUsersCount}
    ) as const
};
export const setCurrentPage = (currentPage: number) => {
    return (
        {type: typeOfActionDispatch.SET_CURRENT_PAGE, currentPage}
    ) as const
};
export const setIsFetching = (isFetching: boolean) => {
    return (
        {type: typeOfActionDispatch.SET_IS_FETCHING, isFetching}
    ) as const
};
export const setUserProfile = (userProfile: CommonDataProfileType) => {
    return (
        {type: typeOfActionDispatch.SET_USER_PROFILE, userProfile}
    ) as const
};
export const setAuthData = (authData: AuthDataType) => {
    return (
        {type: typeOfActionDispatch.SET_AUTH_DATA, authData}
    ) as const
};
export const setFollowingInProgress = (isFollowingProgress: boolean, userId: number) => {
    return (
        {type: typeOfActionDispatch.SET_FOLLOWING_IN_PROGRESS, isFollowingProgress, userId}
    ) as const
};
export const setStatusProfile = (statusProfile: string) => {
    return (
        {type: typeOfActionDispatch.SET_STATUS_PROFILE, statusProfile}
    ) as const
}
export const setAuthError = (error: string | null) => {
    return (
        {type: typeOfActionDispatch.SET_AUTH_ERROR, error}
    ) as const
};
export const setCaptchaValue = (captcha: string) => {
    return (
        {type: typeOfActionDispatch.SET_CAPTCHA_VALUE, captcha}
    ) as const
};
export const initializedApp = () => {
    return (
        {type: typeOfActionDispatch.INITIALIZED_APP}
    ) as const
};
export const setError = (error: string | null) => {
    return (
        {type: typeOfActionDispatch.SET_ERROR, error}
    ) as const
};
