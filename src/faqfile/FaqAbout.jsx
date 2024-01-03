import React, { useState } from 'react'

import style from './FaqAbout.module.css'
import data from './faqdata.json'
import Faq from './Faq'

import {Link, useNavigate} from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import Futter from '../futter/Futter'
import { VscAccount } from "react-icons/vsc";
function FaqAbout() {
    const[faq,setFaq]=useState(data)
    const goBack=useNavigate()
  return (
    <div>
      {/* nav */}
      <div className={style.maindiv}>
        
           <Link to="/">
           <img src={"https://t4.ftcdn.net/jpg/05/13/95/87/240_F_513958703_fBo5puLehqVBrkbXtBCJilssIfcax8GY.jpg"} className={style.label} alt="" />
           </Link>
           
        
        <div className={style.profilecomtainer}>
            <a href="" className={style.navicon}>
              <TiShoppingCart className={style.navicon} />
              </a>
              <Link to="/login" className={style.navicon}>
                <VscAccount className={style.navicon} />
                </Link>
        </div>
      </div>
      {/* nav */}
      <button  className={style.goBack} onClick={()=>{goBack('/')}}> ⬅️Go to Home</button>
      <main className={style.container}>
        <section className={style.faq}>
            <h1 className={style.h1} > Faq</h1>
            
                {faq.map((x)=><Faq faqs={x}/>)}
            
        </section>
      </main>
      <Futter/>
    </div>
  )
}

export default FaqAbout
