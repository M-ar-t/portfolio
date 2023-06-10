import { NavLink } from "react-router-dom"
import s from "./Contacts.module.scss"
import arrow from "../../img/arrow.png"

const ContactItem = ({icon, header, info, link}) =>{
    
    return(
            <div className={s.contactItem}>
                <img className={s.contactItem_socialPic} src={icon} alt=""/>
                <p className={s.contactItem__header}>{header}</p>
                <p className={s.contactItem__info}>{info}</p>
                <NavLink to={link} target="_blank" className={s.contactItem__btn}>Write me
                    <img className={s.contactItem__arrow} src={arrow} alt=""/>
                </NavLink>
            </div>
    )
}

export default ContactItem