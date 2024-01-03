import React, { useState } from 'react'

import data from '../DB/Data'
import Card from './Card'
import Button from './Button'
function Filter() {
    const [deta,setDeta]=useState(data)
    const manuitems=[... new Set(deta.map((X)=>X.color))]
    const fiterItems=(cet)=>{
        const newitems= deta.filter((x)=> x.color===cet)
        setDeta(newitems)
    }
  return (
    <div>
      <h1>food App</h1>
      <Button 
      manuitems={manuitems}
      filter={fiterItems}
      />

      <Card item={deta}/>
    </div>
  )
}

export default Filter
