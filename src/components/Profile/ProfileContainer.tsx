import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    savePhoto,
    updateUsersStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {profileType} from "../../redux/profile-reducer"
import {AppStateType} from "../../redux/react-store";

type ProfileContainerPropsType = {
    profile: profileType,
    status: string | null,
    userId: number | null,
    getUserStatus: (userId: number) => void,
    match: any,
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: profileType) => Promise<any>,
    store: AppStateType,
    updateUsersStatus: (status: string) => void
}

type MapStatePropsType = {
    profile: null | profileType,
    status: string | null,
    userId: number | null,
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUsersStatus: (status: string) => void
    savePhoto: (file: File) => void
}

const ProfileContainer = (props: ProfileContainerPropsType) => {

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.userId;
        }
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, [props.match.params.userId]);

    return (
        <Profile owner={!props.match.params.userId} {...props}/>
    );
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId
})


export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, ProfileContainerPropsType, AppStateType>(
        mapStateToProps,
        {getUserProfile, getUserStatus, updateUsersStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)