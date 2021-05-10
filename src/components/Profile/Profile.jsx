import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.owner}
                         profile={props.profile}
                         status={props.status}
                         updateUsersStatus={props.updateUsersStatus}
                         updateUsersName={props.updateUsersName}
            />
            <MyPostsContainer isOwner={props.owner} store={props.store}/>
        </div>
    );
}

export default Profile;