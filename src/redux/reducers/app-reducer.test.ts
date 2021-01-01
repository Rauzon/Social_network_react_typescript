import {appReducer, InitialAppStateType} from "./app-reducer";
import {initializedApp, setError} from "../ActionCreators";


describe('Tests  for app-reducer', () => {

    let initialState:InitialAppStateType;

    beforeEach(() => {
       initialState =  {
           isInitialized: false,
           error: null
       }
    });

    it('app should be initialized', () => {

        let action = initializedApp();
        
        let resultReducerState = appReducer(initialState, action)

        let expectedState = {
            isInitialized: true
        }

        expect(resultReducerState).toEqual(expectedState)
    })
    it('error should be set in correct value', () => {

        let action = setError(null);
        let action2 = setError('some error');

        let resultReducerState = appReducer(initialState, action)
        let resultReducerState2 = appReducer(initialState, action2)

        let expectedState = {
            isInitialized: false,
            error: null
        }
        let expectedState2 = {
            isInitialized: false,
            error: 'some error'
        }

        expect(resultReducerState).toEqual(expectedState)
        expect(resultReducerState2).toEqual(expectedState2)
    })


})



