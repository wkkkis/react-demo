import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsersPage, unfollow
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
import {usersType} from "../../redux/users-reducer"
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppStateType} from "../../redux/react-store";

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsersPage: (page: number, size: number) => void
}

type MapStateToPropsType = {
    users: Array<usersType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingProgression: Array<number>
    pages: Array<number>
}

type UsersContainerPropsType = {
    currentPage: number,
    pageSize: number,
    getUsersPage: (currentPge: number, pageSize: number) => void,
    numberPage: number,
    isFetching: boolean,
    users: Array<usersType>,
    unfollow: (id: number) => void,
    follow: (id: number) => void,
    totalCount: number,
    pages: Array<number>,
    followingProgression: Array<number>
}

const UsersContainer = ({currentPage, pageSize, getUsersPage, ...props}: UsersContainerPropsType) => {

    useEffect(() => {
        getUsersPage(currentPage, pageSize)
    }, [currentPage, pageSize])

    const onPageChanged = (numberPage: number) => {
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

let mapStateTopProps = (state: AppStateType): MapStateToPropsType => {
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
    connect<MapStateToPropsType, MapDispatchToPropsType, UsersContainerPropsType, AppStateType>(
        mapStateTopProps, {follow, unfollow, getUsersPage}),
    withAuthRedirect
)(UsersContainer);