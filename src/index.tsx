import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {stateType} from "./redux/store";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";


export type renderAppTreeType = (state: stateType) => void


export const renderAppTree: renderAppTreeType = (state: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App state={state}
                         dispatch={store.dispatch.bind(store)}/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderAppTree(store.getState());

store.subscribe(() => renderAppTree(store.getState()))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
