import {ActionCreatorsType, typeOfActionDispatch} from "../ActionCreators";
import {PhotoUserType} from "./profilePage-reducer";


export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotoUserType
    status: string | null
    followed: boolean
}

export type UsersStateType = typeof initialUsersState

const initialUsersState = {
    users: [] as UserType[],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: [] as number[],
};

export const usersReducer = (state:UsersStateType = initialUsersState, action:ActionCreatorsType): UsersStateType => {
    switch (action.type) {
        case typeOfActionDispatch.FOLLOW_TO_USER:
            return {...state, users: state.users.map(u => (u.id === action.userId) ? {...u, followed: true} : u)};

        case typeOfActionDispatch.UNFOLLOW_TO_USER:
            return {...state, users: state.users.map(u => (u.id === action.userId) ? {...u, followed: false} : u)};

        case typeOfActionDispatch.SET_USERS:
            return {...state, users: [...action.users]};

        case typeOfActionDispatch.SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};

        case typeOfActionDispatch.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case typeOfActionDispatch.SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case typeOfActionDispatch.SET_FOLLOWING_IN_PROGRESS:
            return {
                ...state, isFollowingInProgress: action.isFollowingProgress ?
                    [...state.isFollowingInProgress, action.userId] :
                    [...state.isFollowingInProgress.filter(id => id !== action.userId)]
            };

        default:
            return state
    }
}

