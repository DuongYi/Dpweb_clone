import React from 'react';

import classes from './LoadingAniMobile.module.css';

function LoadingAniMobile() {
  return (
    <div className={classes.center}>
      <div className={classes.ring} />
      <span>Loading...</span>
    </div>
  );
}

export default LoadingAniMobile;
