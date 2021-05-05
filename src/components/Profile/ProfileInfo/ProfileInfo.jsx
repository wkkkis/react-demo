import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import defaultava from '../../../assets/images/defaultava.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.img_content}>
                <img
                    src="https://1vc0.ru/wp-content/uploads/2014/11/temnota-depressii-e1417182659505.jpg"
                    width="100%" height="300px"/>
            </div>
            <div className={s.avaDescription}>
                <div>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : defaultava}
                         className={s.avaImage}/>
                </div>
                <div>
                    <div className={s.mainName}><span>{props.profile.fullName}</span></div>
                    <div className={s.mainStatus}><ProfileStatusWithHooks {...props}/></div>
                </div>
                <div className={s.jobDescription}>
                    <div><span className={s.forDescription}>Looking for work ?</span></div>
                    <div className={s.answerForDescription}>
                        {props.profile.lookingForAJob === true && <span>yes</span>
                        || props.profile.lookingForAJob === false && <span>no</span>}
                    </div>
                    {props.profile.lookingForAJob === true &&
                        <div><span className={s.forDescription}>item description:</span></div>
                    }
                    {props.profile.lookingForAJob === true &&
                        <div className={s.answerForDescription}><span>{props.profile.lookingForAJobDescription}</span></div>
                    }

                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;