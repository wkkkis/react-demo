import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string | null,
    like: number | null
}

const Post = (props: PostPropsType) => {
    return(
        <div>
          <div className={s.item}>
              <img src="http://3.bp.blogspot.com/_CPO4QTj7qV0/TFWcb4loxSI/AAAAAAAAAC0/SzCLkOdZS8I/s1600/39309.png.gif"  alt=""/>
              {props.message}
              <div className={s.btnLike}>
                <span>Like {props.like}</span>
              </div>
            </div>
        </div>
    );
}

export default Post;