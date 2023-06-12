import { NavLink } from "react-router-dom"
import s from "./Works.module.scss"
import cosmeticStore from "../../img/storeScrin.png"
import toursScrin from "../../img/toursScrin.png"
import housesScrin from "../../img/housesScrin.png"
import calculatorScrin from "../../img/calculatorScrin.png"
import modelingScrin from "../../img/modelingScrin.png"
import testingScrin from "../../img/TestScrin.png"
// import userListScrin from "../../img/userListScrin.png"
import WorkItem from "./WorkItem"
import { useState } from "react"

const Works = () =>{
    const dataArr =[
        {
        header:"Cosmetic store",
        pic: cosmeticStore,
        link:"https://m-ar-t.github.io/Cosmetic-STORE/",
        category: 3
        },
        {
        header:"Landing page - Tours",
        pic: toursScrin,
        link:"https://m-ar-t.github.io/Figma/",
        category: 1
        },
        {
        header:"Landing page - Houses",
        pic: housesScrin,
        link:"https://m-ar-t.github.io/figma-featured-house/",
        category: 1
        },
        {
        header:"Calculator",
        pic: calculatorScrin,
        link:"https://m-ar-t.github.io/calculator/",
        category: 3
        },
        {
        header:"Simulation modeling",
        pic: modelingScrin,
        link:"https://m-ar-t.github.io/Modeling/index.html",
        category: 2
        },
        {
        header:"Testing in psychology",
        pic: testingScrin,
        link:"https://m-ar-t.github.io/Questionnaire/",
        category: 3
        },
        // {
        // header:"User list",
        // pic: userListScrin,
        // link:"/",
        // category: 3
        // }
    ]
    const [data ,setData]=useState(dataArr)
    const [isActive ,setActive]=useState(0)

    
    const filterProj=(e,num=0)=>{
        setActive(num)
        data.map(el => {
            switch (num) {
                case 1:
                    return setData(dataArr.filter(el => el.category===1))
                case 2:
                    return setData(dataArr.filter(el => el.category===2))
                case 3:
                    return setData(dataArr.filter(el => el.category===3))
                default:
                    return setData(dataArr);                   
            }
        })
    }
    return(
        <div className={s.works}>
            <h1 className={s.header}>My works</h1>
            <div className={s.filterBtns}>


                <button className={isActive===0 ? `${s.filterBtns__item} ${s.filterBtns__item_active}`: 
                s.filterBtns__item} onClick={(e)=>filterProj(e)}>All</button>
                <button className={isActive===1 ? `${s.filterBtns__item} ${s.filterBtns__item_active}`: s.filterBtns__item} 
                onClick={(e)=>filterProj(e,1)}>Landing</button>
                <button className={isActive===3 ? `${s.filterBtns__item} ${s.filterBtns__item_active}`: s.filterBtns__item}
                onClick={(e)=>filterProj(e,3)}>ReactApp</button>
                <button className={isActive===2 ? `${s.filterBtns__item} ${s.filterBtns__item_active}`: s.filterBtns__item}
                 onClick={(e)=>filterProj(e,2)}>Native JS</button>
            </div>
            <div className={s.workContainer}>
                {data.map((el,id)=> 
                <WorkItem key={id} pic ={el.pic} header ={el.header} link ={el.link}/>)}        
            </div>
             <NavLink to ="/contacts" className={s.neonBtn}>
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