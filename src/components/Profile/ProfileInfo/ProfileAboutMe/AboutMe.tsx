import React from "react";

type AboutMePropsType = {
    aboutMe: string | null
}
const AboutMe = ({aboutMe}: AboutMePropsType) => {

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