import React from 'react';
import './header.css';
import { IconButton } from '@mui/material';
import { Apps } from '@mui/icons-material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TemporaryDrawer from './TemporaryDrawer';
const Header = () => {
  return (
    <div className='header'>
        <div className='header_info'>
          <TemporaryDrawer/>
            <IconButton>
                <MenuBookIcon/>
            </IconButton>
            {/* <img src={formimage} style={{ width:"40px" , height:"40px" }} /> */}
            <div className='info'>
              Forms
            </div>
        </div>
        <div className='header_search'>
          <SearchIcon/>
          <input type="text" name='Search'/>
        
        </div>
        <div className='header_right'>
          <IconButton>
            <Apps/>
          </IconButton>
          <IconButton>
            <AccountCircleIcon/>
          </IconButton>
        </div>


      
    </div>
  )
}

export default Header
