import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import Languageicon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Avatar} from '@material-ui/core'
import { Link } from 'react-router-dom'

interface Props {
  
}

const Header = (props: Props) => {
  return (
    <div className='header'>
      <Link to='/'>
      <img
      className='header__icon'
      src={require('../../assets/airbnb_logo.png')}
      alt='logo'
      />
      </Link>


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
