import {AuthDataType, CommonDataProfileType, UserType} from "./redux-store";

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
    SET_USER_PROFILE = "SET_USER_PROFILE",
    SET_AUTH_DATA = "SET_AUTH_DATA",
    SET_FOLLOWING_IN_PROGRESS = "SET_FOLLOWING_IN_PROGRESS",
    SET_STATUS_PROFILE = "SET_STATUS_PROFILE",
    // UPDATE_PHOTO_PROFILE = "UPDATE_PHOTO_PROFILE",
}

export type ActionCreatorsType = ReturnType<typeof updatePost> |
    ReturnType<typeof addPost> |
    ReturnType<typeof updateMessage> |
    ReturnType<typeof addMessage> |
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setIsFetching> |
    ReturnType<typeof setUserProfile>|
    ReturnType<typeof setAuthData>|
    ReturnType<typeof setFollowingInProgress>|
    ReturnType<typeof setStatusProfile>

//actionCreators
export const updatePost =(newPostValue: string) => {
    return {
        type: typeOfActionDispatch.UPDATE_POST,
        newPostValue
    } as const
};
export const addPost =() =>{
    return {
        type: typeOfActionDispatch.ADD_POST
    } as const
};
export const updateMessage = (newMessageValue: string) => {
    return (
        {type: typeOfActionDispatch.UPDATE_MESSAGE, newMessageValue}
    ) as const
};
export const addMessage = () => {
    return (
        {type: typeOfActionDispatch.ADD_MESSAGE}
    ) as const
};
export const follow = (userId:number) => {
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
export const setAuthData = (authData:AuthDataType) => {
    return (
        {type: typeOfActionDispatch.SET_AUTH_DATA, authData}
    ) as const
};
export const setFollowingInProgress = (isFollowingProgress: boolean, userId: number) => {
    return (
        {type: typeOfActionDispatch.SET_FOLLOWING_IN_PROGRESS, isFollowingProgress, userId }
    ) as const
};
export const setStatusProfile = (statusProfile: string) => {
    return (
        {type: typeOfActionDispatch.SET_STATUS_PROFILE, statusProfile }
    ) as const
};
// export const updatePhotoProfile = (photoURL: File) => {
//     return (
//         {type: typeOfActionDispatch.UPDATE_PHOTO_PROFILE, photoURL }
//     ) as const
// };
