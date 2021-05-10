import React, {useState} from "react";
import Contacts from "./Contacts";
import drop from "../../../../assets/images/fordrop.png"

const ContactsContainer = ({contacts}) => {

    let [editMode, setEditMode] = useState(false)

    const activeEditMode = () => {
        setEditMode(true)
    }

    const closeEditMode = () => {
        setEditMode(false)
    }

    let buttonStyle = {
        background: "none",
        border: "none",
        outline: "none",
        color: "#cbc9c9"
    }
    let showBlockStyle = {
        width:"100px",
        height: "20px",
        boxShadow: "0 0 0 1px #202225",
        borderRadius: "5px"
    }
    let imgStyle = {
        transform: "rotate(90deg)"
    }
    let block = {
        display: "grid",
        gridTemplateColumns: "75px 20px"
    }
    let moreBlock = {
        maxWidth: "200px",
        width: "100%",
        background: "#202225",
        position: "absolute",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 0 0 1px #b9bbbe",
        marginLeft: "-3.5%",
        marginTop: "5px",
        color: "#b9bbbe"
    }

    return (
        <>
            <div style={showBlockStyle} title="show more">
                {editMode ?
                    <div style={block} onClick={closeEditMode}>
                        <button style={buttonStyle}>Contacts</button>
                        <img src={drop} alt="" width="20px"/>
                    </div>
                    : <div style={block} onClick={activeEditMode}>
                        <button style={buttonStyle}>Contacts</button>
                        <img style={imgStyle} src={drop} alt="" width="20px"/>
                    </div>
                }
            </div>

            {editMode &&
            <div style={moreBlock}>
                {Object.keys(contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={contacts[key]}/>
                })}
            </div>
            }
        </>
    )
}
export default ContactsContainer