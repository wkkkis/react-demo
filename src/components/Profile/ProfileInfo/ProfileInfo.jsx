import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import defaultava from '../../../assets/images/defaultava.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileUserAvatar from "./ProfileAvatarWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.img_content}>
                <img
                    src={"https://1vc0.ru/wp-content/uploads/2014/11/temnota-depressii-e1417182659505.jpg"}
                    width="100%" height="200px" alt="image"/>
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
                <div className={s.mainFullNameDescription}>
                    <div className={s.mainName}><span>{props.profile.fullName}</span></div>
                    <div className={s.mainStatus}><ProfileStatusWithHooks {...props}/></div>
                </div>
                <div className={s.aboutMeDescription}>
                    <div><span>Contact:</span>
                        {Object.keys(props.profile.contacts).map(key => {
                            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                        })}</div>
                </div>
                <div className={s.jobDescription}>
                    <div><span className={s.forDescription}>Looking for a job ?</span></div>
                    <div className={s.answerForDescription}>
                        {props.profile.lookingForAJob ? <span>yes</span> : <span>no</span>}
                    </div>
                    {props.profile.lookingForAJob &&
                    <div><span className={s.forDescription}>item description:</span></div>
                    }
                    {props.profile.lookingForAJob &&
                    <div className={s.answerForDescription}><span>{props.profile.lookingForAJobDescription}</span></div>
                    }

                </div>
            </div>
        </div>
    );
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div>
        <div>
            <span>{contactTitle}:</span>
        </div>
        <div>
            <a href={contactValue}>{contactValue}</a>
        </div>
    </div>
}


export default ProfileInfo;