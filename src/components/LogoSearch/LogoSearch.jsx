import React from 'react'
import Logo from '../../img/logo.svg'
import UilSearch from '@iconscout/react-unicons/icons/uil-search'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={Logo} alt="" className='Logo' />
        <div className="Search">
            <input type="text" placeholder="#Explore"/>
            <div className="s-icon">
                <UilSearch/>
                </div>
        </div>
    </div>
  )
}

export default LogoSearch