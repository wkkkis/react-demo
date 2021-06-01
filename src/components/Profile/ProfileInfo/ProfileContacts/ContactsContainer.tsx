import React, {useState} from "react";
import Contacts from "./Contacts";
import s from "./Contact.module.css"

import drop from "../../../../assets/images/fordrop.png"
import Overlay from "../../../common/Overlay/Overlay";
import {contactsType} from "../../../../redux/profile-reducer";

type ContactsContainerPropsType = {
    contacts: contactsType
}

const ContactsContainer = ({contacts}: ContactsContainerPropsType) => {

    let [editMode, setEditMode] = useState<boolean>(false)

    const activeEditMode = () => {
        setEditMode(!editMode)
    }

    return (
        <>
            <div className={s.showMoreButton} title="show more">
                <div className={s.drop} onClick={activeEditMode}>
                    <button>Contacts</button>
                    <img src={drop} alt="" width="20px"/>
                </div>
            </div>

            {editMode &&
            <>
                <Overlay editFunc={activeEditMode}/>
                <div className={s.moreContact}>
                    {Object.keys(contacts).map(key => {
                        return <Contacts key={key} contactTitle={key} contactValue={contacts[key as keyof contactsType]}/>
                    })}
                </div>
            </>
            }
        </>
    )
}
export default ContactsContainer