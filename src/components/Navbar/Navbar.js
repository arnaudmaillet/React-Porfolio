import React, { useState } from "react"
import { CSSTransition } from 'react-transition-group'
import { NavLink } from 'react-router-dom';
import './Navbar.scss'
import './Navbar.css'

// import { ReactComponent as DarkMod} from '../../assets/svg/adjust-solid.svg'
import { ReactComponent as Home} from '../../assets/svg/home-solid.svg'
import { ReactComponent as Profil} from '../../assets/svg/user-circle-regular.svg'
import { ReactComponent as Skill} from '../../assets/svg/graduation-cap-solid.svg'
import { ReactComponent as Work} from '../../assets/svg/laptop-code-solid.svg'
import { ReactComponent as Other} from '../../assets/svg/bitcoin-brands.svg'
import { ReactComponent as LeftArrow} from '../../assets/svg/chevron-left-solid.svg'
import { ReactComponent as RightArrow} from '../../assets/svg/long-arrow-alt-right-solid.svg'
import { ReactComponent as Facebook} from '../../assets/svg/facebook-square-brands.svg'
import { ReactComponent as Twitter} from '../../assets/svg/twitter-square-brands.svg'
import { ReactComponent as Linkedin} from '../../assets/svg/linkedin-brands.svg'
import { ReactComponent as Github} from '../../assets/svg/github-square-brands.svg'



const Navbar = () => {

     return(
        <div className="navbar">
            <ul className="navbar_nav">
                <div style={{color: "white"}}></div>
                <NavItems content="Menu">
                    <DropdownMenu></DropdownMenu>
                </NavItems>
                <ResSocial route="https://www.facebook.com/" classe="facebook">{<Facebook/>}</ResSocial>
                <ResSocial route="https://twitter.com/" classe="twitter">{<Twitter/>}</ResSocial>
                <ResSocial route="https://fr.linkedin.com/" classe="linkedin">{<Linkedin/>}</ResSocial>
                <ResSocial route="https://github.com/arnaudmaillet" classe="github">{<Github/>}</ResSocial>
            </ul>
        </div>
    );
};

const ResSocial = (props) =>{
    return(
        <a href={props.route} target="_blank" rel="noreferrer" className={props.classe}>
            {props.children}
        </a>
    )
}

const NavItems = (props) =>{
    const [open, setOpen] = useState(false);

    console.log(open);

    return(
        <div className="nav_item">    
            <li className="item_content" onClick={() => setOpen(!open)}>
                {props.content}
            </li>
            {open && props.children}
        </div>
    )
}

const DropdownMenu = () =>{

    const [activeMenu, setActiveMenu] =  useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight + 30;
        setMenuHeight(height);
      }

    const DropdownItem = (props) => {
        return(
            <div className="menu_item" onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon_left">{props.leftIcon}</span>
                {props.children}
                <span className="right">{props.rightIcon}</span>
            </div>
        )
    }
    return(
        <div className="dropdown" style={{ height: menuHeight }}>
            <CSSTransition    
                in={activeMenu === 'main'} 
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
                >
                <div className="menu">
                    <NavLink to="/" exact  style={{textDecoration: "none"}}>
                        <DropdownItem leftIcon={<Home/>}>
                            <div>Accueil</div>
                        </DropdownItem>
                    </NavLink>
                    <DropdownItem 
                        leftIcon={<Profil/>}
                        goToMenu="profil"
                        >
                        Mon Profil
                    </DropdownItem>
                    <DropdownItem 
                        leftIcon={<Skill/>}
                        goToMenu="formations"
                        >
                        Formations
                    </DropdownItem>                  
                    <DropdownItem 
                        leftIcon={<Work/>}
                        goToMenu="projets"
                        >
                        Projets
                    </DropdownItem>
                    <DropdownItem 
                        leftIcon={<Other/>}
                        goToMenu="Autre"
                        >
                        Autres
                    </DropdownItem>
                </div>
            </CSSTransition>


            <CSSTransition    
                in={activeMenu === 'profil'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
                >
                <div className="menu">
                    <DropdownItem 
                        leftIcon={<LeftArrow/>}
                        goToMenu="main"
                        >
                    </DropdownItem>
                    <NavLink to="/profil" exact  style={{textDecoration: "none"}}>
                        <DropdownItem 
                            leftIcon={<RightArrow/>}
                            goToMenu="profil"
                            >Profil
                        </DropdownItem>
                    </NavLink>
                    <DropdownItem 
                        leftIcon={<RightArrow/>}
                        >CV
                    </DropdownItem>
                    <DropdownItem 
                        leftIcon={<RightArrow/>}
                        >Parcours
                    </DropdownItem>
                </div>
            </CSSTransition>


            <CSSTransition    
                in={activeMenu === 'formations'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
                >
                <div className="menu">
                    <DropdownItem 
                        leftIcon={<LeftArrow/>}
                        goToMenu="main"
                        >
                    </DropdownItem>
                    <NavLink to="/formations" exact  style={{textDecoration: "none"}}>
                        <DropdownItem 
                            leftIcon={<RightArrow/>}
                            >Formations
                        </DropdownItem>
                    </NavLink>
                    <DropdownItem 
                        leftIcon={<RightArrow/>}
                        >Competences
                    </DropdownItem>
                    <DropdownItem 
                        leftIcon={<RightArrow/>}
                        >Stages
                    </DropdownItem>
                </div>
            </CSSTransition>


            <CSSTransition    
                in={activeMenu === 'projets'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
                >
                <div className="menu">
                    <DropdownItem 
                        leftIcon={<LeftArrow/>}
                        goToMenu="main"
                        >
                    </DropdownItem>
                    <NavLink to="/projets" exact  style={{textDecoration: "none"}}>
                        <DropdownItem 
                            leftIcon={<RightArrow/>}
                            >Projets
                        </DropdownItem>
                    </NavLink>
                    <DropdownItem 
                        leftIcon={<RightArrow/>}
                        >Veille
                    </DropdownItem>
                    <DropdownItem 
                        leftIcon={<RightArrow/>}
                        >TP
                    </DropdownItem>
                    <DropdownItem 
                        leftIcon={<RightArrow/>}
                        >TD
                    </DropdownItem>
                </div>
            </CSSTransition>


            <CSSTransition    
                in={activeMenu === 'Autre'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
                >
                <div className="menu">
                    <DropdownItem 
                        leftIcon={<LeftArrow/>}
                        goToMenu="main"
                        >
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Navbar;





