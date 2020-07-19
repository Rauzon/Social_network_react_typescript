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
import {storeType} from './redux/store';

type propsType = {
    store:storeType
    addPost: () => void
    addMessage: () => void
    updatePost: (newPostValue:string | number) => void
    updateMessage: (newMessageValue:string | number) => void
}

const App:React.FC<propsType> = (props) => {
    return (
        <div className={'app__wrapper'}>
            <Header/>
            <Nav navPage={props.store.navPage} />
            <div className="app__wrapper_content">
                <Route path={'/profile'} render={() => <Profile profilePage={props.store.profilePage}
                                                                addPost={props.addPost}
                                                                updatePost={props.updatePost}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogPage={props.store.dialogsPage}
                                                                addMessage={props.addMessage}
                                                                updateMessage={props.updateMessage}/>}/>
                <Route path={'/users'}  render={() => <Users />}/>
                <Route path={'/news'}  render={() => <News />}/>
                <Route path={'/settings'} render={() => <Settings />}/>
            </div>
        </div>
    );
}

export default App;




