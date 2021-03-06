import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import s from './app.module.css'
import {Nav} from './Components/nav/Nav';
import {News} from "./Components/news/News";
import {Settings} from './Components/settings/Settings';
import {ActionCreatorsType} from "./redux/ActionCreators";
import {ProfileContainerWithURL} from "./Components/profile/ProfileContainer";
import HeaderContainer from "./Components/header/HeaderContainer";
import LoginContainer from "./Components/login/Login";
import {initializedAppThunk} from './thunks/appThunk';
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./redux/redux-store";
import {CircularProgress} from "@material-ui/core";
import {SnackBar} from "./Components/common/SnackBar";
import {withSuspenseHOC} from "./hoc/withSuspenseHOC";

type propsType = {
    state: StateType
    dispatch: (action: ActionCreatorsType) => void
}

const DialogContainer = React.lazy(() => import('./Components/dialogs/DialogContainer')
    .then(({DialogContainer}) => ({default: DialogContainer})));
const UsersContainer = React.lazy(() => import('./Components/users/UsersContainer'));

const App: React.FC<propsType> = React.memo((props) => {

    const isInitialized = useSelector<StateType, boolean>(state => state.app.isInitialized);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializedAppThunk())
    }, []);


    if (!isInitialized) {
        return <CircularProgress className={s.circleProgress}/>
    }

    return (
        <div className={s.app__wrapper}>
            <HeaderContainer/>
            <Nav navPage={props.state.navPage}/>
            <div className={s.app__wrapper_content}>
                <Switch>
                    <Route exact path={'/'} render={() => <ProfileContainerWithURL/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainerWithURL/>}/>
                    <Route path={'/dialogs'} render={() => withSuspenseHOC(DialogContainer)}/>
                    <Route path={'/users'} render={() => withSuspenseHOC(UsersContainer)}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/login'} render={() => <LoginContainer/>}/>
                    <Route path={'*'} render={() => <div>404 NOT FOUND</div>}/>
                </Switch>
                <SnackBar/>
            </div>
        </div>
    );
});

export default App;




