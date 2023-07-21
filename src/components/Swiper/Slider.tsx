import swipe2 from './pics/swipe2.svg';
import swipe3 from './pics/swipe3.svg';
import swipe4 from './pics/swipe4.svg';
import swipe5 from './pics/swipe5.svg';
import swipe6 from './pics/swipe6.svg';
import swipe7 from './pics/swipe7.svg';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './styles/slider.css';
import './styles/slick-theme.css';
import './styles/swiper.css';

const MySlider: React.FC = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollingUp(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slides = [
    { id: 2, imageUrl: swipe2 as string },
    { id: 3, imageUrl: swipe3 as string },
    { id: 4, imageUrl: swipe4 as string },
    { id: 5, imageUrl: swipe5 as string },
    { id: 6, imageUrl: swipe6 as string },
    { id: 7, imageUrl: swipe7 as string },
    { id: 8, imageUrl: swipe5 as string },
    { id: 9, imageUrl: swipe6 as string },
    { id: 10, imageUrl: swipe7 as string },
  ];

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    spaceBetween: 40,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderClassName = `slider ${isScrollingUp ? 'scrolling-up' : ''}`;
  return (
    <div
      className={sliderClassName}
      style={{
        outline: 'none',
        paddingLeft: '40px',
        paddingRight: '40px',
        width: '1800px',
      }}
    >
      <Slider {...settings} className={isScrollingUp ? 'scrolling-up' : ''}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <img src={slide.imageUrl} alt={`Img ${slide.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
