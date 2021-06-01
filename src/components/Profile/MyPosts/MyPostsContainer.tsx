import React from 'react';
import {actions, postsType, profileType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/react-store";
import {compose} from "redux";

type mapStateToPropsType = {
    posts: Array<postsType>
    profile: null | profileType
}

type mapDispatchToPropsType = {
    addPost: (newPost: string) => void
}

function MyPostsContainer (props: mapStateToPropsType & mapDispatchToPropsType){
    return (
        <>
        {
            props.profile && <MyPosts posts={props.posts} addPost={props.addPost} />
        }
        </>
    )
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts
})

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps, {addPost: actions.addPost})
)(MyPostsContainer)