import { NavLink } from "react-router-dom"
import s from "./AboutMe.module.scss"
import age from "../../img/age.png"
import robot from "../../img/robot.png"
import nout from "../../img/noutPic.png"
import book from "../../img/bookPic.png"
import portfolio from "../../img/portfolioPic.png"
import { useEffect } from "react"

const AboutMe = () =>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return(
        <div className={s.aboutMe}>
            <h1 className={s.header}>About me</h1>
          
            <div className={s.aboutMe__box}>
                <ul className={s.aboutMe__list}>
                    <li className={s.aboutMe__item}>
                        <img className={s.aboutMe__itemImg} src={age} alt="" />
                        <p>I'm 21 years old</p>. 
                    </li>
                    <li className={s.aboutMe__item}>
                        <img className={s.aboutMe__itemImg} src={robot} alt="" />
                        <p>This year I received a higher education
                         at the Shukhov State Technical University in my
                          hometown of Belgorod in the direction of mechatronics
                           and robotics.</p>
                    </li>
                    <li className={s.aboutMe__item}>
                        <img className={s.aboutMe__itemImg} src={nout} alt="" />
                        <p>In the second year of study, I first got acquainted with the
                         development of websites. It seemed very exciting.</p>
                    </li>
                    <li className={s.aboutMe__item}>
                        <img className={s.aboutMe__itemImg} src={book} alt="" />
                        <p>I have been developing independently in this direction
                         for two years, reading technical literature and taking courses on this topic. </p>
                    </li>
                    <li className={s.aboutMe__item}>
                        <img className={s.aboutMe__itemImg} src={portfolio} alt="" />    
                        <p>In parallel with this, I have developed
                         several web projects that are presented in my portfolio.</p>
                    </li>
                </ul>
            </div>
            <NavLink to ="/scills" className={s.neonBtn}>
                    <span className={`${s.neonBtn__line} ${s.topLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.rightLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.bottomLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.leftLine}`}></span>
                    My scills
            </NavLink>
           
        </div>
    )
}

export default AboutMe