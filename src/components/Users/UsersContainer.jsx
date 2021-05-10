import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsersPage,
    isFollowingProgression,
    setCurrent, unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgression,
    getIsFetching, getPages,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/users-selectors";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const UsersContainer = ({currentPage, pageSize, getUsersPage, ...props}) => {
    useEffect(() => {
        getUsersPage(currentPage, pageSize)
    }, [currentPage, pageSize])

    const onPageChanged = (numberPage) => {
        getUsersPage(numberPage, pageSize);
    }

    return <>
        {props.isFetching ? <Preloader/> : null}
        <Users
            users={props.users}
            follow={props.follow}
            unfollow={props.unfollow}
            currentPage={currentPage}
            totalCount={props.totalCount}
            pageSize={pageSize}
            onPageChanged={onPageChanged}
            followingProgression={props.followingProgression}
            pages={props.pages}
        />
    </>
}

let mapStateTopProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgression: getFollowingProgression(state),
        pages: getPages(state)
    }
}

export default compose(
    connect(mapStateTopProps, {follow, unfollow, setCurrent, isFollowingProgression, getUsersPage}),
    withAuthRedirect
)(UsersContainer);