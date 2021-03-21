import React from "react";
import "./Profil.scss"

import Img from "../../assets/img/profil.jpg"
import { ReactComponent as RightArrow} from '../../assets/svg/long-arrow-alt-right-solid.svg'

import Navbar from "../../components/Navbar/Navbar.js";
import Footer from '../../components/Footer/Footer.js';
import Titre from "../../components/Titre/Titre.js";

const Profil = () => {
     return(
        <div className="page">
            
            <Navbar />
            <div className="titre_profil">
                <div className="titre_profil_haut">
                    <Titre texte={"Je me présente,"}/>
                </div>
                <div className="titre_profil_bas">
                    <Titre texte={"Arnaud MAILLET"}/> 
                </div> 
            </div>
            <div className="container_profil">
                <h2 className="titre_presentation"></h2>
                <div className="section1">
                    <TxtPresentation />
                    <ImgProfil image= {Img}/> 
                </div>
                <h2 className="titre_coord"></h2>
                <div className="section_coord">
                    <Coord
                        nomPrenom="Alain LeBoss"
                        age="145"
                        natio="Belge"
                        tel="0123456789"
                        langage="Indien, chinois"
                        adresse="15 rue des Fûts"
                        pays="Australie"
                    />
                    <div className="bgQuestion"></div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

const TxtPresentation = () => {
    return (
        <div className="presentation">
            <div className="presentation_txt">
                <p>Je m'appelle Alain LeBoss, je suis né le 22/11/1914 et j'ai fait un BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et Applications Métiers) au lycée Saint Rémi à Amiens (80) pendant la promotion 1928-1929.</p>
                <p>Intéressé par la conception de logiciels et sites internets, j'aimerai me spécialiser et augmenter mes connaissances de codages dans ces différents domaines.</p>
            </div>
            <button type="button" className="btn btn-outline-warning">
                <p className="btn_txt">Voir mon CV</p>
                <RightArrow style={{width: "50px"}}/>
            </button>  
        </div>
    )
}


const ImgProfil = ({image}) => {
    return (
        <div className="imgProfil">
            <div>
                <img src={image} alt=""></img>
            </div>
        </div>
    )
}


const Coord = (props) =>{
    return(
        <div className="coord">
            <div className="nom">
                <p>Nom</p>
                <div>: {props.nomPrenom}</div>
            </div>
            <div className="age">
                <p>Age</p>
                <div>: {props.age} ans</div>
            </div>
            <div className="nationalite">
                <p>Nationalité</p>
                <div>: {props.natio}</div>
            </div>
            <div className="tel">
                <p>Télephone</p>
                <div>: {props.tel}</div>
            </div>
            <div className="langage">
                <p>Langage</p>
                <div>: {props.langage}</div>
            </div>
            <div className="adresse">
                <p>Adresse</p>
                <div>: {props.adresse}</div>
            </div>
            <div className="pays">
                <p>Pays</p>
                <div>: {props.pays}</div>
            </div>
        </div>
    )
}


export default Profil;