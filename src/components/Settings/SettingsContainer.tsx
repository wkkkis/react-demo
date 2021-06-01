import React from "react";
import {compose} from "redux";
import {profileType, updateUsersProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Settings from "./Settings";
import {Redirect} from "react-router";
import {AppStateType} from "../../redux/react-store";

type SettingsContainerType = {
    profile: profileType
    messages: string | null
    updateUsersProfile: () => void
}

type mapStateToPropsType = {
    profile: profileType | null
    messages: string | null
}


type mapDispatchToPropsType = {
    updateUsersProfile: (data: profileType) => void
}

const SettingsContainer = ({updateUsersProfile, ...props}:SettingsContainerType) => {

    if(!props.profile){
        return <Redirect to={"/profile"}/>
    }

    return (
        <Settings lookingForAJob={props.profile.lookingForAJob}
                  lookingForAJobDescription={props.profile.lookingForAJobDescription}
                  fullName={props.profile.fullName}
                  updateUsersProfile={updateUsersProfile}
                  contacts={props.profile.contacts}
                  messages={props.messages}
                  aboutMe={props.profile.aboutMe}
        />
    )
}


let mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    profile: state.profilePage.profile,
    messages: state.profilePage.messages
})

export default compose(
    connect<mapStateToPropsType, mapDispatchToPropsType, SettingsContainerType, AppStateType>(
        mapStateToProps, {updateUsersProfile}),
    withAuthRedirect
)(SettingsContainer)