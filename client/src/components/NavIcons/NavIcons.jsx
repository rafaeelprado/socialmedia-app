import React from "react";

import Home from "../../img/home.png";
import Comment from "../../img/comment.png";
import { HiOutlineBell } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} size="1.5rem" alt="" />
      </Link>
      <FiSettings size="1.5rem"/>
      <HiOutlineBell size="1.5rem"/>      
      <img src={Comment} size="1.5rem" alt="" />     
    </div>
  );
};

export default NavIcons;