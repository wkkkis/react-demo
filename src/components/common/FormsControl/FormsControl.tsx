import React from "react";
import s from "./FormControl.module.css";

export const renderField = (Element: any) => (field: any) => {
    return (
        <div className={s.inputRow}>
            <Element {...field.input} {...field.meta}/>
            {field.meta.touched && field.meta.error &&
            <span>{field.meta.error}</span>}
        </div>
    )
}

