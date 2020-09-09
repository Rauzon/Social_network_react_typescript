import React from 'react';
import {Route} from 'react-router-dom';
import './App.css'
import {Header} from './Components/header/Header';
import {Nav} from './Components/nav/Nav';
import {Profile} from './Components/profile/Profile';
import {Dialogs} from "./Components/dialogs/Dialogs";
import {Users} from "./Components/users/Users";
import {News} from "./Components/news/News";
import { Settings } from './Components/settings/Settings';
import {stateType} from './redux/store';
import {ActionCreatorsType} from "./redux/TypesForRedux";
import { UsersContainer } from './Components/users/UsersContainer';

type propsType = {
    state: stateType
    dispatch: (action:ActionCreatorsType) => void
}

const App:React.FC<propsType> = (props) => {
    return (
        <div className={'app__wrapper'}>
            <Header/>
            <Nav navPage={props.state.navPage} />
            <div className="app__wrapper_content">
                <Route path={'/profile'} render={() => <Profile profilePage={props.state.profilePage}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogPage={props.state.dialogsPage}
                                                                dispatch={props.dispatch}/>}/>
                <Route path={'/users'}  render={() => <UsersContainer />}/>
                <Route path={'/news'}  render={() => <News />}/>
                <Route path={'/settings'} render={() => <Settings />}/>
            </div>
        </div>
    );
}

export default App;




