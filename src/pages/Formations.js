import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Style from "./Page.module.scss"

const Formations = () => {
     return(
        <div className={Style.page}>
            <Navbar />
            Formations
        </div>
    );
};

export default Formations;