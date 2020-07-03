import React from "react";
import style from './newMessage.module.css'

export const NewMessage = () => {
    // type for messages
    type messageType = {
        id: number,
        message: string
    }
    type messageArr = Array<messageType>

    const messages: messageArr = [
        {id: 1, message: 'Hey man!'},
        {id: 2, message: 'How is it going?'},
        {id: 3, message: 'You forgot about my birthday(('},
        {id: 4, message: 'I want to break up with you, sorry'}
    ]

    return <>
        {
            messages.map((m) => {
                return <div className={style.newMessage__content} key={m.id}>
                    <span>{m.message}</span>
                </div>
            })
        }
    </>
}