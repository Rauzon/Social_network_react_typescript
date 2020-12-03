import {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
    setFollowingInProgress
} from "../TypesForRedux";
import {UsersStateType} from "../redux-store";
import {usersReducer} from "./usersPage-reducer";


describe('Tests  for app-reducer', () => {

    let initialState: UsersStateType;

    beforeEach(() => {
        initialState = {
            users: [{
                followed: false,
                id: 1,
                name: "Nesquiktatarkzn",
                photos: {small: null, large: null},
                status: null,
                uniqueUrlName: null
            },
                {
                    followed: true,
                    id: 2,
                    name: "SomeName",
                    photos: {small: null, large: null},
                    status: null,
                    uniqueUrlName: null
                }],
            totalUsersCount: 0,
            pageSize: 100,
            currentPage: 1,
            isFetching: true,
            isFollowingInProgress: [],
        }
    });

    test('should be set followed value to true in users array', () => {

        let action = follow(1);

        let resultState = usersReducer(initialState, action);

        let expectedState = {
            users: [{
                followed: true,
                id: 1,
                name: "Nesquiktatarkzn",
                photos: {small: null, large: null},
                status: null,
                uniqueUrlName: null
            },
                {
                    followed: true,
                    id: 2,
                    name: "SomeName",
                    photos: {small: null, large: null},
                    status: null,
                    uniqueUrlName: null
                }],
            totalUsersCount: 0,
            pageSize: 100,
            currentPage: 1,
            isFetching: true,
            isFollowingInProgress: [],
        };

        expect(resultState).toEqual(expectedState);
    });

    test('should be set followed value to false in users array', () => {

        let action = unfollow(2);

        let resultState = usersReducer(initialState, action);

        let expectedState = {
            users: [{
                followed: false,
                id: 1,
                name: "Nesquiktatarkzn",
                photos: {small: null, large: null},
                status: null,
                uniqueUrlName: null
            },
                {
                    followed: false,
                    id: 2,
                    name: "SomeName",
                    photos: {small: null, large: null},
                    status: null,
                    uniqueUrlName: null
                }],
            totalUsersCount: 0,
            pageSize: 100,
            currentPage: 1,
            isFetching: true,
            isFollowingInProgress: [],
        };

        expect(resultState).toEqual(expectedState);
    });

    test('should be set new users\' array', () => {

        let action = setUsers([{
            followed: false,
            id: 3,
            name: "Keker",
            photos: {small: null, large: null},
            status: null,
            uniqueUrlName: null
        }]);

        let resultState = usersReducer(initialState, action);

        let expectedState = {
            users: [{
                followed: false,
                id: 3,
                name: "Keker",
                photos: {small: null, large: null},
                status: null,
                uniqueUrlName: null
            }],
            totalUsersCount: 0,
            pageSize: 100,
            currentPage: 1,
            isFetching: true,
            isFollowingInProgress: [],
        };

        expect(resultState).toEqual(expectedState);
    });

    test('should be set totalUsersCount', () => {

        let action = setTotalUsersCount(100);

        let resultState = usersReducer(initialState, action);

        let expectedState = {
            users: [{
                followed: false,
                id: 1,
                name: "Nesquiktatarkzn",
                photos: {small: null, large: null},
                status: null,
                uniqueUrlName: null
            },
                {
                    followed: true,
                    id: 2,
                    name: "SomeName",
                    photos: {small: null, large: null},
                    status: null,
                    uniqueUrlName: null
                }],
            totalUsersCount: 100,
            pageSize: 100,
            currentPage: 1,
            isFetching: true,
            isFollowingInProgress: [],
        };

        expect(resultState).toEqual(expectedState);
    });

    test('should be set currentPage', () => {

        let action = setCurrentPage(100);

        let resultState = usersReducer(initialState, action);

        let expectedState = {
            users: [{
                followed: false,
                id: 1,
                name: "Nesquiktatarkzn",
                photos: {small: null, large: null},
                status: null,
                uniqueUrlName: null
            },
                {
                    followed: true,
                    id: 2,
                    name: "SomeName",
                    photos: {small: null, large: null},
                    status: null,
                    uniqueUrlName: null
                }],
            totalUsersCount: 0,
            pageSize: 100,
            currentPage: 100,
            isFetching: true,
            isFollowingInProgress: [],
        };

        expect(resultState).toEqual(expectedState);
    });

    test('should be set setIsFetching', () => {

        let action = setIsFetching(false);

        let resultState = usersReducer(initialState, action);

        let expectedState = {
            users: [{
                followed: false,
                id: 1,
                name: "Nesquiktatarkzn",
                photos: {small: null, large: null},
                status: null,
                uniqueUrlName: null
            },
                {
                    followed: true,
                    id: 2,
                    name: "SomeName",
                    photos: {small: null, large: null},
                    status: null,
                    uniqueUrlName: null
                }],
            totalUsersCount: 0,
            pageSize: 100,
            currentPage: 1,
            isFetching: false,
            isFollowingInProgress: [],
        };

        expect(resultState).toEqual(expectedState);
    });

    test('should be set followingInProgress', () => {

        let action = setFollowingInProgress(true, 1);
        let action1 = setFollowingInProgress(false, 1);

        let resultState = usersReducer(initialState, action);
        let resultState1 = usersReducer(initialState, action1);

        let expectedState = {
            users: [{
                followed: false,
                id: 1,
                name: "Nesquiktatarkzn",
                photos: {small: null, large: null},
                status: null,
                uniqueUrlName: null
            },
                {
                    followed: true,
                    id: 2,
                    name: "SomeName",
                    photos: {small: null, large: null},
                    status: null,
                    uniqueUrlName: null
                }],
            totalUsersCount: 0,
            pageSize: 100,
            currentPage: 1,
            isFetching: true,
            isFollowingInProgress: [1],
        };
        let expectedState1 = {
            users: [{
                followed: false,
                id: 1,
                name: "Nesquiktatarkzn",
                photos: {small: null, large: null},
                status: null,
                uniqueUrlName: null
            },
                {
                    followed: true,
                    id: 2,
                    name: "SomeName",
                    photos: {small: null, large: null},
                    status: null,
                    uniqueUrlName: null
                }],
            totalUsersCount: 0,
            pageSize: 100,
            currentPage: 1,
            isFetching: true,
            isFollowingInProgress: [],
        };

        expect(resultState).toEqual(expectedState);
        expect(resultState1).toEqual(expectedState1);
    });


});


