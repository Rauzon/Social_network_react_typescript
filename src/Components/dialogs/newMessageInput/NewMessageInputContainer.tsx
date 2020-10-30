import React from "react";
import {addMessage} from "../../../redux/TypesForRedux";
import {NewMessageInput} from "./NewMessageInput";
import {connect} from "react-redux";


export const NewMessageInputContainer = connect(null, {addMessage})(NewMessageInput)