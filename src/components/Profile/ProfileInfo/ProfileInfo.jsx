import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import defaultava from '../../../assets/images/defaultava.png';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileUserAvatar from "./ProfileAvatar/ProfileAvatarWithHooks";
import bgInfo from "../../../assets/images/profileInfo.png"
import ContactsContainer from "./ProfileContacts/ContactsContainer";
import setting from "../../../assets/images/settings.png"
import {NavLink} from "react-router-dom";
import AboutMe from "./ProfileAboutMe/AboutMe";
import JobsDescription from "./ProfileDescription/JobsDescription";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.img_content}>
                <img src={bgInfo} alt="image" width="100%"/>
            </div>
            <div className={s.avaDescription}>
                <div className={s.miniAvaMain}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : defaultava}
                         className={props.isOwner ? s.avaImage : s.allUserAva} alt="image"/>
                    <div>
                        {props.isOwner &&
                        <ProfileUserAvatar profile={props.profile} savePhoto={props.savePhoto}/>
                        }
                    </div>
                </div>
                <div>
                    <div className={s.mainName}>
                        <span>{props.profile.fullName}</span>
                    </div>
                    <div className={s.mainStatus}><ProfileStatusWithHooks {...props}/></div>
                </div>
                <div className={s.aboutMeBlock}>
                    <AboutMe aboutMe={props.profile.aboutMe}/>
                </div>
                <div className={s.jobsDecriptionBlock}>
                    <JobsDescription lookingForAJob={props.profile.lookingForAJob}
                                     lookingForAJobDescription={props.profile.lookingForAJobDescription}/>
                </div>
                <div>
                    <ContactsContainer contacts={props.profile.contacts}/>
                </div>
                {props.isOwner &&
                <div>
                    <NavLink to="/settings"><img title="settings" src={setting} alt="" width="20px"/></NavLink>
                </div>
                }
            </div>
        </div>
    );
}

export default ProfileInfo;