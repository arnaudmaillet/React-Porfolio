import React from "react";
import { NavLink } from 'react-router-dom';
import Style from './Navbar.module.scss';

const Navbar = () => {
     return(
        <div className={Style.navbar}>
            <ul className={Style.navbar_nav}>
                <NavItems lien="/">Accueil</NavItems>
                <NavItems lien="/profil">Profil</NavItems>
                <NavItems lien="/formations">Formations</NavItems>
                <NavItems lien="/projets">Projets</NavItems>
            </ul>
        </div>
    );
};

const NavItems = (props) =>{
    return(
        <div className={Style.nav_item}>    
            <li className={Style.item}>
                <NavLink to={props.lien} exact className="hover text-white" activeClassName={Style.navActive}>
                    {props.children}
                </NavLink>
            </li>
        </div>
    )
}

export default Navbar;