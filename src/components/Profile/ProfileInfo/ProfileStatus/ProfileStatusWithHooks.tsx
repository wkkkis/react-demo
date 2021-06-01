import React, {useEffect, useState} from "react";
import s from '../ProfileInfo.module.css';
import exitButton from '../../../../assets/images/hoverExit.png';
import Overlay from "../../../common/Overlay/Overlay";

type ProfileStatusPropsType = {
    status: string | null,
    isOwner: boolean,
    updateUsersStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status as string)

    useEffect(() => {
        setStatus(props.status as string)
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true)
    }

    const closeEditMode = () => {
        setEditMode(false)
    }

    const onStatusChange = (e: any) => {
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