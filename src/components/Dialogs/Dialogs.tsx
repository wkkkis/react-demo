import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsRedux} from "./DialogsForm/DialogsReduxForm";
import {InitialStateType} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogsPage: InitialStateType
    sendMessage: (formData: string) => void
}

const Dialogs = (props:DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} ava={d.ava}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <div className={s.dialogsMessageDiv}>
        <Message message={m.message} key={m.id}/>
    </div>);

    const onSubmit = (formData: any) => {
        props.sendMessage(formData.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <div className={s.dialogsForm}>
                <DialogsRedux onSubmit={onSubmit}/>
            </div>
        </div>
    );
}




export default Dialogs;