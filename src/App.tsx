import React, {CSSProperties, useEffect} from 'react';
import {Route} from 'react-router-dom';
import s from  './app.module.css'
import {Nav} from './Components/nav/Nav';
import {DialogContainer} from "./Components/dialogs/DialogContainer";
import {News} from "./Components/news/News";
import {Settings} from './Components/settings/Settings';
import {ActionCreatorsType} from "./redux/TypesForRedux";
import {UsersContainer} from './Components/users/UsersContainer';
import {ProfileContainerWithURL} from "./Components/profile/ProfileContainer";
import HeaderContainer from "./Components/header/HeaderContainer";
import LoginContainer from "./Components/login/Login";
import { initializedAppThunk } from './thunks/appThunk';
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "./redux/redux-store";
import {CircularProgress} from "@material-ui/core";

type propsType = {
    state: stateType
    dispatch: (action:ActionCreatorsType) => void
}

const App:React.FC<propsType> = (props) => {

    const isInitialized = useSelector<stateType, boolean>(state => state.app.isInitialized)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializedAppThunk())
    }, [])

    const circleProgressStyle: CSSProperties = {
        display: 'block',
        position: "absolute",
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        margin: 'auto',

    }

    if(!isInitialized){
        return <CircularProgress style={circleProgressStyle} />
    }


    return (
        <div className={s.app__wrapper}>
            <HeaderContainer />
            <Nav navPage={props.state.navPage} />
            <div className={s.app__wrapper_content}>
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




