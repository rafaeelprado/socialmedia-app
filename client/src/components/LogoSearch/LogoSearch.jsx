import React from 'react'
import Logo from '../../img/logo.svg'
import { GoSearch } from "react-icons/go";
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={Logo} alt="" className='Logo' />
        <div className="Search">
            <input type="text" placeholder="#Explore"/>
            <div className="s-icon">
                <GoSearch />
                </div>
        </div>
    </div>
  )
}

export default LogoSearch