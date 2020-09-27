import React from 'react';
import {addPost, updatePost} from "../../../../redux/TypesForRedux";
import {NewPost} from "./NewPost";
import {connect} from "react-redux";
import {stateType} from "../../../../redux/redux-store";

type MapStateToPropsType = {
    newPost: string | number
}

const mapStateToProps = (state: stateType):MapStateToPropsType => {

    return {
        newPost: state.profilePage.newPost
    }
}

export const NewPostContainer = connect(mapStateToProps, {addPost, updatePost})(NewPost);
