import React from 'react'
import './item.css'

const item = (props) => {
  return (
      <div className='item'>
          <img src={props.image} alt="" />
          <p>{props.name}</p>
          <div className='item-price-new'>
              {props.new_price}
          </div>
      </div>
  )
}

export default item