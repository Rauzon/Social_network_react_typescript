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
    newPost: string
}

export type NewPostContainerPropsType = MapDispatchToPropsType & MapStateToPropsType


// const NewPostContainer: React.FC<NewPostContainerPropsType> = (props) => {
//
//     return <NewPost updatePost={props.updatePost} addPost={props.addPost} newPost={props.newPost}/>
// }


const mapStateToProps = (state: stateType) => {

    return {
        newPost: state.profilePage.newPost
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
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
