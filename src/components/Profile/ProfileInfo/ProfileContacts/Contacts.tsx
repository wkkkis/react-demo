import React from "react";

type ContactsPropsType = {
    contactTitle: string,
    contactValue: any
}

const Contacts = ({contactTitle, contactValue}: ContactsPropsType) => {

    let aStyle = {
        color: "#00BFFF"
    }

    return(
        <div>
            <span>{contactTitle}: </span>
            <span><a style={aStyle} href={contactValue}>{contactValue}</a></span>
        </div>
    )
}
export default Contacts