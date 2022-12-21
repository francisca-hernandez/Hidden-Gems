import React, { useState } from 'react'; 

import Auth from '../../utils/auth';

// //Bootstp CSS
import 'bootstrap/dist/css/bootstrap.min.css'; 
// Importing nav elements from reactstrap
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  NavbarBrand,
} from 'reactstrap'

//Nav Bar with tabs props

export function Navbar(_props) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  //   const [collapsed, setCollapsed] = useState(true)

  const toggle = () => setDropdownOpen(!dropdownOpen)
  //   const toggleNavbar = () => setCollapsed(!collapsed)

  const logout = event => {
    event.preventDefault();
    Auth.logout();
}
  return (
    <div
      style={{
        fontSize: '20px',
      }}
    >
      <Nav className='mr-auto'>
        <NavbarBrand
          href=""
          style={{
            marginTop: '4px',
            marginLeft: '10px',
            fontSize: '30px',
          }}
        >
          {/* <img src="assets/img/logo.png" alt="Logo" /> */}
          HiddenGems - Oregon
        </NavbarBrand>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}
        style={{
            
          }}>
          <DropdownToggle nav caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            {/* <DropdownItem header>Header</DropdownItem> */}
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Sign-in</NavLink>
        </NavItem>
        {Auth.loggedIn() ? (
          <>
        <NavItem>
        <button onClick={logout}>Logout</button>
        </NavItem>
          </>
        ) : (
          <>

          </>
        )}
      </Nav>         
    </div>
  )
}

export default Navbar
