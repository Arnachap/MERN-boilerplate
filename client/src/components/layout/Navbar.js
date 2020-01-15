import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
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
          <Link to='/' className='navbar-brand'>
            Boilerplate
          </Link>

          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link to='/blog' className='nav-link'>
                  Blog
                </Link>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <div className='material-icons'>person</div>
                </DropdownToggle>

                <DropdownMenu right>
                  <DropdownItem>S'inscrire</DropdownItem>
                  <Link to='/login' className='dropdown-item'>
                    Se connecter
                  </Link>
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
