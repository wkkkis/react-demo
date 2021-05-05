import React from "react";
import preloader from "../../../assets/images/loading.gif";

const Preloader = () => {
    return (
        <img src={preloader} style={ { width:"50px", marginLeft:"45%", marginTop:"5px"} }/>
    )
};

export default Preloader;