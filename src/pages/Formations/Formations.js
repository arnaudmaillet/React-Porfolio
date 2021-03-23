import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import "./Formations.scss"

import Titre from "../../components/Titre/Titre.js";

const Formations = () => {
     return(
        <div className="formations">
            <Navbar />
            <div className="titre_formations">
                <div className="titre_formations_haut">
                    <Titre texte={"Mes Formations"}/>
                </div>
                <div className="titre_formations_milieu">
                    <Titre texte={"Mes Compétences"}/> 
                </div> 
                <div className="titre_formations_bas">
                    <Titre texte={"Mes Stages"}/> 
                </div> 
            </div>
        </div>
    );
};

export default Formations;