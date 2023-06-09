import { NavLink } from "react-router-dom"
import s from "./Works.module.scss"


const Works = () =>{
    return(
        <div className={s.works}>
             <NavLink to ="/works" className={s.neonBtn}>
                    <span className={`${s.neonBtn__line} ${s.topLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.rightLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.bottomLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.leftLine}`}></span>
                    Contact me
            </NavLink>
        </div>
    )
}

export default Works