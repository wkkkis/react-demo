import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.nav_name}>
                <NavLink to="/profile" activeClassName={s.nav_a}>Profile</NavLink>
            </div>
            <div className={s.nav_name}>
                <NavLink to="/massage" activeClassName={s.nav_a}>Message</NavLink>
            </div>
            <div className={s.nav_name}>
                <NavLink to="/users" activeClassName={s.nav_a}>Friends</NavLink>
            </div>
            <div className={s.nav_name}>
                <NavLink to="/news" activeClassName={s.nav_a}>News</NavLink>
            </div>
            <div className={s.nav_name}>
                <NavLink to="/music" activeClassName={s.nav_a}>Music</NavLink>
            </div>
            <div className={s.nav_name}>
                <NavLink to="/settings" activeClassName={s.nav_a}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;