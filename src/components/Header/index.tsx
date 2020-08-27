import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import Languageicon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Avatar} from '@material-ui/core'

interface Props {
  
}

const Header = (props: Props) => {
  return (
    <div className='header'>
      <img
      className='header__icon'
      src={require('../../assets/airbnb_logo.png')}
      alt='logo'
      />

      <div className='header__center'> 
         <input type="text" name="" id=""/>
         <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <Languageicon />
        <ExpandMoreIcon/>
        <Avatar/>
      </div>
      
    </div>
  )
}

export default Header
