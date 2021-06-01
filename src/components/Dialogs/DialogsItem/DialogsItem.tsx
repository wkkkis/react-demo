import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    id: number,
    ava: string,
    name: string
}

const DialogsItem = ({id, ava, name}:DialogsItemPropsType) => {
    let path = '/massage/' + id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.avaItem}>
                <img src={ava}  alt=""/>
            </div>
            <NavLink to={path}>
                {name}
            </NavLink>
        </div>
    );
}

export default DialogsItem;