import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostReduxForm} from "./MyPostForm/MyPostReduxForm";

const MyPosts = props => {
    let postsElement = props.posts.map(p => <Post message={p.message} key={p.id} like={p.likesCount}/>)

    const onSubmit = async values => {
        props.addPost(values.newPost)
    }

    return (
        <div className={s.postsBlock}>
            {props.isOwner &&
            <div className={s.postsBlocksMini}>
                <div className={s.textAreaBlocks}>
                    <MyPostReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
            }
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;