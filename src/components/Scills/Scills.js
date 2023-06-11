import { NavLink } from "react-router-dom"
import s from "./Scills.module.scss"
import htmlLogo from "../../img/htmlIcon.png"
import cssLogo from "../../img/cssIcon.png"
import scssLogo from "../../img/scssIcon.png"
import jsLogo from "../../img/jsIcon.png"
import reactLogo from "../../img/reactIcon.png"
import reduxLogo from "../../img/redux.jpeg"

const Scills = () =>{
    return(
        <div className={s.scills}>
            <h1 className={s.header}>My scills</h1>
            <div className={s.scills__container}>

                <div className={`${s.scills__partName} ${s.basic}`}>Basic</div>
                <div className={`${s.scills__partName} ${s.additional}`}>More</div>
                <div className={s.scills__mainPart}>
                    
                    <figure className={s.scills__item}>
                        <img className={s.scills__icon} src={htmlLogo} alt=""/>
                        <figcaption className={s.scills__caption}>HTML 5</figcaption>
                    </figure>
                    <figure className={s.scills__item}>
                        <img className={s.scills__icon} src={cssLogo} alt=""/>
                        <figcaption className={s.scills__caption}>CSS 3</figcaption>
                    </figure>
                    <figure className={s.scills__item}>
                        <img className={s.scills__icon} src={scssLogo} alt=""/>
                        <figcaption className={s.scills__caption}>SASS/SCSS</figcaption>
                    </figure>
                    <figure className={s.scills__item}>
                        <img className={s.scills__icon} src={jsLogo} alt=""/>
                        <figcaption className={s.scills__caption}>JS</figcaption>
                    </figure>
                    <figure className={s.scills__item}>
                        <img className={s.scills__icon} src={reactLogo} alt=""/>
                        <figcaption className={s.scills__caption}>React</figcaption>
                    </figure>
                    <figure className={s.scills__item}>
                        <img className={s.scills__icon} src={reduxLogo} alt=""/>
                        <figcaption className={s.scills__caption}>Redux</figcaption>
                    </figure>
                </div>
                <div className={s.scills__additional}>
                    <ul className={s.scills__list}>
                        {/* <li className={s.scills__listElem}>Git</li> */}
                        <li className={s.scills__listElem}>JQuery</li>
                        <li className={s.scills__listElem}>GitHub</li>
                        <li className={s.scills__listElem}>BEM</li>
                        <li className={s.scills__listElem}>OOP</li>
                        <li className={s.scills__listElem}>AJAX</li>
                        <li className={s.scills__listElem}>Axios</li>
                        <li className={s.scills__listElem}>Phyton</li>
                        <li className={s.scills__listElem}>VS Code</li>
                    </ul>
                </div>

           </div>

           <NavLink to ="/works" className={s.neonBtn}>
                    <span className={`${s.neonBtn__line} ${s.topLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.rightLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.bottomLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.leftLine}`}></span>
                    My works
            </NavLink>
        </div>
    )
}

export default Scills