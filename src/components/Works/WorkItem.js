import { NavLink } from "react-router-dom"
import s from "./Works.module.scss"
import arrow from "../../img/arrow.png"

const WorkItem = ({pic, header,link,...props}) =>{
    console.log(link);
    return(
        <div className={s.workContainer__item}>
            <img src={pic} alt="" className={s.workContainer__pic}/>
            <p className={s.workContainer__header}>{header}</p>
            <NavLink className={s.link} to={link} target="_blank">
                <span className={s.demo}>Demo</span> 
                <img className={s.arrow} src={arrow} alt="" />
            </NavLink>
        </div>
    )
}

export default WorkItem