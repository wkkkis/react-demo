import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import DropDown from "../common/DropDown/DropDown";

type HeaderPropsType = {
    login: string
    isAuth: boolean
    logOut: () => void
}

const Header = ({isAuth, login, logOut}:HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.header_logo}>
                <div className={s.logo}>
                    <NavLink to="/profile"><h1>I<span>S</span>S<span>.</span></h1></NavLink>
                </div>
            </div>
            <div className={s.authIdentification}>
                <div className={s.navIden}>
                    {isAuth && <DropDown login={login} logOut={logOut}/>}
                </div>
            </div>
        </header>
    );
}

export default Header;