import '../Header/Header.css'
import NavBar from './Navbar';
import SideMenu from './SideMenu';
import { UserContext  } from '../../UserContext';
import React, { useContext } from 'react'

function Header() {

  const {sideMenuBar, setsideMenuBar} = useContext(UserContext)

  return (
    <div className="header">
       <NavBar/>
       {
        sideMenuBar === true ? <SideMenu/> :<></>
       }
      </div>
  )
}

export default Header