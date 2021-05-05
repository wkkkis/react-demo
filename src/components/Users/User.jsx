import React from "react";
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import defaultava from "../../assets/images/defaultava.png";

const Users = ({user, followingProgression, unfollow, follow}) => {
    return (
        <div>

            <div className={s.usersBox}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : defaultava} width="50px" height="50px"
                             alt=""/>
                    </NavLink>
                </div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <span className={s.userNameSpan}>{user.name}</span>
                    </NavLink>
                    <div className={s.usersStatus}>{user.status}</div>
                </div>
                <div>
                    {user.followed
                        ? <div>
                            <button className={s.unfollowBtn}
                                    disabled={followingProgression.some(id => id === user.id)}
                                    onClick={() => {
                                        unfollow(user.id)
                                    }}>unfollow
                            </button>
                        </div>

                        : <div>
                            <button className={s.followBtn}
                                    disabled={followingProgression.some(id => id === user.id)}
                                    onClick={() => {
                                        follow(user.id)
                                    }}>follow
                            </button>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Users;