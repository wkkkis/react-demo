import React from "react";
import {NavLink} from "react-router-dom";
import s from './DropDown.module.css';
import forDrop from "../../../assets/images/fordrop.png"

class DropDown extends React.Component {

    state = {
        dropdown: false
    }

    dropShow = () => {
        this.setState({
            dropdown: true
        })
    }

    dropClose = () => {
        this.setState({
            dropdown: false
        })
    }


    render() {
        return (
            <div className={s.dropDown}>
                {!this.state.dropdown ?
                    <div onClick={this.dropShow} className={s.dropShow}>
                        <button>{this.props.login}</button>
                        <img src={forDrop} width="20px"/>
                    </div>
                    : <div onClick={this.dropClose}>
                        <div className={s.dropClose}>
                            <button>{this.props.login}</button>
                            <img src={forDrop} width="20px"/>
                        </div>
                        <div className={s.dropMenu}>
                            <div>
                                <NavLink to="/profile">Home</NavLink>
                            </div>
                            <div>
                                <NavLink to="/settings">Settings</NavLink>
                            </div>
                            <div>
                                <NavLink to="/login"><span onClick={this.props.logOut}>Log Out</span></NavLink>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default DropDown