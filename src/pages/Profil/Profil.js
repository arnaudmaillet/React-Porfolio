import React from "react";
import "./Profil.scss"

import Navbar from "../../components/Navbar/Navbar.js";
import Footer from '../../components/Footer/Footer.js';
import Titre from "../../components/Titre/Titre.js";

const Profil = () => {
     return(
        <div className="page">
            <Navbar />
            <div className="container">
                <div className="titre_haut">
                    <Titre texte={"Je me présente,"}/>
                </div>
                <div className="titre_bas">
                    <Titre texte={"Arnaud MAILLET"}/> 
                </div> 
                <TxtPresentation />   
            </div>
            <Footer/>
        </div>
    );
};

const TxtPresentation = () => {
    return (
        <div className="presentation">
            <div className="presentation_txt">
                <p>Je m'appelle Kevin WERTHE, je suis né le 22/11/1998 et j'ai fait un BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et Applications Métiers) au lycée Saint John-Perse à Pau (64) pendant la promotion 2018-2019.</p>
                <p>Intéressé par la conception de logiciels et sites internets, j'aimerai me spécialiser et augmenter mes connaissances de codages dans ces différents domaines.</p>
            </div>    
        </div>
    )
}


export default Profil;