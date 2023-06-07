import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Banner = () => {
  const slides = [
    { id: 1, imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/436/844/desktop-wallpaper-kgf-chapter-2-kgf-2.jpg' },
    { id: 2, imageUrl: 'https://mcdn.wallpapersafari.com/medium/87/73/3nHTza.jpg' },
    { id: 3, imageUrl: 'https://mcdn.wallpapersafari.com/medium/17/9/N4g7lj.jpg' },
    // Add more slides as needed
  ];

  return (
    <div className='w-[80vw] h-[100vh]' >
      <Swiper
        style={{ height: '100%', width: '100%' }}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.imageUrl}
              alt={`Slide ${slide.id}`}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
