import {ActionCreatorsType, typeOfActionDispatch} from "../TypesForRedux";
import {UsersStateType} from "../redux-store";


//typization for reducer
type usersReducerType = (state: UsersStateType, action: ActionCreatorsType) => UsersStateType


const initialUsersState: UsersStateType = {
    users: []
}

export const usersReducer: usersReducerType = (state=initialUsersState, action): UsersStateType => {

    switch (action.type) {
        case typeOfActionDispatch.FOLLOW_TO_USER:
            return {...state, users: state.users.map(u => (u.id === action.userId) ? {...u, isFollowed: true} : u)}

        case typeOfActionDispatch.UNFOLLOW_TO_USER:
            return {...state, users: state.users.map(u => (u.id === action.userId) ? {...u, isFollowed: false} : u)}

        case typeOfActionDispatch.SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}