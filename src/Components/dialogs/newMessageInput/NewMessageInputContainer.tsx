import React from "react";
import {addMessage, updateMessage} from "../../../redux/TypesForRedux";
import {NewMessageInput} from "./NewMessageInput";
import {connect} from "react-redux";
import {stateType} from "../../../redux/redux-store";



type mapStateToPropsType = {
    newMessageValue: string | number
}

const mapStateToProps = (state:stateType): mapStateToPropsType => {
    return {
        newMessageValue: state.dialogsPage.newMessage
    }
}

export const NewMessageInputContainer = connect(mapStateToProps, {addMessage, updateMessage})(NewMessageInput)