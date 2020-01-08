import React, { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <div class='parallax-container'>
        <div class='parallax'>
          <img src='/img/header.jpg' style={{ maxWidth: '100vw' }} />
        </div>

        <h1 className='center-align white-text'>Boilerplate</h1>
      </div>
    </Fragment>
  );
};

export default Header;
