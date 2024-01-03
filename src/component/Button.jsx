import React from 'react'

import data from '../DB/Data'
import style from './button.module.css'
function Button({company ,filterColor ,setTodo}){
  return ( 
    <div >
      <div className={style.btncls}>
        <div className='mt-3 pb-2'>
          <h3> Recommened</h3>
        </div>
        {company &&
          company.map((x)=>{
            return <button className={style.btn}
            onClick={()=>filterColor(x)}
            
            > {x}</button>
              
            
          })
        }
        <button className={style.btn} 
        onClick={()=>setTodo(data)}
        
        > All</button>
      </div>
    </div>
  )
}

export default Button
