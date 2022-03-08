import React, { Component } from 'react';

import PropTypes from 'prop-types';

const googleAdId = 'ca-pub-1055178223861785';

class GoogleAd extends Component {
  googleInit = null;

  componentDidMount() {
    const { timeout } = this.props;
    this.googleInit = setTimeout(() => {
      if (typeof window !== 'undefined') { (window.adsbygoogle = window.adsbygoogle || []).push({}); }
    }, timeout);
  }

  componentWillUnmount() {
    if (this.googleInit) clearTimeout(this.googleInit);
  }

  render() {
    const {
      classNames, slot, auto, layout
    } = this.props;
    return (
      <div className={classNames}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', margin: '0 auto' }}
          data-ad-client={googleAdId}
          data-ad-layout={layout}
          data-ad-slot={slot}
          data-ad-format={auto}
          data-full-width-responsive="true"
        />
      </div>
    );
  }
}

GoogleAd.propTypes = {
  classNames: PropTypes.string,
  slot: PropTypes.string,
  auto: PropTypes.string,
  timeout: PropTypes.number,
  layout: PropTypes.string,
};

GoogleAd.defaultProps = {
  classNames: '',
  timeout: 200,
  auto: 'auto',
  layout: '',
};

export default GoogleAd;
