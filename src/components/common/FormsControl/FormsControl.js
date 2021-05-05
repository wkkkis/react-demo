import React from "react";
import s from "./FormControl.module.css";
import {Field} from "react-final-form";

export const renderField = Element => field => {
    return (
        <div className={s.inputRow}>
            <Element {...field.input} {...field.meta}/>
            {field.meta.touched && field.meta.error &&
            <span>{field.meta.error}</span>}
        </div>
    )
}

