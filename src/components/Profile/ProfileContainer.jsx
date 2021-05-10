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

const ProfileContainer = (props) => {

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

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId
})

export default compose(
    connect(
        mapStateToProps,
        {getUserProfile, getUserStatus, updateUsersStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)