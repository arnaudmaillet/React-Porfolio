import React from 'react'
import Style from './ResSocial.module.scss'

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

export default ResSocial

