import React from "react";

const AboutMe = ({aboutMe}) => {

    let mainSpan = {
        fortSize: '15px',
        color: "white"
    }
    let answerSpan = {
        color: "#b9bbbe"
    }

    return (
        <>
            <span style={mainSpan}>About me:</span>
            <div style={answerSpan}>
                <span>{aboutMe}</span>
            </div>
        </>
    )
}
export default AboutMe