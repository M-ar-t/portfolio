import { NavLink } from "react-router-dom"
import s from "./Home.module.scss"
import ava from "../../img/ava_cut.png"
import { useEffect, useState } from "react"

const Home = () =>{
    
    const [subtitle, setSubtitle] = useState("");

    useEffect(() => {
        const timeoutIds = [];
        "Frontend developer".split('').forEach((text,i)=>{
            const timeoutId = setTimeout(() => {
                setSubtitle(prev => {
                    return [...prev, text]});
            }, 100 * i);
            timeoutIds.push(timeoutId);
        });

        return () => {
            timeoutIds.forEach((id) => clearTimeout(id));
        }
    }, []);


    return(
        <div className={s.home}>
            <div className={s.home__info}>
                <h1 className={s.home__h1} >Hi, I'm <span>Maria Tkacheva</span></h1>
                <h2 className={s.home__h2} >{subtitle}</h2>
                <p className={s.home__text}>
                I like to learn new things and improve my skills
                 in the field of frontend development. 
                I'm in search of a team for joint development and
                 motivation for the best result!</p>
                <NavLink to ="/about" className={s.neonBtn}>
                    <span className={`${s.neonBtn__line} ${s.topLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.rightLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.bottomLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.leftLine}`}></span>
                    More about me
                </NavLink>
            </div>
            <div className={s.home__picBlok}>
                <div className={s.home__backGradient}></div>
                <img className={s.home__pic} src={ava} alt=""/>
            </div>
           
        </div>
    )
}

export default Home