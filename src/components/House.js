import React from 'react'
import { HouseList } from '../helpers/HouseList'
import HouseItem from './HouseItem';
import '../styles/House.css'

function House() {
  return (
    <div className="housing">
      <h1 className="housingTitle">Housing</h1>
      <div className="housingList">
        {HouseList.map((houseItem, key) => {
          return (
          <HouseItem
            key={key}
            image={houseItem.image}
            address={houseItem.address}
            price={houseItem.price} 
          /> )
        })}
      </div>
    </div>
  )
}

export default House
