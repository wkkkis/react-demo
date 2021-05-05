import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/massage/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.avaItem}>
                <img src={props.ava} />
            </div>
            <NavLink to={path}>
                {props.name}
            </NavLink>

        </div>
    );
}

export default DialogsItem;