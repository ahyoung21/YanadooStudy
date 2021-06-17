import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import './common.scss';

//style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Popup = ({ closePopup, openPopup, BigBannerData, bgImage, imgWidth, imgHeight }) => {
    // console.log(BigBannerData);
    // console.log(imgHeight);
    return (
        <>
            <div className='modal'>
                <div className='inner'>
                    <div
                        className='modal-content'
                        style={{
                            backgroundImage: `url(${bgImage})`,
                            width: `${imgWidth}px`,
                            height: `${imgHeight}px`,
                        }}
                    >
                        <button className='btn-close' onClick={closePopup}>
                            <span className='blind'>닫기</span>
                        </button>
                    </div>
                    {/* {BigBannerData &&
          BigBannerData.map((item, index) => {
            // return console.log(bgImage.substring(4, bgImage.length - 1) === item.imageURL);
            //   return(
            //   {
            //     bgImage.substring(4, bgImage.length - 1) === item.imageURL ? (
            //       <div className='modal-content'>popup</div>
            //     ) : null
            //   }
            // )
            return (
              console.log(bgImage),
              bgImage.substring(4, bgImage.length - 1) === item.imageURL && (
                <div
                  key={index}
                  className='modal-content'
                  style={{
                    backgroundImage: `url(${item.bgImage})`,
                  }}
                >
                  popup
                </div>
              )
            );
          })} */}
                </div>
            </div>
            <div className='mobile-modal'>
                <div className='inner'>
                    <Swiper
                        className='swiper-container'
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ type: 'fraction' }}
                    >
                        {BigBannerData &&
                            BigBannerData.map((item) => {
                                return (
                                    <SwiperSlide key={item.id} className='swiper-slide'>
                                        <span
                                            href='#;'
                                            className='slide-item'
                                            style={{
                                                backgroundImage: `url(${item.imageURL})`,
                                            }}
                                        ></span>
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                    <button className='btn-close' onClick={closePopup}>
                        <span className='blind'>닫기</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Popup;
