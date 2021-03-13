import React from "react";
// import reactDom from "react-dom";
import Style from "./Card.module.scss"

const CardAccueil = (props) => {

    // const card = reactDom.findDOMNode(CardAccueil).getElementsByClassName('3d');

    // document.getElementsByClassName('body').onmousemove = function (t) {
    //     let vertical = window.innerWidth / 2 - t.pageX / 70,
    //     horizontal = window.innerHeight / 2 - t.pageY / 70;
    //     card.style.transform = "transform: rotateY(" + vertical + "deg) rotateX(" + horizontal + "deg)";
    // }

    

     return(
        <div className={Style._3d}>
            <div className={Style._3d_card} style={{background: `url(`+ props.background +`)`, backgroundSize: "cover", backgroundPosition: "center"}}>
                <h2>{props.children}</h2>
            </div>
        </div>
    );
};

export default CardAccueil;