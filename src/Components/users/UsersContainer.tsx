import {connect} from 'react-redux';
import UsersAPI from "./UsersAPI";
import {stateType} from "../../redux/redux-store";
import {followToUserThunk, getUsersThunk, paginationThunk, unfollowToUserThunk} from '../../thunks/usersThunk';
import {
    getCurrentPageSelector,
    getIsFetchingSelector,
    getIsFollowingInProgressTypeSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from '../../redux/selectors/UsersSelectors';
import {UserType} from "../../redux/reducers/usersPage-reducer";

type MapStateToPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: number[]
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    pagination: (page: number, pageSize: number) => void
}


const mapStateToProps = (state: stateType): MapStateToPropsType => ({
    users: getUsersSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    pageSize: getPageSizeSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    isFollowingInProgress: getIsFollowingInProgressTypeSelector(state),
})


export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType,any, stateType>(mapStateToProps, {
    follow: followToUserThunk,
    unfollow: unfollowToUserThunk,
    getUsers: getUsersThunk,
    pagination: paginationThunk,
})(UsersAPI)