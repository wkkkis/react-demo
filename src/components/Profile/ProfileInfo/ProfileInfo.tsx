import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import defaultAva from '../../../assets/images/defaultava.png';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileUserAvatar from "./ProfileAvatar/ProfileAvatarWithHooks";
import bgInfo from "../../../assets/images/profileInfo.png"
import ContactsContainer from "./ProfileContacts/ContactsContainer";
import setting from "../../../assets/images/settings.png"
import {NavLink} from "react-router-dom";
import AboutMe from "./ProfileAboutMe/AboutMe";
import JobsDescription from "./ProfileDescription/JobsDescription";
import {profileType} from "../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: profileType | null,
    savePhoto: (file: File) => void
    isOwner: boolean
    updateUsersStatus: (status: string) => void,
    status: string | null
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status,
                                                         updateUsersStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.img_content}>
                <img src={bgInfo} alt="image"/>
            </div>
            <div className={s.avaDescription}>
                <div className={s.miniAvaMain}>
                    <img src={profile.photos.large || defaultAva}
                         className={isOwner ? s.avaImage : s.allUserAva} alt="image"/>
                    {isOwner &&
                        <ProfileUserAvatar savePhoto={savePhoto}/>
                    }
                </div>
                <div>
                    <div className={s.mainName}>
                        <span>{profile.fullName}</span>
                    </div>
                    <div className={s.mainStatus}>
                        <ProfileStatusWithHooks status={status} isOwner={isOwner} updateUsersStatus={updateUsersStatus}/>
                    </div>
                </div>
                <div className={s.aboutMeBlock}>
                    <AboutMe aboutMe={profile.aboutMe}/>
                </div>
                <div className={s.jobsDescriptionBlock}>
                    <JobsDescription lookingForAJob={profile.lookingForAJob}
                                     lookingForAJobDescription={profile.lookingForAJobDescription}/>
                </div>
                <div>
                    <ContactsContainer contacts={profile.contacts}/>
                </div>
                {isOwner &&
                    <div>
                        <NavLink to="/settings">
                            <img title="settings" src={setting} alt="" width="20px"/>
                        </NavLink>
                    </div>
                }
            </div>
        </div>
    );
}

export default ProfileInfo;