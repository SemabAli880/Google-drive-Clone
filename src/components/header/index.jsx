import React from 'react'
import gdLogo from '../../media/google-drive-logo.png'
import SearchIcon from '@material-ui/icons/Search'
import TuneIcon from '@material-ui/icons/Tune'
import AppsIcon from '@material-ui/icons/Apps'
import SettingsIcon from '@material-ui/icons/Settings'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import OfflinePinOutlinedIcon from '@material-ui/icons/OfflinePinOutlined'
import '../../styles/Header.css'
import userPhoto from '../../media/semab.jpg'

const index = () => {
  return (
    <div className='header'>
      <div className='header_logo'>
        <img src={gdLogo} alt='google=drive-logo' />
      </div>
      <span>Drive</span>
      <div className='header_searchContainer'>
        <div className='header_searchBar'>
          <SearchIcon />
          <input type='text' placeholder='Search in Drive' />
          <TuneIcon />
        </div>
      </div>
      <div className='header_icons'>
        <span>
          <OfflinePinOutlinedIcon />
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <img src={userPhoto} alt='User Logo' />
      </div>
    </div>
  )
}

export default index
