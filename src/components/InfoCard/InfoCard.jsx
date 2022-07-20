import React, { useEffect, useState } from "react";
import './InfoCard.css'
import { MdOutlineEdit } from 'react-icons/md';
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequests.js";
import { logout } from "../../actions/AuthActions";

const InfoCard = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const [modalOpened, setModalOpened] = useState(false);
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);


  const handleLogOut = ()=> {
    dispatch(logout())
  }


  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching")
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
        console.log(profileUser)
      }
    };
    fetchProfileUser();
  }, [user]);

    return (
      <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile Info <MdOutlineEdit
              width="3rem"
              height="1.4rem"              
              onClick={() => setModalOpened(true)}
            /></h4>
        {user._id === profileUserId ? (
          <div>
            
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data = {user}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="info">
        {/* */}
        <span>
          <b>Status </b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser.livesIn}</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>

      <button className="button logout-button" onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default InfoCard;