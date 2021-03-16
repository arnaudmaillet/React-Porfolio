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
                <CardAccueil background={img1}>
                    <div className={Style.menu}>
                        <div className={Style.texte}>Mon profil</div>
                        <div className={Style.sous_menu}>
                            <NavLink to="/profil" exact style={{textDecoration: 'none'}}>
                                <div>Profil</div>
                            </NavLink>
                                <div>CV</div>
                                <div>Parcours</div>

                        </div>
                    </div>
                </CardAccueil>

                <CardAccueil background={img3}>
                    <div className={Style.menu}>
                        <div className={Style.texte}>Formations & <br/> Compétences</div>
                        <div className={Style.sous_menu}>
                            <NavLink to="/formations" style={{textDecoration: 'none'}}>
                                <div>Formations</div>
                            </NavLink>
                                <div>Competences</div>
                                <div>Stages</div>
                        </div>                           
                    </div>
                </CardAccueil>


                <CardAccueil background={img2}>
                    <div className={Style.menu}>
                        <div className={Style.texte}>Projets & <br/> Veilles</div>
                        <div className={Style.sous_menu}>
                            <NavLink to="/projets" exact style={{textDecoration: 'none'}}>
                                <div>Projets</div>
                            </NavLink>
                                <div>Veilles</div>
                                <div>TDs & TPs</div>

                        </div>
                    </div>
                </CardAccueil>

                <CardAccueil background={img4}>
                    <div className={Style.menu}>
                        <div className={Style.texte}>Autre</div>
                        <div className={Style.sous_menu}>
                            <NavLink to="/fiche" exact style={{textDecoration: 'none'}}>
                                <div>Le BTS SIO</div>
                            </NavLink>
                                <div>Materiel info</div>
                        </div>
                    </div>
                </CardAccueil>
            </div>
        </div>        
    );
};

export default CardsMenu;