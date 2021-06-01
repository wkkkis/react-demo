import React from 'react';
import s from './Settings.module.css';
import {useForm} from "react-hook-form";
import {contactsType, profileType} from "../../redux/profile-reducer";

type SettingsPropsType = {
    fullName: string
    lookingForAJobDescription: string | null
    updateUsersProfile: (data: profileType) => void
    lookingForAJob: boolean
    contacts: contactsType
    messages: string | null
    aboutMe: string | null
}

const Settings = ({fullName, lookingForAJobDescription,
                      updateUsersProfile,
                      lookingForAJob, contacts,
                      messages, aboutMe}:SettingsPropsType) => {

    const { register, handleSubmit} = useForm({
        defaultValues: {
            aboutMe: aboutMe,
            fullName: fullName,
            lookingForAJobDescription: lookingForAJobDescription,
            lookingForAJob: lookingForAJob,

        }
    });

    const onSubmit = async (data: profileType) => {
        updateUsersProfile(data);
    };

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.labelError}>
                <label>{messages}</label><br/>
            </div>
            <div>
                <label>About me :</label><br/>
                <input {...register("aboutMe")} />
            </div>
            <div>
                <label>fullName:</label><br/>
                <input {...register("fullName")} />
            </div>
            <div className={s.chekblock}>
                <label>looking for a job ?</label><br/>
                <input {...register("lookingForAJob")} type='checkBox'/>
            </div>
            <div>
                <label>lookingForAJobDescription :</label><br/>
                <input {...register("lookingForAJobDescription")} />
            </div>
            {Object.keys(contacts).map(key => {
                return <div key={key}>
                    <label>{key} :</label><br/>
                    <input placeholder={key} name={key} defaultValue={contacts[key as keyof contactsType]} key={key}/>
                </div>
            })}
            <div className={s.buttons}>
                <button>Save</button>
            </div>
        </form>
    );
}

export default Settings;