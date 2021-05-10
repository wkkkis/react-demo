import React from "react";
import defaultAva from "../../../assets/images/defaultava.png";
import s from './LoginReduxForm.module.css';
import {renderField} from "../../common/FormsControl/FormsControl";
import {Form, Field} from 'react-final-form';
import {required} from "../../utils/validation/validation";

const LoginForm = ({onSubmit, messages, captcha}) => {
    const Input = renderField("input");
    return (
        <div className={s.mainFormBlock}>
            <Form
                onSubmit={onSubmit}
                initialValues={{stooge: 'auth', employed: false}}
                render={({handleSubmit, submitting, pristine}) => (
                    <form className={s.form} onSubmit={handleSubmit}>
                        <div>
                            <img src={defaultAva} alt=""/>
                        </div>
                        <div className={s.error}>
                            <span>{messages}</span>
                        </div>
                        <div>
                            <label>Email</label>
                            <Field
                                name="email"
                                component={Input}
                                type="email"
                                placeholder="First Name"
                                validate={required}
                                autocomplete="off"
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <Field
                                name="password"
                                component={Input}
                                type="password"
                                placeholder="Last Name"
                                validate={required}
                                autocomplete="off"
                            />
                        </div>
                        <div>
                            <label>Remember me</label>
                            <Field name="rememberMe" component={Input} type="checkbox"/>
                        </div>
                        <div className={s.captchaBlock}>
                            {captcha &&
                            <img src={captcha} alt=""/>
                            }
                            {captcha &&
                            <Field
                                name="captcha"
                                component={Input}
                                type="text"
                                validate={required}
                                autocomplete="off"
                            />
                            }
                        </div>
                        <div className="buttons">
                            <button type="submit" disabled={submitting || pristine}>
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            />
        </div>
    )
}

export default LoginForm
