/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import Button from '../Button';
import Account from './Account';

import 'src/style/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const account = useSelector((state) => state.account);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const history = useHistory();

  const handleLogin = () => {
    history.push('/login');
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const changBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    showButton();
    changBackground();
  }, []);

  window.addEventListener('resize', showButton);

  window.addEventListener('scroll', changBackground);

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="logo" src="/logoN.png" alt="" />
            Dũng Phạm
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tools" className="nav-links" onClick={closeMobileMenu}>
                Tool
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/captcha"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Captcha
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/VPS" className="nav-links" onClick={closeMobileMenu}>
                VPS
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/tools"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dịch vụ
              </Link>
            </li>
            {/* {!account.user
              && (
              <li>
                <Link
                  to="/login"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Log in
                </Link>
              </li>
              )} */}
          </ul>
          {/* <div className="account-box">
            {account.user && <Account />}
          </div>
          {(!account.user && button) && (
          <div style={{ marginTop: '-10px' }}>
            {' '}
            <Button onClick={handleLogin} buttonStyle="btn--sign">
              Log In
            </Button>
          </div>
          )} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
