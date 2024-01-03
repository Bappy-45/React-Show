import React from 'react'

import { FaStar } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";
import style from './product.module.css'
function Product({todo}) {
  return (
    <div className='container'>
      
       <section className={style.container}>
         {todo&&
        todo.map((x)=>{
          const{img,title,star,reviews,prevPrice,newPrice}=x
          return(
            <div>
              <section className={style.card}>
            <img src={img} alt=""  className={style.cardImg}/>

            <div className={style.cardDiteles}>
                <h3>{title}</h3>
                <section className={style.cardreview}> 
                {star}
                <span className={style.totoalReview}>{reviews}</span>
                </section>
                    <section className={style.cardPrice}> 
                        <div className={style.price}>
                            <del>{prevPrice}</del> {newPrice}
                        </div>
                        <div className={style.bag}>
                        <BsFillBagHeartFill className={style.bagicon} />
                        </div>
                    </section>
            </div>
        </section>
            </div>
          )
        })
      }

      </section> 
     
     
    </div>
  )
}

export default Product
