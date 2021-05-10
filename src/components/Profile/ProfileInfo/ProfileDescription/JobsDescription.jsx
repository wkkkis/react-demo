import React from "react";

const JobsDescription = ({lookingForAJob, lookingForAJobDescription}) => {

    let mainSpan = {
        fortSize: '15px',
        color: "white"
    }
    let answerSpan = {
        color: "#b9bbbe"
    }

    return (
        <>
            <span style={mainSpan}>Looking for a job ?</span>
            <div style={answerSpan}>
                {lookingForAJob ? <span>yes</span> : <span>no</span>}
            </div>
            <div>
                {lookingForAJobDescription != null &&
                <div style={mainSpan}>
                    <span>description item:</span>
                    <div style={answerSpan}>
                        <span>{lookingForAJobDescription}</span>
                    </div>
                </div>}
            </div>
        </>
    )
}
export default JobsDescription