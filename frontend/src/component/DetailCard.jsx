import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import BigBannerData from '../json/BigBannerData.json';
import '../common/Footer.css';

//style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Popup from '../common/Popup';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const DetailCard = () => {
  // const $detailThumbItems = document.querySelectorAll('.detail-thumb-item');
  // const $detailThumbNail = document.querySelector('.detail-thumb');

  // Array.prototype.forEach.call($detailThumbItems, function(e){
  // 	e.addEventListener('click', onClickEvent);
  // });

  // function onClickEvent(e){
  // 	Array.prototype.forEach.call($detailThumbItems, function(e) {
  // 		e.classList.remove('active');
  // 	});
  // 	const $target = e.currentTarget;
  // 	const targetImage = $target.style.backgroundImage;
  // 	$target.classList.add('active');
  // 	$detailThumbNail.style.backgroundImage = targetImage
  // }

  const [imgurl, setImgurl] = useState('');
  const thumbItem = useRef();
  const thumbNail = useRef();
  const [currentCase, setCurrentCase] = useState(0);
  const [flag, setFlag] = useState(false);
  const [bgImage, setBgimage] = useState(`url(${BigBannerData[0].imageURL})`);

  const [modalPopup, setModalPopup] = useState(false);
  const [imgWidth, setImageWidth] = useState(null);
  const [imgHeight, setImageHeight] = useState(null);

  const [array, setArray] = useState(BigBannerData);

  useEffect(() => {
    // console.log(thumbItem.current.id);
    // thumbItem.current
    if (thumbItem.current.id === 6) {
      // console.log('6666');
    }
  }, []);

  // function currentSelector(e){
  // 	console.log(e.target.id)
  // 	console.log('---------------')
  // 	setCurrentCase(e.target.id);
  // 	console.log(currentCase)
  // 	console.log(e.target.style.backgroundImage)
  // 	setBgimage(e.target.style.backgroundImage)

  // 	console.log(bgImage)

  // }

  const handleChange = useCallback(
    (e) => {
      if (e.target.id === 0) {
        console.log('hi');
      }
      // console.log('---------------');
      // console.log(e.target.id);
      setCurrentCase(e.target.id);
      // console.log(currentCase)
      // console.log(e.target.style.backgroundImage)
      setBgimage(e.target.style.backgroundImage);
    },
    [bgImage]
  );

  const openPopup = useCallback((e) => {
    e.preventDefault();
    document.body.classList.add('modal-open');
    setModalPopup(!modalPopup);
    const url = bgImage.substring(4, bgImage.length - 1);
    console.log(url);
    console.log(e.target.offsetWidth);
    console.log(e.target.offsetHeight);
    setImageWidth(e.target.offsetWidth);
    setImageHeight(e.target.offsetHeight);
  }, []);

  const closePopup = useCallback((e) => {
    e.preventDefault();
    document.body.classList.remove('modal-open');
    setModalPopup(false);
  }, []);

  return (
    <>
      <div className='detail-card-area'>
        <div className='inner-col'>
          <Swiper
            className='swiper-container'
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ type: 'fraction' }}
            // pagination={{"bullets": true}}
            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false,
            // }}
            // navigation={true}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            breakpoints={{
              // when window width is >= 768
              1024: {
                slidesPerView: 1,
                spaceBetweenSlides: 50,
                // pagination: {
                // 	el: '.swiper-pagination',
                // 	type: 'bullets',
                // 	clickable: true,
                // },
              },
            }}
          >
            {BigBannerData &&
              BigBannerData.map((item) => {
                return (
                  <SwiperSlide key={item.id} className='swiper-slide'>
                    <a href='#;' className='slide-item' onClick={openPopup}>
                      <img src={item.imageURL} alt='' />
                    </a>
                  </SwiperSlide>
                );
              })}
            <div className='tag-lists'>
              <span className='ico-tag red'>TOP 1 인기 추천</span>
              <span className='ico-tag'>일이삼사오육칠팔구십</span>
            </div>
          </Swiper>
        </div>
      </div>
      <section className='detail-thumb-col'>
        <div className='inner-col'>
          <div className='left'>
            <a
              href='#;'
              className='detail-thumb'
              ref={thumbNail}
              style={{
                backgroundImage: `${bgImage}`,
              }}
              onClick={openPopup}
            >
              <div className='tag-lists'>
                <span className='ico-tag red'>TOP 1 인기 추천</span>
                <span className='ico-tag'>일이삼사오육칠팔구십</span>
              </div>
            </a>

            <ul className='detail-thumb-lists'>
              {BigBannerData &&
                BigBannerData.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <a
                        href='#;'
                        id={index}
                        className={currentCase === `${index}` ? 'detail-thumb-item active' : 'detail-thumb-item'}
                        // onClick={onClickEvent}
                        onClick={handleChange}
                        value='test'
                        ref={thumbItem}
                        style={{
                          backgroundImage: `url(${item.imageURL})`,
                        }}
                      >
                        {/* <img src={item.imageURL} alt="" /> */}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
      {modalPopup ? (
        <Popup
          imgHeight={imgHeight}
          imgWidth={imgWidth}
          bgImage={bgImage}
          BigBannerData={array}
          closePopup={closePopup}
          openPopup={openPopup}
        />
      ) : null}
    </>
  );
};

export default DetailCard;
