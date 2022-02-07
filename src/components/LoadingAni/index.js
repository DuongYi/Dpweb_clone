import React from 'react';

import classes from './LoadingAni.module.css';

function LoadingAni() {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.box}>
          <div className={classes.cube} />
        </div>
      </div>
    </div>
  );
}

export default LoadingAni;
