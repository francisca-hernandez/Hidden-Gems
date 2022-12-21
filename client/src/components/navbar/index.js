import React, {useState} from 'react';

import Auth from '../../utils/auth';
//Bootstp CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavLink,
    NavbarBrand, 
    Button
  } from 'reactstrap';


  //Nav Bar with tabs props

   export function Navbar(_props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    const logout = event => {
          event.preventDefault();
          Auth.logout();
      }
    
    return (
      <Nav tabs>
        <NavbarBrand
          href=""
          style={{
            marginTop: '10px',
            marginLeft: '10px',
            fontSize: '30px',
            marginRight: '10px',
          }}>
          <h1>HiddenGems - Oregon</h1>
        </NavbarBrand>
        <NavItem>
          <NavLink href="#">Sign-in</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About Us</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Resources
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Mission Statement</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>FAQ</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#">
            Contact Us
          </NavLink>
        </NavItem>
        {Auth.loggedIn() ? (
          <>
        <NavItem>
        <Button onClick={logout} style={{
          marginTop: '16px',
          marginleft: '5px',
          fontWeight: 'bold',
        }}>Logout</Button>
        </NavItem>
          </>
        ) : (
          <>

          </>
        )}
      </Nav>         
  )        
}

export default Navbar;


