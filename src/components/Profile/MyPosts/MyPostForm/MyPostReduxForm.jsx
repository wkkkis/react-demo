import React from "react";
import {Form, Field} from "react-final-form";
import {renderField} from "../../../common/FormsControl/FormsControl";

const MyPostForm = (props) => {
    const TextArea = renderField("textarea");
    return (
        <Form
            onSubmit={props.onSubmit}
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

export const MyPostReduxForm = MyPostForm