import React, {RefObject} from "react";
import {ActionCreatorsType, addMessageAC, updateMessageAC} from "../../../redux/TypesForRedux";
import {NewMessageInput} from "./NewMessageInput";

type PropsType = {
    newMessageValue: string | number
    dispatch: (action: ActionCreatorsType) => void
}

export const NewMessageInputContainer: React.FC<PropsType> = (props) => {

    let refTextarea: RefObject<HTMLTextAreaElement> = React.createRef()

    const addNewMessage = () => {
        props.dispatch(addMessageAC());
    }

    const changeMessageValue = (messageValue: string) => {
        props.dispatch(updateMessageAC(messageValue));
    }
    return <NewMessageInput newMessageValue={props.newMessageValue} updateMessageValue={changeMessageValue} addNewMessage={addNewMessage}/>
}
