import React  from 'react'


import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import style from './loging.module.css'

import {VscAccount} from "react-icons/vsc";
import { TiShoppingCart } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';
import Futter from '../futter/Futter';
function Login() {
    const goBack=useNavigate()
  return (
    <div>
        {/*  */}
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
        {/*  */}
        <button onClick={()=>goBack("/")} className={style.goBack}> ⬅️Go to Home</button>
      <div className='container'>
        <div className={style.main}>
          <div className={style.imgdiv}>
            <div style={{textAlign:"center"}}>
            <img src="https://img.freepik.com/premium-vector/login-concept-illustration_65141-421.jpg" alt=""  className='img-fluid'/>
          </div>
        </div>

        <div className={style.input}>
            <VscAccount className={style.icon} />
        <div style={{marginLeft:"40px", marginTop:"10px"}}>
            <form>
              <div className={style.inputfild}><input type="text" placeholder='Email Address' /></div> 
              <div className={style.inputfild}><input type="password" placeholder='Password'/></div>
              <button type="submit" className={style.btn}>LOGIN </button>
            </form>
        </div>

        <div className={style.signin}>
           <div className={style.border}></div>
           <div className={style.WITH}>SIGN IN WITH</div>
           <div className={style.border}></div>
        </div>
        <div className={style.loginIcons}>
            <div className={style.logins} ><FaGoogle /></div>
            <div  className={style.logins} ><FaGithub  /></div>
        </div>
            <p style={{textAlign:"center"}}>Lorem, ipsum dolor.</p>
        </div>
        </div>
      </div>
      <Futter/>
    </div>
  )
}

export default Login