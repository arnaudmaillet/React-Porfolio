import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Style from "./Page.module.scss"

const Accueil = () => {
     return(
        <div className={Style.page}>
            <Navbar />
            Accueil
        </div>
    );
};

export default Accueil;