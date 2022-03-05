import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

function CardInfo({ blog }) {
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
              <h2>BLOG</h2>
              <h3>{blog.title}</h3>
              <h4 style={{ color: '#fff' }}>{blog.daywrite}</h4>
              <p style={{ marginTop: '5px' }}>
                Người viết:
                {' '}
                {blog.writer}
              </p>
              <Link to={`/Blog/${blog.id}`}>Xem thêm</Link>
            </div>
          </div>
        </div>
      </Tilt>
    </>
  );
}

CardInfo.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    daywrite: PropTypes.string,
    writer: PropTypes.string,
  }),
};

export default CardInfo;
