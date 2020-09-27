import {UserType} from "./redux-store";

export enum typeOfActionDispatch {
    ADD_MESSAGE = "ADD_MESSAGE",
    ADD_POST = "ADD_POST",
    UPDATE_MESSAGE = "UPDATE_MESSAGE",
    UPDATE_POST = "UPDATE_POST",
    FOLLOW_TO_USER = "FOLLOW_TO_USER",
    UNFOLLOW_TO_USER = "UNFOLLOW_TO_USER",
    SET_USERS = "SET_USERS",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_IS_FETCHING = "SET_IS_FETCHING",
}

export type ActionCreatorsType = ReturnType<typeof updatePostAC> |
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateMessageAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof followToUserAC> |
    ReturnType<typeof unfollowToUserAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setTotalUsersCountAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setIsFetchingAC>

//actionCreators
export const updatePostAC =(newPostValue: string) => {
    return {
        type: typeOfActionDispatch.UPDATE_POST,
        newPostValue
    } as const
};
export const addPostAC =() =>{
    return {
        type: typeOfActionDispatch.ADD_POST
    } as const
};
export const updateMessageAC = (newMessageValue: string) => {
    return (
        {type: typeOfActionDispatch.UPDATE_MESSAGE, newMessageValue}
    ) as const
};
export const addMessageAC = () => {
    return (
        {type: typeOfActionDispatch.ADD_MESSAGE}
    ) as const
};
export const followToUserAC = (userId:number) => {
    return (
        {type: typeOfActionDispatch.FOLLOW_TO_USER, userId}
    ) as const
};
export const unfollowToUserAC = (userId: number) => {
    return (
        {type: typeOfActionDispatch.UNFOLLOW_TO_USER, userId}
    ) as const
};
export const setUsersAC = (users: Array<UserType>) => {
    return (
        {type: typeOfActionDispatch.SET_USERS, users}
    ) as const
};
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return (
        {type: typeOfActionDispatch.SET_TOTAL_USERS_COUNT, totalUsersCount}
    ) as const
};
export const setCurrentPageAC = (currentPage: number) => {
    return (
        {type: typeOfActionDispatch.SET_CURRENT_PAGE, currentPage}
    ) as const
};
export const setIsFetchingAC = (isFetching: boolean) => {
    return (
        {type: typeOfActionDispatch.SET_IS_FETCHING, isFetching}
    ) as const
};
