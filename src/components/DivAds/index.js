import React from 'react';

import PropTypes from 'prop-types';

import classes from './DivAds.module.css';

function DivAds({ children }) {
  return (
    <div className={classes.container}>
      {children}
    </div>
  );
}

DivAds.propTypes = {
  children: PropTypes.node
};

export default DivAds;
