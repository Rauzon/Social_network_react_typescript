import {v4 as id} from "uuid";
import {NavPageType} from "./navPage-reducer";

describe('test for nav-reducer', () => {
    let initialState: NavPageType;

    beforeEach(() => {
        initialState = {
            navTitles: [
                {id: id(), title: 'Profile', path: '/profile'},
                {id: id(), title: 'Dialogs', path: '/dialogs'},
                {id: id(), title: 'Users', path: '/users'},
                {id: id(), title: 'News', path: '/news'},
                {id: id(), title: 'Settings', path: '/settings'}
            ],
            friends: [
                {id: id(), name: 'Marat', pathToDialog: '/dialogs/1', isOnline: true},
                {id: id(), name: 'Anton', pathToDialog: '/dialogs/2', isOnline: false},
                {id: id(), name: 'Arkasha', pathToDialog: '/dialogs/3', isOnline: true},
                {id: id(), name: 'Tolik', pathToDialog: '/dialogs/4', isOnline: false}
            ]
        }
    });

    test('empty test', () => {

        expect(initialState).toEqual(initialState)
    });

});


