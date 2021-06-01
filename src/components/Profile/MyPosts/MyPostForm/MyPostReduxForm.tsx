import React from "react";
import {Form, Field} from "react-final-form";
import {renderField} from "../../../common/FormsControl/FormsControl";

export type AddPostFormValuesType = {
    onSubmit: (values: string) => void
}

export default function MyPostReduxForm ({onSubmit}: AddPostFormValuesType) {
    const TextArea = renderField("textarea");
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{stooge: 'newMessage', employed: false}}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="newPost" component={TextArea}/>
                    <button type="submit">
                        Add new post
                    </button>
                </form>
            )}
        />
    )
}