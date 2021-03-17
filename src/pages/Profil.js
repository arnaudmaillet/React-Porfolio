import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Style from "./Page.module.scss"

const Profil = () => {
     return(
        <div className={Style.page}>
            <Navbar />
            <div style={{color: "white", fontSize: "5rem"}}>Profil</div>
        </div>
    );
};

export default Profil;