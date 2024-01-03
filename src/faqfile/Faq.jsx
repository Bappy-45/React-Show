import React, { useState } from 'react'

import style from './faq.module.css'
function Faq(props) {
    const {title,des}=props.faqs
    const[data ,setData]=useState(true)
  return (
    <div>
      <article className={style.faq}>
        <div>
            <h2>{title}</h2>
            <button onClick={()=>setData(!data)}> {data ?"-":"+"} </button>
        </div>
        {
            data && <p> {des}</p>
        }
      </article>
    </div>
  )
}

export default Faq
