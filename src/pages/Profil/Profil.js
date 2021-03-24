import React from "react";
import "./Profil.scss"

import Img from "../../assets/img/profil.jpg"
import { ReactComponent as RightArrow} from '../../assets/svg/long-arrow-alt-right-solid.svg'

import Navbar from "../../components/Navbar/Navbar.js";
import Footer from '../../components/Footer/Footer.js';
import Titre from "../../components/Titre/Titre.js";

const Profil = () => {
     return(
        <div className="profil">
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
                <div className="titre_presentation2">
                    <h1>Designer, Developpeur Front-End / Back-End </h1>
                    <p>Developpeur qui code par passion depuis 1970</p>
                </div>
                <div className="section1">
                    <ImgProfil image= {Img}/> 
                    <TxtPresentation />
                </div>
                <h2 className="titre_info"></h2>
                <div className="section_info">
                    <Info
                        nomPrenom="Mr A"
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
            <div className="container_timeline">
                <h2 className="titre_parcours"></h2>
                <div className="section_pacours">
                    <TimeLine date="2014" titre="AAA"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, at modi eaque quam earum dolorum sint aspernatur. Et deserunt libero earum. Omnis tempora corporis animi accusamus, enim voluptate dolores error.</TimeLine>
                    <TimeLine date="2015" titre="AAA"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, at modi eaque quam earum dolorum sint aspernatur. Et deserunt libero earum. Omnis tempora corporis animi accusamus, enim voluptate dolores error.</TimeLine>
                    <TimeLine date="2016" titre="AAA"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, at modi eaque quam earum dolorum sint aspernatur. Et deserunt libero earum. Omnis tempora corporis animi accusamus, enim voluptate dolores error.</TimeLine>
                    <TimeLine date="2017" titre="AAA"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, at modi eaque quam earum dolorum sint aspernatur. Et deserunt libero earum. Omnis tempora corporis animi accusamus, enim voluptate dolores error.</TimeLine>
                    <TimeLine date="2018" titre="AAA"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, at modi eaque quam earum dolorum sint aspernatur. Et deserunt libero earum. Omnis tempora corporis animi accusamus, enim voluptate dolores error.</TimeLine>
                    <TimeLine date="2019" titre="AAA"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, at modi eaque quam earum dolorum sint aspernatur. Et deserunt libero earum. Omnis tempora corporis animi accusamus, enim voluptate dolores error.</TimeLine>
                    <TimeLine date="2020" titre="AAA"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, at modi eaque quam earum dolorum sint aspernatur. Et deserunt libero earum. Omnis tempora corporis animi accusamus, enim voluptate dolores error.</TimeLine>
                    <TimeLine date="2021" titre="AAA"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, at modi eaque quam earum dolorum sint aspernatur. Et deserunt libero earum. Omnis tempora corporis animi accusamus, enim voluptate dolores error.</TimeLine>
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
                <p>Je m'appelle MR A, je suis né le 22/11/1914 et j'ai fait un BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et Applications Métiers) au lycée Saint Rémi à Amiens (80) pendant la promotion 1928-1929.</p>
                <p>Intéressé par la conception de logiciels et sites internets, j'aimerai me spécialiser et augmenter mes connaissances de codages dans ces différents domaines.</p>
            </div>
            <button type="button" className="btn btn-outline-dark">
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


const Info = (props) =>{
    return(
        <div className="info">
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


const TimeLine = (props) => {
    return(
        <div className="timeline">
            <div className="timeline_item">
                <p className="timeline_item_date">{props.date}</p>
                <div className="timeline_item_content">
                    <h2 className="timeline_item_content_titre">{props.titre}</h2>
                    <div>{props.children}</div>
                </div>
            </div>
        </div>
    )
}

export default Profil;