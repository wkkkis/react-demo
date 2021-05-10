import React, {useEffect, useState} from "react";
import s from '../ProfileInfo.module.css';
import exitButton from '../../../../assets/images/hoverExit.png';
import Overlay from "../../../common/Overlay/Overlay";

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true)
    }

    const closeEditMode = () => {
        setEditMode(false)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    const saveNewStatus = () => {
        setEditMode(false)
        props.updateUsersStatus(status);
    }

    return (
        <div className={s.mainStatusDescription}>
            {!editMode &&
            <div className={s.selectUserMain}>
                <span>{props.status}</span>
                {props.isOwner &&
                <div className={s.selectUserParagraph}>
                    <p onClick={activeEditMode}>Edit status</p>
                </div>
                }
            </div>
            }
            {editMode &&
            <div className={s.selectUser}>

                <Overlay editFunc={closeEditMode}/>

                <div className={s.inputEditMode}>
                    <div>
                        <img src={exitButton} width='50px' alt="" onClick={closeEditMode}/>
                    </div>
                    <div>
                        <input value={status} onChange={onStatusChange}/>
                    </div>
                    <div>
                        <button onClick={saveNewStatus}>
                            Save new status
                        </button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default ProfileStatus;