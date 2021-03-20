import React from 'react'
import './Titre.scss'

const Titre = ({texte}) => {
    return (
        <div>
            <div className="titre_container">
            <div className="titre">
                {texte}
                <span>{texte}</span>
            </div>
        </div>
        </div>
    )
}

export default Titre
