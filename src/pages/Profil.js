import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import Footer from '../components/Footer/Footer.js'
import "./Profil.scss"

import { ReactComponent as IconeProfil} from '../assets/svg/user-circle-regular.svg'

const Profil = () => {
     return(
        <div className="page">
            <Navbar />
            <div className="container">
                <TitreProfil/>
            </div>
            <Footer/>
        </div>
    );
};

const TitreProfil = () =>{
    return(
        <div className="titre_container">
            <div className="titre">Mon Profil</div>
            <div className="icone"><IconeProfil/></div>
        </div>
    )
}

export default Profil;