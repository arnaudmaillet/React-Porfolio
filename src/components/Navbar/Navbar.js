import React from "react";
import { NavLink } from 'react-router-dom';
import Style from './Navbar.module.scss';

const Navbar = () => {
     return(
        <div className={Style.nav}>
            <ul className={Style.ul}>
                <NavLink to="/" exact className="hover text-white" activeClassName={Style.navActive}>
                    <li className={Style.li}>Accueil</li>
                </NavLink>
                <NavLink to="/profil" exact className="hover text-white" activeClassName={Style.navActive}>
                    <li className={Style.li}>Profil</li>
                </NavLink>
                <NavLink to="/projets" exact className="hover text-white" activeClassName={Style.navActive}>
                    <li className={Style.li}>Projets</li>
                </NavLink>
                <NavLink to="/stages" exact className="hover text-white" activeClassName={Style.navActive}>
                    <li className={Style.li}>Stages</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;