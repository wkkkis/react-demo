import React, {useState} from "react";
import s from "../ProfileInfo.module.css";
import drop from "../../../../assets/images/drop.png"
import InputFiles from "../../../common/InputFiles/InputFiles";
import exitButton from "../../../../assets/images/hoverExit.png";
import Overlay from "../../../common/Overlay/Overlay";

const ProfileUserAvatar = ({savePhoto}) => {
    let [editMode, setEditMode] = useState(false)

    const showEditAva = () => {
        setEditMode(true)
    }
    let closeEditAva = () => {
        setEditMode(false)
    }
    let saveAvatar = () => {
        setEditMode(false)
    }

    let handleSubmit = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
            saveAvatar()
        }
    }

    return (
        <div className={s.mainProfileAva}>
            {!editMode &&
            <div className={s.profileAvatarPage} onClick={showEditAva}>
                <img title="edit ava" src={drop} alt="" width="20px"/>
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
        </div>
    )
}

export default ProfileUserAvatar;