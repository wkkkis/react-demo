import React from "react";
import {Field, Form} from "react-final-form";
import s from "./DialogsReduxForm.module.css";
import {renderField} from "../../common/FormsControl/FormsControl";

type DialogsFormType = {
    onSubmit: (message: string) => void
}

const DialogForm = ({onSubmit}:DialogsFormType) => {
    const Input = renderField("input");
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{stooge: 'newPost', employed: false}}
            render={({handleSubmit, submitting, pristine}) => (
                <form className={s.dialogForm} onSubmit={handleSubmit}>
                    <Field className={s.dialogInput} component={Input} placeholder="enter your message"
                           name="newMessageBody"/>
                    <button type="submit" disabled={submitting || pristine}>
                        Send
                    </button>
                </form>
            )}
        />
    )
}

export const DialogsRedux = DialogForm