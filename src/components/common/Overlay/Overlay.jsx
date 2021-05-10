import React from "react";
import s from "./Overlay.module.css"

const Overlay = ({editFunc}) => {
    return(
        <div className={s.overlay} onClick={editFunc}>
        </div>
    )
}

export default Overlay