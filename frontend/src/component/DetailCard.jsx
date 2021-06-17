import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import BigBannerData from '../json/BigBannerData.json';
import '../common/Footer.scss';

//style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Popup from '../common/Popup';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function thumbItemActive() {
    const $detailThumbLists = document.querySelectorAll('.detail-thumb-lists li');

    if ($detailThumbLists) $detailThumbLists[0].childNodes[0].classList.add('active');
}
function thumbItemRemove() {
    const $detailThumbLists = document.querySelectorAll('.detail-thumb-lists li');

    $detailThumbLists.forEach((item, index) => {
        item.childNodes[0].classList.remove('active');
    });
}

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
    const [bgImage, setBgimage] = useState(`${BigBannerData[0].imageURL}`);

    const [modalPopup, setModalPopup] = useState(false);
    const [imgWidth, setImageWidth] = useState(null);
    const [imgHeight, setImageHeight] = useState(null);

    const [array, setArray] = useState(BigBannerData);
    const url2 = bgImage.substring(5, bgImage.length - 2);

    useEffect(() => {
        // console.log(thumbItem.current.childNodes[0].childNodes[0].classList.add('active'));
        // thumbItem.current
        if (thumbItem.current.id === 6) {
            // console.log('6666');
        }
        // console.log(`bgImage는 ===== ${bgImage}`);
        // console.log(url2);
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
            thumbItemRemove();

            // console.log('---------------');
            // console.log(e.target.id);
            let url = e.target.style.backgroundImage;
            setCurrentCase(e.target.id);
            // let re = /(?!url)[^(^)^"+]./gm;
            // let re = /(?:url\(\")([a-zA-Z0-9.:/\\-]+)(?:\"\))/gm;
            let urlRegex = /(?:https?\:\/\/)?([a-zA-Z0-9.:/_-]+)/gm;
            let urlResult = url.match(urlRegex);
            console.log(urlResult[1]);
            console.log('----------------');
            // console.log(e.target.style.backgroundImage.substring(5, e.target.style.backgroundImage.length - 2));
            console.log(e.target.style.backgroundImage);
            setBgimage(urlResult[1]);
            // setBgimage(e.target.style.backgroundImage.substring(5, e.target.style.backgroundImage.length - 2));
        },
        [bgImage, currentCase]
    );

    const openPopup = useCallback((e) => {
        e.preventDefault();
        document.body.classList.add('modal-open');
        setModalPopup(!modalPopup);
        const url = bgImage.substring(4, bgImage.length - 1);
        // console.log(url);
        // console.log(`이건 naturalWidth: ${e.target.naturalWidth}`);
        // console.log(e.target.offsetWidth);
        // console.log(e.target.offsetHeight);
        setImageWidth(e.target.naturalWidth);
        setImageHeight(e.target.naturalHeight);
    }, []);

    const closePopup = useCallback((e) => {
        e.preventDefault();
        document.body.classList.remove('modal-open');
        setModalPopup(false);
    }, []);

    useEffect(() => {
        // console.log('start');
        // console.log(BigBannerData.length);
        // console.log('-------------');
        // console.log(thumbItem.current);
        thumbItem.current.classList.add('hide');
        if (BigBannerData.length > 1) {
            thumbItemActive();
            thumbItem.current.classList.remove('hide');
        }
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
                                        <a
                                            href='#;'
                                            className='slide-item'
                                            onClick={openPopup}
                                            // style={{
                                            //     backgroundImage: `url(${item.imageURL})`,
                                            // }}
                                        >
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
                            // style={{
                            //     backgroundImage: `${bgImage}`,
                            // }}
                            onClick={openPopup}
                        >
                            <img src={bgImage} alt='' />
                            <div className='tag-lists'>
                                <span className='ico-tag red'>TOP 1 인기 추천</span>
                                <span className='ico-tag'>일이삼사오육칠팔구십</span>
                            </div>
                        </a>

                        <ul className='detail-thumb-lists' ref={thumbItem}>
                            {BigBannerData.length > 1 &&
                                BigBannerData.map((item, index) => {
                                    return (
                                        <li key={item.id}>
                                            <a
                                                href='#;'
                                                id={index}
                                                // className='detail-thumb-item'
                                                className={
                                                    currentCase === `${index}`
                                                        ? 'detail-thumb-item active'
                                                        : 'detail-thumb-item'
                                                }
                                                // onClick={onClickEvent}
                                                // onClick={handleChange}
                                                onClick={currentCase === `${index}` ? null : handleChange}
                                                value='test'
                                                // ref={thumbItem}
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
