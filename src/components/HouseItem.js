import React from 'react'

function HouseItem({ image, address, price }) {
  return (
    <div className="houseItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1> {address} </h1>
      <p> ${price} </p>
    </div>
  )
}

export default HouseItem
