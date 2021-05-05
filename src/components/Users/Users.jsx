import React from "react";
import s from './Users.module.css';
import Pagination from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, pages, ...props}) => {
    return (
        <div className={s.mainUsers}>
            {props.users.map(u => <User user={u}
                                        followingProgression={props.followingProgression}
                                        key={u.id}
                                        unfollow={props.unfollow}
                                        follow={props.follow}
                />
            )}
            <div className={s.paginator}>
                <Pagination currentPage={currentPage} onPageChanged={onPageChanged} pages={pages} {...props}/>
            </div>
        </div>
    )
}

export default Users;