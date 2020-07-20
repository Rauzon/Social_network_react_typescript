import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {stateType, storeType} from "./redux/store";
import {store} from "./redux/store";


export const renderAppTree = (state: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={store.addPost.bind(store)}
                     updatePost={store.updatePost.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     updateMessage={store.updateMessage.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderAppTree(store.getState());

store.sibscribe(renderAppTree)




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
