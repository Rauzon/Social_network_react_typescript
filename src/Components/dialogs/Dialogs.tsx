import React from "react";
import style from './dialogs.module.css'
import { NewMessage } from "./newMessage/NewMessage";



export const Dialogs = () => {
    type namesType = {
        id: number,
        name: string
    }
    const arrNames: Array<namesType> = [
        {id: 1, name: 'Marat'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Arkasha'},
        {id: 4, name: 'Tolik'}
        ]

    const names = arrNames.map((item) => {
        return (
            <div className={style.dialogs__people_name} key={item.id}>
                <span>{item.name}</span>
            </div>
        )
    })

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__people}>
                {names}
            </div>
            <div className={style.dialogs__messages}>
                <NewMessage />
            </div>
        </div>
    )

}