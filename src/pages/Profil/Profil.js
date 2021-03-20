import React from "react";
import "./Profil.scss"

import Img from "../../assets/img/profil.jpg"

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
                <div className="section1">
                    <TxtPresentation />
                    <ImgProfil image= {Img}/> 
                </div>
                <Detail
                    nomPrenom="Jean Charles"
                    age="45"
                    natio="Belge"
                    tel="0123456789"
                    langage="Indien, chinois"
                    adresse="15 rue des ananas"
                    pays="Australie"
                />
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


const ImgProfil = ({image}) => {
    return (
        <div className="imgProfil">
            <div>
                <img src={image} alt=""></img>
            </div>
        </div>
    )
}


const Detail = (props) =>{
    return(
        <div className="detail">
            <div className="nom">
                <p>Nom</p>
                <p>: {props.nomPrenom}</p>
            </div>
            <div className="age">
                <p>Age</p>
                <p>: {props.age}</p>
            </div>
            <div className="nationalite">
                <p>Nationalité</p>
                <p>: {props.natio}</p>
            </div>
            <div className="tel">
                <p>Télephone</p>
                <p>: {props.tel}</p>
            </div>
            <div className="langage">
                <p>Langage</p>
                <p>: {props.langage}</p>
            </div>
            <div className="adresse">
                <p>Adresse</p>
                <p>: {props.adresse}</p>
            </div>
            <div className="pays">
                <p>Pays</p>
                <p>: {props.pays}</p>
            </div>
        </div>
    )
}


export default Profil;