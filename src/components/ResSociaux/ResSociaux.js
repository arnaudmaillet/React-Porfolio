import React from "react";
import Style from "./ResSociaux.module.scss";


const ResSociaux = () => {
     return(
        <div className={Style.reseau_sociaux}>
            <div>
                <ResSocial lien="https://www.facebook.com/" icone="fab fa-facebook-f">Facebook</ResSocial>
                <ResSocial lien="https://twitter.com/" icone="fab fa-twitter">Twitter</ResSocial>
                <ResSocial lien="https://fr.linkedin.com/" icone="fab fa-linkedin">Linkedin</ResSocial>
                <ResSocial lien="https://github.com/arnaudmaillet" icone="fab fa-github">GitHub</ResSocial>
            </div>
        </div>
    );
};

const ResSocial = (props) => {
    return (
        <div className={Style.icone}>
            <a href={props.lien} target="_blank" rel="noreferrer">
                <div>
                    <p>{props.children}</p>
                    <i className={props.icone}></i>
                </div>
            </a>
        </div>
    )
}

export default ResSociaux;