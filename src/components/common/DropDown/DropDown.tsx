import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from './DropDown.module.css';
import forDrop from "../../../assets/images/fordrop.png"

type DropDownPropsType = {
    login?: string | null
    logOut?: () => void
}

const DropDown = ({login, logOut}:DropDownPropsType) => {

    const [dropdown, setDropdown] = useState<boolean>(false)

    let dropShow = () => {
        setDropdown(true)
    }

    let dropClose = () => {
        setDropdown(false)
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