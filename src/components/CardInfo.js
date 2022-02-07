import React, { useEffect, useRef } from 'react';

// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import VanillaTilt from 'vanilla-tilt';

import 'src/style/CardInfo.css';

function Tilt({ options, ...rest }) {
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

Tilt.propTypes = {
  options: PropTypes.object
};

function CardInfo() {
  const match = window.matchMedia('(min-width: 1024px)').matches;

  const options = {
    max: 30,
    speed: 500,
    glare: true,
    'max-glare': 0.5,
  };
  const options1 = {
    max: 0,
    speed: 0,
    glare: false,
  };
  return (
    <>
      <Tilt className="cardIf__tilt" options={match ? options : options1}>
        <div className="cardIf__container">
          <div className="cardIf">
            <div className="cardIf__content">
              <h2>VPS</h2>
              <h3>CPU 1 core</h3>
              <h3>RAM 8 GB</h3>
              <h3>Vị trí: Việt Nam</h3>
              <h3>300k / 30 ngày</h3>
              <p style={{ marginTop: '5px' }}>Người bán: Dũng Phạm</p>
              <a href="/404">Xem thêm</a>
            </div>
          </div>
        </div>
      </Tilt>
    </>
  );
}

export default CardInfo;
