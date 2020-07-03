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

function App() {
    return (
        <div className={'app__wrapper'}>
            <Header/>
            <Nav />
            <div className="app__wrapper_content">
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} component={Dialogs}/>
                <Route path={'/users'} component={Users}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;




