import React, { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Gnb.css';

const Gnb = () => {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:1023px)',
  });
  const languageText = isPc ? '웹페이지' : '모바일';

  const mobileMenu = useRef();
  const [menuFlag, setMenuFlag] = useState(false);
  const openLnbMenu = () => {
    setMenuFlag(!menuFlag);
  };

  return (
    <header className={menuFlag ? 'active' : null}>
      <div>
        {isPc && <p>HI PC</p>}
        {isTablet && <p>HI Tablet</p>}
        {isMobile && <p>HI Mobile</p>}
        {languageText}
      </div>
      <div className='inner'>
        {isMobile && (
          <div className='mobile-menu'>
            <a href='#;' className='btn-menu' onClick={openLnbMenu} ref={mobileMenu}>
              <FontAwesomeIcon icon={faBars} />
              <span className='blind'>메뉴</span>
            </a>
          </div>
        )}
        <div className='bg-dimmed' onClick={openLnbMenu}></div>
        {isMobile && (
          <aside className='mobile-left-menu'>
            <ul>
              <li>menu1</li>
              <li>menu2</li>
              <li>menu3</li>
              <li>menu4</li>
              <li>menu5</li>
            </ul>
          </aside>
        )}

        <h1 className='logo'>
          <a href='#;' className='btn-logo'>
            <img src='/images/img-logo.png' alt='' />
          </a>
        </h1>
        {isPc && (
          <ul className='gnb'>
            <li>
              <a href='#;' className='gnb-item'>
                멤버십 프로그램
              </a>
            </li>
            <li>
              <a href='#;' className='gnb-item'>
                자율 프로그램
              </a>
            </li>
            <li>
              <a href='#;' className='gnb-item'>
                커뮤니티
              </a>
            </li>
            <li>
              <a href='#;' className='gnb-item'>
                이벤트
              </a>
            </li>
          </ul>
        )}
        {isPc && (
          <form className='search-form'>
            <fieldset>
              <legend className='blind'>통합 검색</legend>
              <div className='box-search'></div>
            </fieldset>
            <input className='search-input' type='text' placeholder='Search' />
            <button>
              <FontAwesomeIcon icon={faSearch} />
              <span className='blind'>검색</span>
            </button>
          </form>
        )}
        {isPc && (
          <div className='user-menu-logout'>
            <a href='#;' className='btn-login'>
              <span>로그인</span>
            </a>
            <a href='#;' className='btn-join'>
              <span>회원가입</span>
            </a>
          </div>
        )}
        <div className='user-menu-login'>
          <span className='user-name'>
            <strong>유아영</strong> 회원님
          </span>
          <a href='#;' className='btn-user-info'>
            <span>마이페이지</span>
          </a>
          <a href='#;' className='btn-shopping-basket'>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className='blind'>장바구니</span>
          </a>
        </div>
        {/* 로그인 후  */}
      </div>
    </header>
  );
};

export default Gnb;
