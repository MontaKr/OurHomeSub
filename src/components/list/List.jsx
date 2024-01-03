import React from 'react'
import { Wrap } from './ListStyles'
import data from "../../data/data.json"
import Product from './product/Product'

const List = () => {
  return (
    <Wrap>
      <div className="list__container">
        {
          data.map((val,idx)=>{
            return (
              <Product key={idx} details={val} index={idx}/>
            )
          })
        }
      </div> 
    </Wrap>
  )
}

export default List