import React from 'react';
import s from './Settings.module.css';
import {useForm} from "react-hook-form";


const Settings = ({fullName, lookingForAJobDescription,
                      updateUsersProfile, isRedirect,
                      lookingForAJob, contacts,
                      messages, aboutMe}) => {

    const { register, handleSubmit} = useForm({
        defaultValues: {
            aboutMe: aboutMe,
            fullName: fullName,
            lookingForAJobDescription: lookingForAJobDescription,
            lookingForAJob: lookingForAJob,
            contacts: Object.keys(contacts).map(key => {
                return key
            })
        }
    });

    const onSubmit = async (data) => {
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
                    <input placeholder={key} {...register(`contacts.${key}`)} />
                </div>
            })}
            <div className={s.buttons}>
                <button disabled={isRedirect}>Save</button>
            </div>
        </form>
    );
}

export default Settings;