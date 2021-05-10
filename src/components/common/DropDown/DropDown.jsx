import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from './DropDown.module.css';
import forDrop from "../../../assets/images/fordrop.png"

const DropDown = ({login, logOut}) => {

    const [dropdown, setdropdown] = useState(false)


    let dropShow = () => {
        setdropdown(true)
    }

    let dropClose = () => {
        setdropdown(false)
    }


    return (
        <div className={s.dropDown}>
            {!dropdown ?
                <div onClick={dropShow} className={s.dropShow}>
                    <button>{login}</button>
                    <img src={forDrop} width="20px" alt=""/>
                </div>
                : <div onClick={dropClose}>
                    <div className={s.dropClose}>
                        <button>{login}</button>
                        <img src={forDrop} width="20px" alt=""/>
                    </div>
                    <div className={s.dropMenu}>
                        <div>
                            <NavLink to="/profile">Home</NavLink>
                        </div>
                        <div>
                            <NavLink to="/settings">Settings</NavLink>
                        </div>
                        <div>
                            <NavLink to="/login"><span onClick={logOut}>Log Out</span></NavLink>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DropDown