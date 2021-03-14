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
        <div className={Style.cards}>
            <div>
                <NavLink to="/profil" exact>
                    <CardAccueil background={img1}>
                        <div className={Style.menu}>
                            <div className={Style.texte}>Mon profil</div>
                            <div className={Style.sous_menu}>
                                <div>Profil</div>
                                <div>CV</div>
                                <div>Parcours</div>
                            </div>
                        </div>
                    </CardAccueil>
                </NavLink>
                <NavLink to="/stages">
                    <CardAccueil background={img3}>
                        <div className={Style.menu}>
                            <div className={Style.texte}>Formation & <br/> Compétences</div>
                            <div className={Style.sous_menu}>
                                <div>Formations</div>
                                <div>Competences</div>
                                <div>Stages</div>
                            </div>
                        </div>
                    </CardAccueil>
                </NavLink>
                <NavLink to="/projets" exact>
                    <CardAccueil background={img2}>
                        <div className={Style.menu}>
                            <div className={Style.texte}>Projets & <br/> Veilles</div>
                            <div className={Style.sous_menu}>
                                <div>Projets</div>
                                <div>Veilles</div>
                                <div>TDs & TPs</div>
                            </div>
                        </div>
                    </CardAccueil>
                </NavLink>
                <NavLink to="/fiche">
                    <CardAccueil background={img4}>
                        <div className={Style.menu}>
                            <div className={Style.texte}>Autre</div>
                            <div className={Style.sous_menu}>
                                <div>Le BTS SIO</div>
                                <div>Materiel info</div>
                            </div>
                        </div>
                    </CardAccueil>
                </NavLink>
            </div>
        </div>        
    );
};

export default CardsMenu;