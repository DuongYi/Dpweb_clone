import React from 'react';

import PropTypes from 'prop-types';

import Footer from 'src/components/Footer';
import { LINK_ADS } from 'src/constants';

import classes from './Blog.module.css';

function Blog({ children }) {
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.boxAds}>
            {/* <a href={LINK_ADS} target="_blank" rel="noreferrer">
              <img src="/static/images/banner/qc1.gif" alt="qc" width="100%" />
              <img src="/static/images/banner/qc3.gif" alt="qc" width="100%" />
            </a> */}
            <div className={classes['div-ads']}>
              <div className={classes['module-inside']}>
                <p>Liên hệ quảng cáo</p>
                <a href="https://www.facebook.com/VSsYii193">
                  <h2>VSsYii</h2>
                </a>

              </div>
            </div>
          </div>
          {children}
          <div className={classes.boxAds} />
        </div>
        <div className={classes.container_adsright}>
          <a href={LINK_ADS} target="_blank" rel="noreferrer">
            <img src="/static/images/banner/qcd1.gif" alt="" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

Blog.propTypes = {
  children: PropTypes.node
};

export default Blog;
