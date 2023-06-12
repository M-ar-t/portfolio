import s from "./Nav.module.scss"
import bear from "../../img/bear.png"
import { NavLink } from 'react-router-dom';
const Nav = () =>{
    return(
        <div className={s.nav}>
           
           <div className={s.nav__imgBlok}> <img className={s.nav__img} src = {bear} alt="logo"/></div>
           <div className={s.burger}>
                <span></span>
            </div>
            <ul className={s.nav__list}>
                <NavLink to="/"  className={({ isActive }) => isActive ? s.nav__item_active : s.nav__item}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? s.nav__item_active : s.nav__item}>About</NavLink>
                <NavLink to="/scills" className={({ isActive }) => isActive ? s.nav__item_active : s.nav__item}>Scills</NavLink>
                <NavLink to="/works" className={({ isActive }) => isActive ? s.nav__item_active : s.nav__item}>Works</NavLink>
                <NavLink to="/contacts" className={({ isActive }) => isActive ? s.nav__item_active : s.nav__item}>Contacts</NavLink>
            </ul>
        </div>
    )
}

export default Nav