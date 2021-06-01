import React from "react";

type JobsDescriptionPropsType = {
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null
}

const JobsDescription = ({lookingForAJob, lookingForAJobDescription}: JobsDescriptionPropsType) => {

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