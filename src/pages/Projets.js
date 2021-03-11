import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Style from "./Page.module.scss"

const Projets = () => {
     return(
        <div className={Style.page}>
            <Navbar />
            Projets
        </div>
    );
};

export default Projets;