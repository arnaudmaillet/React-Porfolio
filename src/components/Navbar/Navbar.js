import React, { useState } from "react"
import { NavLink } from 'react-router-dom';
import Style from './Navbar.module.scss'
import { ReactComponent as DarkMod} from '../../assets/svg/adjust-solid.svg'
import { ReactComponent as Home} from '../../assets/svg/home-solid.svg'
import { ReactComponent as Profil} from '../../assets/svg/user-circle-regular.svg'
import { ReactComponent as Skill} from '../../assets/svg/graduation-cap-solid.svg'
import { ReactComponent as Work} from '../../assets/svg/laptop-code-solid.svg'
import { ReactComponent as Other} from '../../assets/svg/bitcoin-brands.svg'

const Navbar = () => {

     return(
        <div className={Style.navbar}>
            <ul className={Style.navbar_nav}>
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
        <div className={Style.nav_item}>    
            <li className={Style.item_content} onClick={() => setOpen(!open)}>
                {props.content}
            </li>
            {open && props.children}
        </div>
    )
}

const DropdownMenu = () =>{

    const DropdownItem = (props) => {
        return(
            <div className={Style.menu_item}>
                <span className={Style.icon_left}>{props.leftIcon}</span>
                {props.children}
                <span className={Style.right}>{props.rightIcon}</span>
            </div>
        )
    }
    return(
        <div className={Style.dropdown}>
            <NavLink to='/' exact style={{textDecoration: 'none'}}>
                <DropdownItem leftIcon={<Home/>}>
                    Accueil
                </DropdownItem>
            </NavLink>
            <NavLink to='/profil' exact style={{textDecoration: 'none'}}>
                <DropdownItem leftIcon={<Profil/>}>
                    Mon Profil
                </DropdownItem>
            </NavLink>
            <NavLink to='/formations' exact style={{textDecoration: 'none'}}>
                <DropdownItem leftIcon={<Skill/>}>
                    Formations
                </DropdownItem>
            </NavLink>
            <NavLink to='/projets' exact style={{textDecoration: 'none'}}>
                <DropdownItem leftIcon={<Work/>}>
                    Projets
                </DropdownItem>
            </NavLink>
            <NavLink to='/autres' exact style={{textDecoration: 'none'}}>
                <DropdownItem leftIcon={<Other/>}>
                    Autres
                </DropdownItem>
            </NavLink>
        </div>
    )
}

export default Navbar;