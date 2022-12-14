import React, {useState} from 'react';

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
  } from 'reactstrap';
  

  //Nav Bar with tabs props

  function Navbar(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(!dropdownOpen);
  
    return (
      <Nav tabs>
        <NavItem>
          <NavLink href="#" active>
            Homepage
          </NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#">Sign-in</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
    );
  }


export default Navbar;