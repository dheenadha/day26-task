import React from 'react'

const Card = ({image,title}) => {
  return (
    <div className="card m-2" >
    <img src={image} className="card-img-top" alt="Image" style={{width: "18rem",height:"180px"}}/>
    <div className="card-body m-2" >
      <h5 className="card-title text-success">{title}</h5>
    </div>
    </div>
  )
}

export default Card