import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Style from "./Page.module.scss"

const Fiche = () => {
     return(
        <div className={Style.page}>
            <Navbar />
            Fiche
        </div>
    );
};

export default Fiche;