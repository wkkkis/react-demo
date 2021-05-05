import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const MyPostsContainer = props => {
    return (
        <MyPosts isOwner={props.isOwner} {...props}/>
    )
}


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost:(textForPost) => {
            dispatch(addPostActionCreator(textForPost))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);