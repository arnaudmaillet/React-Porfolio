import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Style from "./Page.module.scss"

const Stages = () => {
     return(
        <div className={Style.page}>
            <Navbar />
            Stages
        </div>
    );
};

export default Stages;