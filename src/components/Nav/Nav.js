import s from "./Nav.module.scss"
import bear from "../../img/bear.png"
import { NavLink } from 'react-router-dom';
import closeBurger from "../../img/closeBurger.png"
import { useState } from "react";

const Nav = () =>{
    const[toggle, setToggle] =useState(false)

    const burgerMenuShow =() =>{
        setToggle(!toggle)
    }
    return(
        <div className={s.nav}>
           
           <div className={s.nav__imgBlok}> <img className={s.nav__img} src = {bear} alt="logo"/></div>
           <div className={s.burger} onClick={burgerMenuShow}>
                <span></span>
            </div>

            <div className={toggle? [s.closeBtn, s.activeBtn].join(" "):s.closeBtn}
            onClick={burgerMenuShow}>
                <img className={s.closeBtn__pic} src={closeBurger} alt=""/>
                </div>
            <ul  className={toggle? [s.nav__list, s.active].join(" "):s.nav__list}>
                <NavLink  to="/"  onClick={burgerMenuShow} className={({ isActive }) => isActive ? s.nav__item_active : s.nav__item}>Home</NavLink>
                <NavLink to="/about" onClick={burgerMenuShow} className={({ isActive }) => isActive ? s.nav__item_active : s.nav__item}>About</NavLink>
                <NavLink to="/skills" onClick={burgerMenuShow} className={({ isActive }) => isActive ? s.nav__item_active : s.nav__item}>Skills</NavLink>
                <NavLink to="/works" onClick={burgerMenuShow} className={({ isActive }) => isActive ? s.nav__item_active : s.nav__item}>Works</NavLink>
                <NavLink to="/contacts" onClick={burgerMenuShow} className={({ isActive }) => isActive ? s.nav__item_active : s.nav__item}>Contacts</NavLink>
            </ul>
        </div>
    )
}

export default Nav