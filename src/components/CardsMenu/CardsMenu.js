import React from "react";
import CardAccueil from "./Card/Card.js";
import Style from "./CardsMenu.module.scss";
import { NavLink } from 'react-router-dom';

import img1 from "../../assets/img/card1.jpg";
import img2 from "../../assets/img/card2.jpg";
import img3 from "../../assets/img/card3.jpg";
import img4 from "../../assets/img/card4.jpg";

const CardsMenu = () => {
     return(
        <div className={Style.menu}>
            <div className={Style.cards}>
                <NavLink to="/profil" exact>
                    <CardAccueil background={img1}>Profil & <br/> Compétences</CardAccueil>
                </NavLink>
                <NavLink to="/projets" exact>
                    <CardAccueil background={img2}>Projets & <br/> Veilles</CardAccueil>
                </NavLink>
                <NavLink to="/stages">
                    <CardAccueil background={img3}>Stages & <br/> Formations</CardAccueil>
                </NavLink>
                <NavLink to="/fiche">
                    <CardAccueil background={img4}>Autre</CardAccueil>
                </NavLink>
            </div>
        </div>        
    );
};

export default CardsMenu;