import React from 'react';

import { makeStyles } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { PropTypes } from 'prop-types';
import Slider from 'react-slick';

import AdsItem from 'src/components/AdsItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const useStyles = makeStyles(() => ({
  nextArrow: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0.5,
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(115,129,54,.4)',
    zIndex: 1,
    right: -25,
    justifyContent: 'flex-end',
    transition: 'all ease 0.3s',
    '&:hover': {
      color: 'rgba(115,129,54)',
    }
  },
  prevArrow: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0.5,
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(115,129,54,.4)',
    zIndex: 1,
    left: -25,
    justifyContent: 'flex-start',
    transition: 'all ease 0.3s',
    '&:hover': {
      color: 'rgba(115,129,54)',
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
  const items = [
    {
      id: 1,
      title: 'Nhập Nick tự động',
      image: 'https://azngocrong.vn/image/nhap-nick-2021.gif',
      price: 'Tự động',
      link: 'https://azngocrong.vn/index.php?controller=vongquay&id=1',
    },
    {
      id: 2,
      title: 'Vòng quay siêu cấp',
      image: 'https://azngocrong.vn/image/vong-quay-nick-sieu-cap.gif',
      price: '11.000đ',
      link: 'https://azngocrong.vn/index.php?controller=vongquay&id=1',
    },
    {
      id: 3,
      title: 'Vòng quay có lãi',
      image: 'https://azngocrong.vn/image/vong-quay-vang-cuc-lai.gif',
      price: '13.000đ',
      link: 'https://azngocrong.vn/index.php?controller=vongquay&id=2',
    },
    {
      id: 4,
      title: 'Quay Nick 50 tỷ',
      image: 'https://azngocrong.vn/image/vong-quay-nick-50-ty.gif',
      price: '20.000đ',
      description: 'Tất cả',
      link: 'https://azngocrong.vn/index.php?controller=vongquay&id=4',
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
      {items.map((item) => (
        <AdsItem key={item} product={item} />
      ))}
    </Slider>
  );
}

export default AdsSlick;
