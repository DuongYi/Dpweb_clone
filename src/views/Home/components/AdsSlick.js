import React from 'react';

import { makeStyles } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { PropTypes } from 'prop-types';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AdsItem from 'src/components/AdsItem';
import { DUMMY_ADS } from 'src/constants';

const useStyles = makeStyles(() => ({
  nextArrow: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0.5,
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(255,255,255,.75)',
    zIndex: 1,
    right: -25,
    justifyContent: 'flex-end',
    transition: 'all ease 0.3s',
    '&:hover': {
      color: 'rgba(255,255,255)',
    }
  },
  prevArrow: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0.5,
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(255,255,255,.75)',
    zIndex: 1,
    left: -25,
    justifyContent: 'flex-start',
    transition: 'all ease 0.3s',
    '&:hover': {
      color: 'rgba(255,255,255)',
    }
  }
}));

function NextArrow({ currentSlide, slideCount, onClick }) {
  const classes = useStyles({ currentSlide, slideCount });
  return (
    <div className={classes.nextArrow} onClick={onClick}>
      <NavigateNextIcon color="inherit" fontSize="large" />
    </div>
  );
}

NextArrow.propTypes = {
  currentSlide: PropTypes.any,
  slideCount: PropTypes.number,
  onClick: PropTypes.func
};

function PrevArrow({ currentSlide, onClick }) {
  const classes = useStyles({ currentSlide });
  return (
    <div className={classes.prevArrow} onClick={onClick}>
      <NavigateBeforeIcon color="inherit" fontSize="large" />
    </div>
  );
}

PrevArrow.propTypes = {
  currentSlide: PropTypes.any,
  onClick: PropTypes.func
};

function AdsSlick() {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          dots: true,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {DUMMY_ADS.map((item) => (
        <AdsItem key={item} product={item} />
      ))}
    </Slider>
  );
}

export default AdsSlick;
