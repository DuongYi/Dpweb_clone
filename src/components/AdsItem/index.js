import React from 'react';

import PropTypes from 'prop-types';

import Button from 'src/components/Button';

import classes from './AdsItem.module.css';

function AdsItem({ product }) {
  return (
    <div className={classes['product-grid-column']}>
      <a href={product.link}>
        <div className={classes['product-grid']}>
          <div className={classes['product-thumbnail']}>
            <img src={product.image} alt={product.title} />
          </div>
          <a className={classes['product-title']} href={`sp${product.id}`}>{product.title}</a>
          <div className={classes['product-price']}>
            <span>{product.price}</span>
          </div>
          <div className={classes['product-button']}>
            <Button
              onClick={() => this}
              buttonStyle="btn--moretool"
              buttonSize="btn--lother"
            >
              <p>Xem thêm</p>
            </Button>
          </div>
        </div>
      </a>
    </div>
  );
}

AdsItem.propTypes = {
  product: PropTypes.object,
};

export default AdsItem;
