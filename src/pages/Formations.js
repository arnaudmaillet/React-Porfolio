import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Style from "./Formations.scss"

const Formations = () => {
     return(
        <div className={Style.page}>
            <Navbar />
            <div style={{fontSize: "5rem"}}>Formations</div>
        </div>
    );
};

export default Formations;