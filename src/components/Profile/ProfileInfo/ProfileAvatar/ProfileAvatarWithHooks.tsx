import React, {useState} from "react";
import s from "../ProfileInfo.module.css";
import drop from "../../../../assets/images/drop.png"
import InputFiles from "../../../common/InputFiles/InputFiles";
import exitButton from "../../../../assets/images/hoverExit.png";
import Overlay from "../../../common/Overlay/Overlay";


type ProfileAvatarWithHooksPropsType = {
    savePhoto: (file: File) => void
}

const ProfileUserAvatar = ({savePhoto}: ProfileAvatarWithHooksPropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false)

    const showEditAva = () => {
        setEditMode(true)
    }
    let closeEditAva = () => {
        setEditMode(false)
    }
    let saveAvatar = () => {
        setEditMode(false)
    }

    let handleSubmit = (e: any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
            saveAvatar()
        }
    }

    return (
        <>
            {!editMode &&
            <div className={s.profileAvatarPage} >
                <img onClick={showEditAva} title="edit ava" src={drop} alt="" width="20px"/>
            </div>
            }
            {editMode &&
            <div className={s.profileAvatarDrop}>

                <Overlay editFunc={closeEditAva}/>

                <div className={s.profileAvatarEditMode}>
                    <li>
                        <img className={s.exitAvatarEditMode} src={exitButton} width='40px' alt=""
                             onClick={closeEditAva}/>
                    </li>
                    <li>
                        <InputFiles handleSubmit={handleSubmit}/>
                    </li>
                    <li>
                        <button onClick={saveAvatar}>
                            Save
                        </button>
                    </li>
                </div>
            </div>
            }
        </>
    )
}

export default ProfileUserAvatar;