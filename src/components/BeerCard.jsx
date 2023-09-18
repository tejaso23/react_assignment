import React from 'react'

const BeerCard = ({id,img,name,firstbreewe,volume,unit}) => {
  return (
    <div className='carddetails'>
      <img src = {img} alt= "not defined"></img>
      <ul><ol>{id}</ol>
      <ol>{name}</ol>
      <ol>{firstbreewe}</ol>
      <ol>{volume} {unit}</ol>
      </ul>
    </div>
  )
}

export default BeerCard
