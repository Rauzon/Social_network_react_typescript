import React from 'react';
import {addPost} from "../../../../redux/TypesForRedux";
import {connect} from "react-redux";
import {NewPost} from "./NewPost";


export const NewPostContainer = connect(null, {addPost})(NewPost);
