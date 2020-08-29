import React from 'react';
import {ActionCreatorsType, addPostAC, updatePostAC} from "../../../../redux/TypesForRedux";
import {NewPost} from "./NewPost";
import {connect} from "react-redux";
import {stateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";


type MapDispatchToPropsType = {
    addPost: () => void
    updatePost: (newPostValue: string) => void
}

type MapStateToPropsType = {
    newPost: string | number
}


const mapStateToProps = (state: stateType):MapStateToPropsType => {

    return {
        newPost: state.profilePage.newPost
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionCreatorsType>):MapDispatchToPropsType =>
    ({
            addPost: () => {
                dispatch(addPostAC())
            },
            updatePost: (newPost: string) => {
                dispatch(updatePostAC(newPost))
            }
        }
    )


export const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);
