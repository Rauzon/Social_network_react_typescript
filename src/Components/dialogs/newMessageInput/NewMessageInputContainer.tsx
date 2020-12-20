import {addMessage} from "../../../redux/ActionCreators";
import {NewMessageInput} from "./NewMessageInput";
import {connect} from "react-redux";
import {stateType} from "../../../redux/redux-store";

type MapDispatchToProps = {
    addMessage: (newMessage: string) => void
}

export const NewMessageInputContainer = connect<{}, MapDispatchToProps, {}, stateType>(null, {addMessage})
(NewMessageInput);