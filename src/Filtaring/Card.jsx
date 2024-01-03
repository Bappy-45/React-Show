import React from 'react'

function Card({item}) {
  return (
    <div >
      {
        item.map((x)=>{
            return(
                <div >
                    <img src={x.img} alt="" style={{width:"200px"}}/>
                </div>
            )
        })
      }
    </div>
  )
}

export default Card
