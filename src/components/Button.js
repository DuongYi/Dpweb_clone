import React from 'react';

import '../style/Button.css';
import PropTypes from 'prop-types';

const STYLES = [
  'btn--primary',
  'btn--outline',
  'btn--test',
  'btn--sign',
  'btn--moretool',
];

const SIZES = ['btn--medium', 'btn--large', 'btn--large--demo', 'btn--lother'];

function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string
};

export default Button;
