import React from 'react';
import {Route} from 'react-router-dom';
import './App.css'
import {Nav} from './Components/nav/Nav';
import {DialogContainer} from "./Components/dialogs/DialogContainer";
import {News} from "./Components/news/News";
import {Settings} from './Components/settings/Settings';
import {stateType} from './redux/store';
import {ActionCreatorsType} from "./redux/TypesForRedux";
import {UsersContainer} from './Components/users/UsersContainer';
import {ProfileContainerWithURL} from "./Components/profile/ProfileContainer";
import HeaderContainer from "./Components/header/HeaderContainer";
import LoginContainer from "./Components/login/Login";

type propsType = {
    state: stateType
    dispatch: (action:ActionCreatorsType) => void
}

const App:React.FC<propsType> = (props) => {

    return (
        <div className={'app__wrapper'}>
            <HeaderContainer />
            <Nav navPage={props.state.navPage} />
            <div className="app__wrapper_content">
                <Route path={'/profile/:userId?'} render={() => <ProfileContainerWithURL />}/>
                <Route path={'/dialogs'} render={() => <DialogContainer />}/>
                <Route path={'/users'}  render={() => <UsersContainer />}/>
                <Route path={'/news'}  render={() => <News />}/>
                <Route path={'/settings'} render={() => <Settings />}/>
                <Route path={'/login'} render={() => <LoginContainer />}/>
            </div>
        </div>
    );
}

export default App;




