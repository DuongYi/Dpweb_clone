import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BlogItem from 'src/components/BlogItem';
import { DUMMY_BLOG } from 'src/constants';

function BlogSlick() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {DUMMY_BLOG.map((item) => (
        <BlogItem key={item.title} blog={item} />
      ))}
    </Slider>
  );
}

export default BlogSlick;
