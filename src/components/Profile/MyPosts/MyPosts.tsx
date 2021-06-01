import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import MyPostReduxForm from "./MyPostForm/MyPostReduxForm";
import {postsType} from "../../../redux/profile-reducer";

export type MapPropsType = {
    posts: Array<postsType>
}
export type DispatchPropsType = {
    addPost: (newPost: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
    let postsElement;
    if(props.posts){
        postsElement = props.posts.map(p => <Post message={p.message} key={p.id} like={p.likesCount}/>)
    }

    let onSubmit = (values: any) => {
        props.addPost(values.newPost)
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.postsBlocksMini}>
                <div className={s.textAreaBlocks}>
                    <MyPostReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;