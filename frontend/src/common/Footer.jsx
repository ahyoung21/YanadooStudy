import React from 'react';
import './common.scss';

const Footer = () => {
    return (
        <footer>
            <div className='inner-col'>
                <h2 className='footer-logo'>
                    <a href='#;'>
                        <img src='/images/img-logo.png' alt='야나두 푸터 로고' />
                    </a>
                </h2>
                <div className='footer-nav-menu'>
                    <dl>
                        <dt>고객센터</dt>
                        <dd>
                            <a href='#;'>자주 묻는 질문</a>
                        </dd>
                        <dd>
                            <a href='#;'>1:1 문의하기</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>카카오톡 상담</dt>
                        <dd>
                            <a href='#;'>&#64;야나두 친구추가</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>제휴 및 단체수강 문의</dt>
                        <dd>
                            <a href='#;'>제휴문의</a>
                        </dd>
                        <dd>
                            <a href='#;'>단체 수강 문의</a>
                        </dd>
                    </dl>
                </div>
                <div className='footer-info'>
                    <strong>무엇을 도와드릴까요?</strong>
                    <a href='tel:1600-0563' className='tel'>
                        1600.0563
                    </a>
                    <span>평일 : 09:00 &#126; 18:00</span>
                    <span>점심시간 : 12:30 &#126; 13:00</span>
                </div>
                <div className='footer-link-area'>
                    <div className='link-lists'>
                        <a href='#;'>
                            <img src='/images/ico_ios_download_70x70.png' alt='아이폰 앱 다운로드' />
                        </a>
                        <a href='#;'>
                            <img src='/images/ico_android_download_70x70.png' alt='안드로이드 앱 다운로드' />
                        </a>
                    </div>
                    <div className='link-lists'>
                        <a href='#;'>
                            <img src='/images/ico_facebook_70x70.png' alt='페이스북' />
                        </a>
                        <a href='#;'>
                            <img src='/images/ico_band_70x70.png' alt='네이버밴드' />
                        </a>
                        <a href='#;'>
                            <img src='/images/ico_blog_70x70.png' alt='네이버블로그' />
                        </a>
                        <a href='#;'>
                            <img src='/images/ico_naver_post_70x70.png' alt='네이버포스트' />
                        </a>
                    </div>
                </div>
                <select name='footerSelect' id='footerSelect'>
                    <option value=''>Related Site</option>
                    <option value=''>Related Site</option>
                    <option value=''>Related Site</option>
                    <option value=''>Related Site</option>
                    <option value=''>Related Site</option>
                </select>
                <div className='footer-utility'>
                    <a href='#;'>회사소개</a>
                    <a href='#;'>개인정보처리방침</a>
                    <a href='#;'>이용약관</a>
                    <a href='#;'>공고사항</a>
                </div>
                <p>
                    주식회사 야나두 &#40;야나두 원격평생교육원&#41; <br />
                    사업자등록번호 129-86-23477 &middot; 통신판매업 신고번호 제2018-서울강남-02139호
                    <br />
                    대표 김정수, 김민철 &middot; 개인정보보호 책임자 정호용
                    <br />
                    주소 서울시 강남구 영동대로 96길 26, 3, 4층 &#40;삼성동, Place 1&#41;
                    <br />
                    원격 평생교육 시설신고 서울특별시 강남 서초교육지원청 &#40;제 원516호&#41;
                </p>
            </div>
        </footer>
    );
};

export default Footer;
