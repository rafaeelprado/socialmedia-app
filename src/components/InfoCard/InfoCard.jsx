import React, { useState } from "react";
import './InfoCard.css'
import { MdOutlineEdit } from 'react-icons/md';
import ProfileModal from "../ProfileModal/ProfileModal";

  const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
      <div className="InfoCard">
        <div className="InfoHead">
          <h4>Your Info</h4>
          <div>
            <MdOutlineEdit
              width="2.5rem"
              height="1.7rem"
              size="1.4rem"
              onClick={() => setModalOpened(true)}              
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            />
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
    );
  };
  
  export default InfoCard;