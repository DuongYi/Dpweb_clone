import React from 'react';

import 'src/style/CardInItem.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useMeasure } from 'react-use';

import { BlurImg } from 'src/components/BlurImage';
import Button from 'src/components/Button';
import { SALE } from 'src/constants';

function getMoneys(money) {
  let result = '';
  let text = `${money}`;
  while (text.length > 3) {
    result = `.${text.substring(text.length - 3)}${result}`;
    text = text.substring(0, text.length - 3);
  }
  result = text + result;
  return result;
}

function CardInItem({ tool }) {
  const [{ width, height }] = useMeasure();

  return (
    <div className="cardInI__container">
      <Link
        to={`/tools/${tool.id}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="cardInI">
          <div className="div__cardInI__image">
            <BlurImg
              blurhash="L9C6ohtR9uMx00NGx]-;4URjnit7"
              className="cardInI__image"
              src={tool.image}
              alt="bg"
              width={width}
              height={height}
              punch={1}
            />
            {/* <img className="cardInI__image" loading="lazy" src={tool.image} alt={tool.id} /> */}
          </div>
          {(SALE.sale !== 1 && tool.price && tool.name !== 'AutoPro_DP 200')
            ? (
              <div className="div__cardInI__saleoff">
                <img className="cardInI__image__saleoff" loading="lazy" src="static/images/saleoff.png" alt="tool__bg" />
              </div>
            ) : <div style={{ display: 'none' }} />}
          <div className="cardInI__content">
            <h2>Tool</h2>
            <div className="tool__content">
              <h3>{tool.name}</h3>
              {(tool.price)
                ? ([
                  (SALE.sale === 1 || tool.name === 'AutoPro_DP 200')
                    ? (
                      <span className="tool_price" key={tool.id}>
                        <i className="fas fa-dollar-sign" />
                        {' '}
                        {getMoneys(tool.price)}
                        {' '}
                        VND
                      </span>
                    )
                    : (
                      <>
                        <span className="ori-price">
                          <i className="fas fa-dollar-sign" />
                          {' '}
                          {getMoneys(tool.price)}
                          {' '}
                          VND
                        </span>
                        <br />

                        <span className="sale-price">
                          {SALE.day}
                          {' '}
                          SALE -
                          {' '}
                          <i className="fas fa-dollar-sign" />
                          {' '}
                          {getMoneys(tool.price * SALE.sale)}
                          {' '}
                          VND
                        </span>
                      </>
                    )]
                )
                : <p style={{ color: 'yellow' }}>Miễn phí</p>}

              <h4>
                <i className="fas fa-calendar-day" />
                {' '}
                HSD: Vĩnh viễn
              </h4>
              <div className="divTool__description">
                <p>{tool.description}</p>
              </div>
            </div>
          </div>
          <div className="btMore">
            <Button
              onClick={() => this}
              buttonStyle="btn--moretool"
              buttonSize="btn--lother"
            >
              <p>Xem thêm</p>
            </Button>
          </div>
        </div>
      </Link>
    </div>

  );
}

CardInItem.propTypes = {
  tool: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }),
};

export default CardInItem;
