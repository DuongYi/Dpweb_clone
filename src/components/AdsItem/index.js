import React from 'react';

import PropTypes from 'prop-types';

import classes from './AdsItem.module.css';

function AdsItem({ product }) {
  return (
    <div className={classes['product-grid-column']}>
      <div className={classes['product-grid']}>
        <div className={classes['product-thumbnail']}>
          <a href={`sp${product.id}`}>
            <img src={product.image} alt={product.title} />
          </a>
        </div>
        <a className={classes['product-title']} href={`sp${product.id}`}>{product.title}</a>
        <div className={classes['product-price']}>
          <span>{product.price}</span>
        </div>
      </div>
    </div>
  );
}

AdsItem.propTypes = {
  product: PropTypes.object,
};

export default AdsItem;
