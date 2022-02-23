import React from 'react';

import Button from 'src/components/Button';
import 'src/style/TopBackground.css';

function TopBackground() {
  const arrBg = ['static/images/allkda.jpg', 'static/images/akali.jpg', 'static/images/ahri.jpg', 'static/images/kaisa.jpg', 'static/images/evelynn.jpg', 'static/images/kaisa1.jpg'];
  const index = Math.floor(Math.random() * arrBg.length);

  const handleBuy = () => {};

  // eslint-disable-next-line no-unused-vars
  const bg = arrBg[index];

  return (
    <>
      <div className="hero-container">
        {/* <video src="static/videos/bg3.mp4" autoPlay loop muted /> */}
        <img className="topbg-background" src="static/images/allkda.jpg" alt="bg" />
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
