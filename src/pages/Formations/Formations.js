import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import "./Formations.scss"

import Titre from "../../components/Titre/Titre.js";
import Img from "../../assets/img/profil.jpg"
import Img2 from '../../assets/img/card2.jpg'

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
            <div className="formations_container">
                <div className="formations_container_titre">
                    <h1>Mes Formations Suivies</h1>
                    <p>Selectionnez une vignette pour visualiser le contenu</p>
                </div>
                <div className="container collFormations">
                    <CollFormations bg={Img2} img={Img} titre="Formation 1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam eveniet deleniti sunt explicabo doloribus nulla necessitatibus esse</CollFormations>
                    <CollFormations bg={Img2} img={Img} titre="Formation 2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam eveniet deleniti sunt explicabo doloribus nulla necessitatibus esse</CollFormations>
                    <CollFormations bg={Img2} img={Img} titre="Formation 3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam eveniet deleniti sunt explicabo doloribus nulla necessitatibus esse</CollFormations>
                    <CollFormations bg={Img2} img={Img} titre="Formation 4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam eveniet deleniti sunt explicabo doloribus nulla necessitatibus esse</CollFormations>
                    <CollFormations bg={Img2} img={Img} titre="Formation 5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam eveniet deleniti sunt explicabo doloribus nulla necessitatibus esse</CollFormations>
                    <CollFormations bg={Img2} img={Img} titre="Formation 6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam eveniet deleniti sunt explicabo doloribus nulla necessitatibus esse</CollFormations>
                    <CollFormations bg={Img2} img={Img} titre="Formation 7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam eveniet deleniti sunt explicabo doloribus nulla necessitatibus esse</CollFormations>
                    <CollFormations bg={Img2} img={Img} titre="Formation 8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam eveniet deleniti sunt explicabo doloribus nulla necessitatibus esse</CollFormations>
                </div>
            </div>
        </div>
    );
};

const CollFormations = (props) =>{
    return(
        <div className="container">
            <div className='banner-img'></div>
            <div className="collFormations_bg">
                <img src={props.bg} alt='banner image' className="img2"></img>
            </div>
            <img src={props.img} alt='profile image' className="img"></img>
            <h1 className="name">{props.titre}</h1>
            <p className="description">{props.children}</p>
        </div>
    )
}

export default Formations;