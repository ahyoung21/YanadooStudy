import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import BigBannerData from '../json/BigBannerData.json';
import './Visual.css';

//style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Visual = () => {
  return (
    <div className='visual-area'>
      <div className='inner'>
        <Swiper
          className='swiper-container'
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation //*
          pagination={{ clickable: true }} //*
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          breakpoints={{
            // when window width is >= 768
            768: {
              slidesPerView: 2,
              spaceBetweenSlides: 50,
            },
          }}
        >
          {BigBannerData &&
            BigBannerData.map((item) => {
              return (
                <SwiperSlide key={item.id} className='swiper-slide'>
                  <div>
                    <div
                      className='slide-img'
                      style={{
                        backgroundImage: `url(${item.imageURL})`,
                      }}
                    ></div>
                    <div className='tit'>
                      <strong>{item.mainTitle}</strong>
                    </div>
                    <div className='tit'>{item.subTitle}</div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Visual;
