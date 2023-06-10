import { NavLink } from "react-router-dom"
import s from "./Contacts.module.scss"
import mail from "../../img/mail.png"
import git from "../../img/gitHub.png"
import telega from "../../img/telega.png"
import vk from "../../img/vk.png"
import ContactItem from "./ContactItem"
// import "../../Portfolio.docx" 

const Contacts = () =>{
const data =[
            {
                icon:mail,
                header:"Email",
                info:"tkachevamasha35@yandex.ru",
                link:"mailto:tkachevamasha35@yandex.ru"
            },
            {
                icon:git,
                header:"GitHub",
                info:"M-ar-t",
                link:"https://github.com/M-ar-t"
            },
            {
                icon:telega,
                header:"Telegram",
                info:"@mar_t2110",
                link:"https://t.me/mar_t2110"
            },
            {
                icon:vk,
                header:"VK",
                info:"@mashatkach0va",
                link:"https://vk.com/mashatkach0va"
            },
        ]
    return(
        <div className={s.contacts}>
            <h1 className={s.header}>Contact me</h1>
            <div className={s.container}>
                {data.map((el,index)=><ContactItem key={index} 
                                                icon ={el.icon} 
                                                header={el.header}
                                                info ={el.info}
                                                link ={el.link}
                                                />)}

            </div>
            
           <NavLink  download="../../Portfolio.docx" className={s.neonBtn}>
                    <span className={`${s.neonBtn__line} ${s.topLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.rightLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.bottomLine}`}></span>
                    <span className={`${s.neonBtn__line} ${s.leftLine}`}></span>
                    Download resume
            </NavLink>
           
        </div>
    )
}

export default Contacts