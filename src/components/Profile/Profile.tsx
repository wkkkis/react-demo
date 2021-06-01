import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profileType} from "../../redux/profile-reducer"
import {AppStateType} from "../../redux/react-store";

type ProfilePropsType = {
    savePhoto: (file: File) => void,
    owner: boolean,
    profile: profileType,
    status: string | null,
    updateUsersStatus: (status: string) => void,
    store: AppStateType
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.owner}
                         profile={props.profile}
                         status={props.status}
                         updateUsersStatus={props.updateUsersStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;