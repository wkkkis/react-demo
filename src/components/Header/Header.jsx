import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import DropDown from "../common/DropDown/DropDown";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header_logo}>
                <div className={s.logo}>
                    <NavLink to="/profile"><h1>I<span>S</span>S<span>.</span></h1></NavLink>
                </div>
            </div>
            <div className={s.authIdentification}>
                <div className={s.navIden}>
                    {props.isAuth && <DropDown {...props}/>}
                </div>
            </div>
        </header>
    );
}

export default Header;