import React from 'react';

import Slider from 'react-slick';

import BlogItem from 'src/components/BlogItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BlogSlick() {
  const blogList = [
    {
      image: 'https://thuthuat.taimienphi.vn/cf/Images/gl/2019/11/29/huong-dan-cai-dat-winrar.jpg',
      title: 'Chọn lọc 6 Cách làm trắng da mặt tại nhà thực sự có hiệu quả'
    },
    {
      image: 'https://thuthuat.taimienphi.vn/cf/Images/gl/2019/11/29/huong-dan-cai-dat-winrar.jpg',
      title: 'Khô môi là thiếu vitamin gì?'
    },
    {
      image: 'https://thuthuat.taimienphi.vn/cf/Images/gl/2019/11/29/huong-dan-cai-dat-winrar.jpg',
      title: 'Bà bầu có nên dùng mỹ phẩm không?'
    },
    {
      image: 'https://thuthuat.taimienphi.vn/cf/Images/gl/2019/11/29/huong-dan-cai-dat-winrar.jpg',
      title: 'Cách đánh má hồng đẹp tự nhiên phù hợp với từng khuôn mặt'
    },
    {
      image: 'https://thuthuat.taimienphi.vn/cf/Images/gl/2019/11/29/huong-dan-cai-dat-winrar.jpg',
      title: 'Son cam đất hợp với da nào? Top 6 thỏi son cam đất dễ dùng'
    },
    {
      image: 'https://thuthuat.taimienphi.vn/cf/Images/gl/2019/11/29/huong-dan-cai-dat-winrar.jpg',
      title: 'Cách gội đầu sau khi uốn tóc để tóc luôn vào nếp'
    },
    {
      image: 'https://thuthuat.taimienphi.vn/cf/Images/gl/2019/11/29/huong-dan-cai-dat-winrar.jpg',
      title: 'Top 9 tinh dầu thơm phòng được nhiều người yêu thích nhất hiện nay'
    },
    {
      image: 'https://thuthuat.taimienphi.vn/cf/Images/gl/2019/11/29/huong-dan-cai-dat-winrar.jpg',
      title: 'Tìm hiểu chi tiết về mụn lưng tuổi dậy thì - Làm sao để trị?'
    },
  ];

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
      {blogList.map((item) => (
        <BlogItem key={item.title} blog={item} />
      ))}
    </Slider>
  );
}

export default BlogSlick;
