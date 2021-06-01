import React from "react";
import s from "./Overlay.module.css"

type overlayPropsType = {
    editFunc: () => void
}

export default function Overlay({editFunc}:overlayPropsType){
    return(
        <div className={s.overlay} onClick={editFunc}>
        </div>
    )
}
