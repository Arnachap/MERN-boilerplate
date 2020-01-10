import React, { Fragment, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Navbar color='dark' dark light expand='md'>
        <div className='container'>
          <NavbarBrand href='/'>Boilerplate</NavbarBrand>

          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='#!'>Blog</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <div className='material-icons'>person</div>
                </DropdownToggle>

                <DropdownMenu right>
                  <DropdownItem>S'inscrire</DropdownItem>
                  <DropdownItem>Se connecter</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
