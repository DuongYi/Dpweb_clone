import React from 'react';

import PropTypes from 'prop-types';

import classes from './Image.module.css';

function Image({ src, alt }) {
  return (
    <div className={classes.container}>
      <div className={classes.thumbnail}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
