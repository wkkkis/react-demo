import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div>
          <div className={s.item}>
              <img src="http://3.bp.blogspot.com/_CPO4QTj7qV0/TFWcb4loxSI/AAAAAAAAAC0/SzCLkOdZS8I/s1600/39309.png.gif" />
              {props.message}
              <div className={s.btnLike}>
                <span>Like {props.like}</span>
              </div>
            </div>
        </div>
    );
}

export default Post;