/* eslint-disable max-len */
import React from 'react';

import { useMeasure } from 'react-use';

import { BlurImg } from 'src/components/BlurImage';
import Button from 'src/components/Button';
import 'src/style/TopBackground.css';

function TopBackground() {
  const arrBg = ['static/images/allkda.jpg', 'static/images/akali.jpg', 'static/images/ahri.jpg', 'static/images/kaisa.jpg', 'static/images/evelynn.jpg', 'static/images/kaisa1.jpg'];

  const index = Math.floor(Math.random() * arrBg.length);

  const [{ width, height }] = useMeasure();

  const handleBuy = () => {};

  const bg = arrBg[index];

  return (
    <>
      <div className="hero-container">
        <BlurImg
          blurhash="L9C6ohtR9uMx00NGx]-;4URjnit7"
          className="topbg-background"
          src={bg}
          alt="bg"
          width={width}
          height={height}
          punch={1}
        />
        <h1>
          Chào mừng đến với
          {' '}
          <br />
          {' '}
          <span>DUNGPHAM.COM.VN </span>
        </h1>
        <p>Uy tín - Chất lượng - Giá rẻ</p>
        <div className="hero-btns">
          <a href="https://www.youtube.com/channel/UCx2ehE3tT4bRGpFXb1IsKhw" target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--large--demo"
            >
              XEM DEMO
            </Button>
          </a>
          <a href="https://www.facebook.com/pham.dung177" target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={handleBuy}
            >
              MUA NGAY
              {' '}
              <i className="fas fa-shopping-cart" />
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

export default TopBackground;
