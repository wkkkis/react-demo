import React from "react";

const Contacts = ({contactTitle, contactValue}) => {
    return(
        <div>
            <span>{contactTitle}: </span>
            <span><a href={contactValue}>{contactValue}</a></span>
        </div>
    )
}
export default Contacts