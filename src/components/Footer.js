import React from 'react';

import 'src/style/Footer.css';
import 'src/style/Grid.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__case">
            <Link to="/" className="footer__logo">
              <h1>Dũng Phạm</h1>
            </Link>
            <div className="footer__guaranteed">
              <h3>Uy tín, chất lượng, giá rẻ</h3>
            </div>
          </div>
          <div className="footer__case">
            <ul className="footer__menu">
              <li>
                <Link to="/">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/">Dịch vụ</Link>
              </li>
              <li>
                <Link to="/">Điều khoản</Link>
              </li>
            </ul>
          </div>
          <div className="footer__case">
            <ul className="footer__menu">
              <li>
                <Link to="/FAQ">FAQ</Link>
              </li>
              <li>
                <Link to="/tools">Sản phẩm</Link>
              </li>
              <li>
                <Link to="/tools">Tool</Link>
              </li>
            </ul>
          </div>
          <div className="footer__case">
            <h3 className="footer__contact">Liên hệ</h3>
            <p className="contact__description">Hotline: 0972370562</p>
            <p className="contact__description">
              Facebook:
              {' '}
              <a
                href="https://www.facebook.com/pham.dung177"
                target="_blank"
                style={{ textDecoration: 'none' }}
                rel="noreferrer"
              >
                Dũng Phạm
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom__container">
          <ul className="socials">
            <li>
              <a
                href="https://www.facebook.com/pham.dung177"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCx2ehE3tT4bRGpFXb1IsKhw"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-youtube" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/manchesterunited/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/microsoft/vscode"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github" />
              </a>
            </li>
          </ul>
          <p>© 2021 DungPham. All rights reserved</p>
          <p className="dev__design">
            Design by
            {' '}
            <a
              href="https://www.facebook.com/pham.dung177"
              target="_blank"
              rel="noreferrer"
            >
              Team DungPham
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
//   <script src="https://unpkg.com/css-paint-polyfill" />;
// CSS.paintWorklet.addModule('https://unpkg.com/@georgedoescode/houdini-fleck');

export default Footer;
