import React from "react";
import {compose} from "redux";
import {updateUsersProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Settings from "./Settings";

const SettingsContainer = (props) => {

    return (
        <Settings lookingForAJob={props.profile.lookingForAJob}
                  lookingForAJobDescription={props.profile.lookingForAJobDescription}
                  fullName={props.profile.fullName}
                  updateUsersProfile={props.updateUsersProfile}
                  isRedirect={props.isRedirect}
                  contacts={props.profile.contacts}
                  messages={props.messages}
                  aboutMe={props.profile.aboutMe}
        />
    )
}


let mapDispatchToProps = (state) => ({
    profile: state.profilePage.profile,
    isRedirect: state.profilePage.isRedirect,
    messages: state.profilePage.messages
})

export default compose(
    connect(
        mapDispatchToProps,
        {updateUsersProfile}
    ),
    withAuthRedirect
)(SettingsContainer)