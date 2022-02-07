import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";
import VanillaTilt from 'vanilla-tilt';
import 'src/style/CardItem.css';

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

function CardItem({ card }) {
  const cardDes = card.description.split('|');
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
    <Tilt className="card__tilt" options={match ? options : options1}>
      <div className="card__container">
        <div className="card">
          <div className="div__card__image">
            <h1>{card.title}</h1>
            <img
              className="card__image"
              src={card.image}
              alt=""
            />
          </div>
          <div className="card__content">
            <h2>{card.title}</h2>
            <h3>{card.title}</h3>
            <p className="card__des__title" style={{ marginBottom: '3.5px' }}>
              <i className="fas fa-exclamation-circle" />
              {' '}
              {card.desTitle}
              <br />
            </p>
            <p className="card__des">
              {cardDes.map((cDes) => (
                <span key={cDes}>
                  <i className="far fa-hand-point-right" />
                  {' '}
                  {cDes}
                  {' '}
                  <br />
                </span>
              ))}
            </p>
            <a href={card.type}>Xem thêm</a>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

CardItem.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.string,
    desTitle: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default CardItem;
