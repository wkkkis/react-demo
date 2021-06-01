import React from "react";

const NotFound = () => {

    let span = {
        fontSize: "50px",
        color: "#b9bbbe",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: "15%"
    }

    return (
        <>
            <span style={span}>
                404 NOT FOUND
            </span>
        </>
    )
}
export default NotFound