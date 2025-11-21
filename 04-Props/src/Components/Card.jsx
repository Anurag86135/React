import React from 'react'

const Card = (props) => {
  console.log(props)

  return (
    <div>
            <div className="card">
                <img src={props.img} alt="" />
                <h1>{props.user} {props.age}</h1>
                <p>राम राम राम राम राम राम राम राम राम राम राम राम राम राम राम राम राम राम राम राम</p>
                <button>View Profile</button>
              
              </div>
    </div>
  )
}

export default Card