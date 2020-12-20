import {CommonDataProfileType, profilePageReducer, ProfilePageType, ProfilePostsType} from "./profilePage-reducer";
import {setIsFetching, setStatusProfile, setUserProfile, addPost} from "../ActionCreators";


describe('test for profile-reducer', () => {

    let initialState: ProfilePageType;

    beforeEach(() => {
        initialState = {
            posts: [
                {id: '1', message: "Hey girls"},
                {id: '2', message: "Hey guys"}
            ] as Array<ProfilePostsType>,
            userProfile: {} as CommonDataProfileType,
            isFetching: false,
            profileStatus: '',
        }
    });

    test('should be set new post to profilePage', () => {

        let action = addPost('new post value');

        let resultState = profilePageReducer(initialState, action);

        let expectedResult = {
            posts: [
                {id: '1', message: 'Hey girls'},
                {id: '2', message: "Hey guys"},
                {id: '3', message: "new post value"},
            ] as Array<ProfilePostsType>,
            userProfile: {} as CommonDataProfileType,
            isFetching: false,
            profileStatus: '',
        };

        expect(resultState.posts[0].message).toBe('Hey girls');
        expect(resultState.posts[2].message).toBe('new post value');
        expect(resultState.isFetching).toEqual(expectedResult.isFetching);
        expect(resultState.posts.length).toBe(3);
        expect(!resultState.profileStatus).toEqual(!expectedResult.profileStatus)
    });

    test('should be set userProfile data', () => {

        let action = setUserProfile({
            aboutMe: '@badcoder',
            contacts: {
                facebook: 'facebook',
                website: 'website',
                vk: 'vk',
                twitter: 'twitter',
                instagram: 'instagram',
                github: 'github',
                youtube: 'youtube',
                mainLink: 'mainlink',

            },
            fullName: "Aharodnikov Vlad",
            lookingForAJob: true,
            lookingForAJobDescription: 'looking for a job',
            photos: {
                small: null,
                large: null
            },
            userId: 2,
        });

        let resultState = profilePageReducer(initialState, action);

        let expectedResult = {
            posts: [
                {id: '1', message: "Hey girls"},
                {id: '2', message: "Hey guys"}
            ] as Array<ProfilePostsType>,
            userProfile: {
                aboutMe: '@badcoder',
                contacts: {
                    facebook: 'facebook',
                    website: 'website',
                    vk: 'vk',
                    twitter: 'twitter',
                    instagram: 'instagram',
                    github: 'github',
                    youtube: 'youtube',
                    mainLink: 'mainlink',

                },
                fullName: "Aharodnikov Vlad",
                lookingForAJob: true,
                lookingForAJobDescription: 'looking for a job',
                photos: {
                    small: null,
                    large: null
                },
                userId: 2,
            } as CommonDataProfileType,
            isFetching: false,
            profileStatus: '',
        };

        expect(resultState).toEqual(expectedResult);
        expect(resultState.isFetching).toEqual(expectedResult.isFetching);
        expect(resultState.posts.length === 2).toEqual(expectedResult.posts.length === 2);
        expect(!resultState.profileStatus).toEqual(!expectedResult.profileStatus)
    });

    test('should be set isFetching true', () => {

        let action = setIsFetching(true);

        let resultState = profilePageReducer(initialState, action);


        let expectedResult = {
            posts: [
                {id: '1', message: "Hey girls"},
                {id: '2', message: "Hey guys"}
            ] as Array<ProfilePostsType>,
            userProfile: {} as CommonDataProfileType,
            isFetching: true,
            profileStatus: '',
        };

        expect(resultState).toEqual(expectedResult);
        expect(resultState.posts.length === 2).toEqual(expectedResult.posts.length === 2);
        expect(!resultState.profileStatus).toEqual(!expectedResult.profileStatus);
        expect(resultState.userProfile).toEqual(expectedResult.userProfile)
    });

    test('should be set profileStatus to correct value', () => {

        let action = setStatusProfile('some value');

        let resultState = profilePageReducer(initialState, action);


        let expectedResult = {
            posts: [
                {id: '1', message: "Hey girls"},
                {id: '2', message: "Hey guys"}
            ] as Array<ProfilePostsType>,
            userProfile: {} as CommonDataProfileType,
            isFetching: false,
            profileStatus: 'some value',
        };

        expect(resultState).toEqual(expectedResult);
    });

})