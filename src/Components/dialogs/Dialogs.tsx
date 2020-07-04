import React from "react";
import style from './dialogs.module.css'
import {Messages} from "./Messages/Messages";
import {Names} from "./Names/Names";


export const Dialogs = () => {

    //data for names
    type namesType = {
        id: number,
        name: string,
        path: string
    }
    const names: Array<namesType> = [
        {id: 1, name: 'Marat', path: '/dialogs/1'},
        {id: 2, name: 'Anton', path: '/dialogs/2'},
        {id: 3, name: 'Arkasha', path: '/dialogs/3'},
        {id: 4, name: 'Tolik', path: '/dialogs/4'}
    ]

    //data for messages
    type messageType = {
        id: number,
        message: string
    }
    const messages: Array<messageType> = [
        {id: 1, message: 'Hey man!'},
        {id: 2, message: 'How is it going?'},
        {id: 3, message: 'You forgot about my birthday(('},
        {id: 4, message: 'I want to break up with you, sorry'}
    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__people}>
                {names.map((n) => <Names key={n.id} name={n.name} path={n.path}/>)}
            </div>
            <div className={style.dialogs__messages}>
                {messages.map((m) => <Messages key={m.id} message={m.message}/>)}
            </div>
        </div>
    )

}