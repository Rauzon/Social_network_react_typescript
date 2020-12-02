import {appReducer, InitialAppStateType} from "./app-reducer";
import {initializedApp} from "../TypesForRedux";


describe('Tests  for app-reducer', () => {

    let initialState:InitialAppStateType;

    beforeEach(() => {
       initialState =  {
           isInitialized: false
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


})


export default 1


