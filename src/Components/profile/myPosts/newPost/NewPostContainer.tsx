import React from 'react';
import {addPost} from "../../../../redux/TypesForRedux";
import {connect} from "react-redux";
import {NewPost} from "./NewPost";

type MapDispatchToProps = {
    addPost:(value: string) => void
}

export const NewPostContainer = connect<{}, MapDispatchToProps, {}, {}>(null, {addPost})(NewPost);
