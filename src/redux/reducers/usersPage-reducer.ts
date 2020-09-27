import {ActionCreatorsType, typeOfActionDispatch} from "../TypesForRedux";
import {UsersStateType} from "../redux-store";


//typization for reducer
type usersReducerType = (state: UsersStateType, action: ActionCreatorsType) => UsersStateType


const initialUsersState: UsersStateType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: true
}

export const usersReducer: usersReducerType = (state = initialUsersState, action): UsersStateType => {

    switch (action.type) {
        case typeOfActionDispatch.FOLLOW_TO_USER:
            return {...state, users: state.users.map(u => (u.id === action.userId) ? {...u, isFollowed: true} : u)}

        case typeOfActionDispatch.UNFOLLOW_TO_USER:
            return {...state, users: state.users.map(u => (u.id === action.userId) ? {...u, isFollowed: false} : u)}

        case typeOfActionDispatch.SET_USERS:
            return {...state, users: [...action.users]}

        case typeOfActionDispatch.SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        case typeOfActionDispatch.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case typeOfActionDispatch.SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }
}

