import React from 'react'

import data from '../../DB/Data'
import style from './color.module.css'
function Color({color ,filtColor ,setTodo}) {
  return (
    <div className={ style.maindiv}>
       <div >
     <h2>Color</h2>
      </div>
      <div>
      {color &&
          color.map((x)=>{
            return <div>
              <button onClick={()=>filtColor(x)} className={style.btn}>
                {x}
              </button>
            
            </div>
          })
        }
      </div>
      <button onClick={()=>setTodo(data)} className={style.btn}>
                All
              </button>
    </div>
  )
}

export default Color
