import React from "react";
import Style from "./ResSociaux.module.scss"

const ResSociaux = () => {

     return(
        <div className={Style.reseau_sociaux}>
            <div>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <div><i className="fab fa-facebook-f"></i></div>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <div><i className="fab fa-twitter"></i></div>
                </a>
                <a href="https://fr.linkedin.com/" target="_blank" rel="noreferrer">
                    <div><i className="fab fa-linkedin"></i></div>
                </a>
                <a href="https://github.com/arnaudmaillet" target="_blank" rel="noreferrer">
                    <div><i className="fab fa-github"></i></div>
                </a>
            </div>
        </div>
    );
};

export default ResSociaux;