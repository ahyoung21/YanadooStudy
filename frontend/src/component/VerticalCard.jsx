import React from 'react';
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import './VerticalCard.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import MembershipData from '../json/MembershipData.json';

//style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${(props) => (props.danger ? 'red' : 'purple')};
`;

const Input = styled.input`
  width: 300px;
  height: 100px;
  background: ${(props) => props.color || 'red'};
`;

const Circle = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: yellow;
  ${(props) =>
    props.huge &&
    css`
      width: 400px;
      height: 400px;
    `}
`;
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const VerticalCard = () => {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:1023px)',
  });
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    slidesPerView: 3,
    spaceBetween: 30,
  };
  return (
    <div className='vertical-card-area'>
      <div className='inner'>
        <h2>?????? vertical swiper</h2>
        <strong>????????? ?????? ?????????</strong>
        <Swiper
          {...params}
          autoplay={true}
          // className='swiper-container'
          // spaceBetween={20}
          // slidesPerView={1}
          // navigation //*
          // autoplay={{ delay: 3000 }}
          // pagination={{ clickable: true }} //*
          // // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          // centeredSlides={true}
          // breakpoints={{
          //   // when window width is >= 768
          //   768: {
          //     slidesPerView: 4,
          //     spaceBetweenSlides: 30,
          //   },
          // }}
        >
          {MembershipData &&
            MembershipData.map((item) => {
              return (
                <SwiperSlide key={item.id} className='swiper-slide'>
                  <a href='#;'>
                    <div className='card-slide-item'>
                      <div className='card-tit-area'>
                        <p>{item.subTitle}</p>
                        <strong className='card-tit'>{item.mainTitle}</strong>
                      </div>
                      {/* <div className='card-desc-area'>
                        <p className='default-price'>{item.defaultPrice}</p>
                        <div className='discount-area'>
                          <strong className='discount'>{item.discount}</strong>
                          <span className='discount-price'>
                            <strong>{item.price}</strong>???
                          </span>
                        </div>
                      </div> */}
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      {/* <Button danger>click!</Button>
      <Input color='pink' />
      <Circle /> */}
    </div>
  );
};

export default VerticalCard;
