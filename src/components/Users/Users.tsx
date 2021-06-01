import React from "react";
import s from './Users.module.css';
import Pagination from "../common/Paginator/Paginator";
import User from "./User";
import {usersType} from "../../redux/users-reducer";

type UserPropsType = {
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    pages: Array<number>,
    users: Array<usersType>,
    followingProgression: Array<number>,
    unfollow: (id: number) => void,
    follow: (id: number) => void,
    totalCount: number,
    pageSize: number
}

const Users = ({currentPage, onPageChanged, pages, ...props}: UserPropsType) => {
    return (
        <div className={s.mainUsers}>
            {props.users.map(u => <User user={u}
                                        followingProgression={props.followingProgression}
                                        key={u.id}
                                        unfollow={props.unfollow}
                                        follow={props.follow}
                />
            )}
            {props.users &&
                <div className={s.paginator}>
                    <Pagination currentPage={currentPage} onPageChanged={onPageChanged} pages={pages} {...props}/>
                </div>
            }
        </div>
    )
}

export default Users;