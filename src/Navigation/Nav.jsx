import React,{useState } from 'react'

import { TiShoppingCart } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";

import { Link } from 'react-router-dom';

import data from '../DB/Data';
import style from './nave.module.css'
import Product from '../products/Product';
import Button from '../component/Button';
import Color from '../sidber/color/Color';
import Futter from '../futter/Futter';



function Naver() {
  // button fild
 
  const [todo,setTodo]=useState(data)
  const company=[ ...new Set(todo.map((x)=>x.company))]
  const filterColor=(col)=>{
        const newvlu=todo.filter((x)=>x.company===col)
        setTodo(newvlu)
  }
  //color fild
  const color=[ ...new Set(todo.map((x)=>x.color))]
  const filtColor=(col)=>{
        const newvlu=todo.filter((x)=>x.color===col)
        setTodo(newvlu)
  }

  // input fildn
 
  const handelchange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const newvlu = data.filter((x) => x.title.toLowerCase().includes(inputValue));
    setTodo(newvlu);
  }
  
  return (
    <div >

      <div className={style.maindiv} >
         <label >
         <Link to="/">
           <img src={"https://t4.ftcdn.net/jpg/05/13/95/87/240_F_513958703_fBo5puLehqVBrkbXtBCJilssIfcax8GY.jpg"} className={style.label} alt="" />
           </Link>
           </label>
        <div className={style.container}>
         
                <input type="text" placeholder='Search your product' 
                onChange={handelchange}
                
                className={style.setchinput} />
        </div>
        <div className={style.profilecomtainer}>
        <Link  className={style.navicon}>
                <TiShoppingCart className={style.navicon} />
                </Link>
                <Link to="/login" className={style.navicon}>
                <VscAccount className={style.navicon} />
                </Link>
        </div>
      </div>
      <Button company={company} filterColor={filterColor} 
      setTodo={setTodo}
      
      />
      <Color color={color} filtColor={filtColor} setTodo={setTodo}/>
      <Product todo={todo}/>
      
     <Futter/>
    </div>
    
  )
}

export default Naver