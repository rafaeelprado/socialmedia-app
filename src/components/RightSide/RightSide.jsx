import React from 'react'
import './RightSide.css'
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { HiOutlineBell } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import TrendCard from '../TrendCard/TrendCard';

const RightSide = () => {
  return (
    <div className="RightSide">
        <div className="navIcons">
            <img src={Home} alt="" />  
            <FiSettings size="1.5rem"/>         
            <HiOutlineBell size="1.5rem"/>
            <img src={Comment} alt="" />
        </div>

        <TrendCard/>

        <button className='button r-button'>
            Share
        </button>

    </div>
  )
}

export default RightSide