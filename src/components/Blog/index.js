import React from 'react';

import PropTypes from 'prop-types';

import Footer from 'src/components/Footer';
import { LINK_ADS } from 'src/constants';

import DivAds from '../DivAds';
import GoogleAd from '../GoogleAd';
import classes from './Blog.module.css';

function Blog({ children }) {
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.boxAds}>
            <a href={LINK_ADS} target="_blank" rel="noreferrer">
              <img src="/static/images/banner/qc1.gif" alt="qc" width="100%" />
              <img src="/static/images/banner/qc3.gif" alt="qc" width="100%" />
            </a>
            <DivAds>
              <GoogleAd slot="1168511780" />
              <GoogleAd slot="6995553534" />
            </DivAds>
          </div>
          {children}
          <div className={classes.boxAds}>
            <DivAds>
              <GoogleAd slot="7016530990" auto="autorelaxed" />
            </DivAds>
          </div>
        </div>
        <div className={classes.container_adsright}>
          <a href={LINK_ADS} target="_blank" rel="noreferrer">
            <img src="/static/images/banner/qcd1.gif" alt="" />
          </a>
        </div>
      </div>
      <DivAds>
        <GoogleAd slot="7016530990" auto="autorelaxed" />
      </DivAds>
      <Footer />
    </div>
  );
}

Blog.propTypes = {
  children: PropTypes.node
};

export default Blog;
