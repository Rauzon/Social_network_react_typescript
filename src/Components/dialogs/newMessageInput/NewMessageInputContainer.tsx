import React, {RefObject} from "react";
import {ActionCreatorsType, addMessageAC, updateMessageAC} from "../../../redux/TypesForRedux";
import {NewMessageInput} from "./NewMessageInput";
import {connect} from "react-redux";
import {stateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    newMessageValue: string | number
}

type mapDispatchToPropsType = {
    updateMessageValue: (messageValue:string) => void
    addNewMessage: () => void
}


const mapStateToProps = (state:stateType): mapStateToPropsType => {
    return {
        newMessageValue: state.dialogsPage.newMessage
    }
}

const mapDispatchToProps = (dispatch:Dispatch<ActionCreatorsType>):mapDispatchToPropsType => {
    return {
        updateMessageValue: (messageValue:string) => {
            dispatch(updateMessageAC(messageValue))
        },
        addNewMessage: () => {
            dispatch(addMessageAC())
        }
    }
}



export const NewMessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessageInput)