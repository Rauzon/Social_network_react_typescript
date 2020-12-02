import {IAuthData} from "../redux-store";
import {setAuthData, setAuthError, setCaptchaValue} from "../TypesForRedux";
import {authReducer} from "./auth-reducer";


describe('Tests  for auth-reducer', () => {

    let initialState: IAuthData;

    beforeEach(() => {

        initialState = {
            id: null,
            email: null,
            login: null,
            captcha: '',
            isAuth: false,
            error: null,
        }
    });

    it('data for auth should be set', () => {

        let action = setAuthData({
            id: 1,
            email: 'vladby86@gmail.com',
            login: "Crispys",
            captcha: '',
        });

        let resultReducerState = authReducer(initialState, action)

        let expectedState = {
            id: 1,
            email: 'vladby86@gmail.com',
            login: "Crispys",
            captcha: '',
            isAuth: true,
            error: null,
        }

        expect(resultReducerState).toEqual(expectedState)
    });

    it('should be set error', () => {

        let action = setAuthError('it is some error');

        let resultReducerState = authReducer(initialState, action)

        let expectedState = {
            id: null,
            email: null,
            login: null,
            captcha: '',
            isAuth: false,
            error: 'it is some error',
        }

        expect(resultReducerState).toEqual(expectedState)
    });

    it('captcha should be set', () => {

        let action = setCaptchaValue('some value of captcha');
        let action2 = setCaptchaValue('just captcha');

        let resultReducerState = authReducer(initialState, action);
        let resultReducerState2 = authReducer(initialState, action2);

        let expectedState = {
            id: null,
            email: null,
            login: null,
            captcha: 'some value of captcha',
            isAuth: false,
            error: null,
        };

        expect(resultReducerState).toEqual(expectedState);
    })

});