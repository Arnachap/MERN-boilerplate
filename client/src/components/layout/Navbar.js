import React, { Fragment, useEffect } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = () => {
  useEffect(() => {
    let dropdowns = document.querySelectorAll('.dropdown-trigger');

    let options = {
      coverTrigger: false,
      alignment: 'right',
      constrainWidth: false
    };

    M.Dropdown.init(dropdowns, options);
  });

  return (
    <header>
      <ul id='guest-dropdown' class='dropdown-content grey darken-4'>
        <li>
          <a className='waves-effect center-align white-text'>Se connecter</a>
        </li>

        <li>
          <a className='waves-effect center-align white-text'>S'inscrire</a>
        </li>
      </ul>

      <div className='navbar-fixed'>
        <nav className='grey darken-4'>
          <div className='nav-wrapper'>
            <div className='container'>
              <a className='brand-logo waves-effect waves-light'>Logo</a>

              <ul id='nav-mobile' className='right'>
                <li>
                  <a className='waves-effect waves-light'>Accueil</a>
                </li>
                <li>
                  <a className='waves-effect waves-light'>Blog</a>
                </li>
                <li>
                  <a
                    className='dropdown-trigger waves-effect waves-light no-autoinit'
                    data-target='guest-dropdown'
                  >
                    <i className='material-icons'>person</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
