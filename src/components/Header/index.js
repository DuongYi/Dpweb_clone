import React from 'react';

import PropTypes from 'prop-types';

import Navbar from './Navbar';

function Header({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
