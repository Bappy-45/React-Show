import React from 'react'

import deta from '../DB/Data'
function Button({manuitems ,filter}) {
  return (
    <div className='d-flex'>
      {
        manuitems.map((x)=>{
            return(
                <div>
                    <button onClick={()=>filter(x)}>{x}</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default Button
