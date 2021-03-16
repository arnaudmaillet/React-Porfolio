import React, { useState } from "react"
import { CSSTransition } from 'react-transition-group'
// import { NavLink } from 'react-router-dom';
import './Navbar.scss'
import './Navbar.css'

import { ReactComponent as DarkMod} from '../../assets/svg/adjust-solid.svg'
import { ReactComponent as Home} from '../../assets/svg/home-solid.svg'
import { ReactComponent as Profil} from '../../assets/svg/user-circle-regular.svg'
import { ReactComponent as Skill} from '../../assets/svg/graduation-cap-solid.svg'
import { ReactComponent as Work} from '../../assets/svg/laptop-code-solid.svg'
import { ReactComponent as Other} from '../../assets/svg/bitcoin-brands.svg'
import { ReactComponent as LeftArrow} from '../../assets/svg/chevron-left-solid.svg'
import { ReactComponent as RightArrow} from '../../assets/svg/long-arrow-alt-right-solid.svg'

const Navbar = () => {

     return(
        <div className="navbar">
            <ul className="navbar_nav">
                <NavItems content="Menu">
                    <DropdownMenu></DropdownMenu>
                </NavItems>
                <NavItems content="Social"></NavItems>
                <NavItems content={<DarkMod/>}></NavItems>
            </ul>
        </div>
    );
};

const NavItems = (props) =>{

    const [open, setOpen] = useState(false);

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
                    <DropdownItem leftIcon={<Home/>}>
                        Accueil
                    </DropdownItem>
                    <DropdownItem 
                        leftIcon={<Profil/>}
                        goToMenu="accueil"
                        >
                        Mon Profil
                    </DropdownItem>
                    <DropdownItem leftIcon={<Skill/>}>
                        Formations
                    </DropdownItem>                  
                    <DropdownItem leftIcon={<Work/>}>
                        Projets
                    </DropdownItem>
                    <DropdownItem leftIcon={<Other/>}>
                        Autres
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition    
                in={activeMenu === 'accueil'} 
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
                    <DropdownItem 
                        leftIcon={<RightArrow/>}
                        >Profil
                    </DropdownItem>
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
        </div>
    )
}

export default Navbar;