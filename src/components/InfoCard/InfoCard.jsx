import React from 'react'
import './InfoCard.css'
import { MdOutlineEdit } from 'react-icons/md';

const InfoCard = () => {
  return (
  <div className="InfoCard">
    <div className="InfoHead">
    <h4>Your Info</h4>    
    <div>
      <MdOutlineEdit size="1.2rem"/>
    </div>
    </div>

    <div className="info">
      <span>
        <b>Status </b>
      </span>
      <span>
        In Relationship
        </span>
    </div>

    <div className="info">
      <span>
        <b>Lives in </b>
      </span>
      <span>
        New York
      </span>
    </div>

    <div className="info">
      <span>
        <b>Works at </b>
      </span>
      <span>
        Marvel Studios
      </span>
    </div>

    <button className="button logout-button">Logout</button>

  </div>  
  )
}

export default InfoCard