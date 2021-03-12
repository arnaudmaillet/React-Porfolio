import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import Style from "./Page.module.scss";
import ResSociaux from "../components/ResSociaux/ResSociaux.js"
import TitreH1 from "../components/TitreH1/TitreH1.js"

const Accueil = () => {
     return(
         <div style={{marginRight: "0", marginLeft: "0", paddingLeft: "0",paddingRight: "0", overflow: "hidden"}}>
            <div className={Style.page}>
                {/* <Navbar /> */}
                <TitreH1 />
                <ResSociaux />
                <div className={Style.ligne}></div>
            </div>
            <div style={{height: "1000px"}}>

            </div>
         </div>
    );
};

export default Accueil;