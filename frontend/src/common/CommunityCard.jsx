import React from 'react';
import './Footer.css';

const CommunityCard = () => {
    return (
        <>
            <div className='community-card-col'>
                <div className='inner-col'>
                    <div
                        className='community-card'
                        style={{
                            backgroundImage:
                                'url(https://i.pinimg.com/originals/44/db/e6/44dbe6e5cae938b16bdd604d3606cf90.jpg)',
                        }}
                    >
                        <div className='card-info-area'>
                            <span className='ico-heart'>999</span>
                            <span className='ico-comment'>999</span>
                            <span className='ico-eye'>999</span>
                        </div>
                        <div className='card-thumb-area'>
                            <div
                                className='card-thumb'
                                style={{
                                    backgroundImage:
                                        'url(http://img.segye.com/content/image/2019/11/14/20191114515059.jpg)',
                                }}
                            >
                                <span className='blind'>프로필사진</span>
                            </div>
                            <div className='card-desc'>
                                <strong className='ellipsis'>
                                    일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
                                </strong>
                                <p className='ellipsis'>일이삼사오육칠팔구십일이삼사오육칠팔구십</p>
                            </div>
                        </div>
                    </div>
                    <div className='community-card'>
                        <div className='card-info-area'>
                            <span className='ico-heart'>999</span>
                            <span className='ico-comment'>999</span>
                            <span className='ico-eye'>999</span>
                        </div>
                        <div className='card-thumb-area'>
                            <div
                                className='card-thumb'
                                style={{
                                    backgroundImage:
                                        'url(http://img.segye.com/content/image/2019/11/14/20191114515059.jpg)',
                                }}
                            >
                                <span className='blind'>프로필사진</span>
                            </div>
                            <div className='card-desc'>
                                <strong className='ellipsis'>일이삼사오육칠팔구십</strong>
                                <p className='ellipsis'>일이삼사오육칠팔구십</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className='community-card'
                        style={{
                            backgroundImage:
                                'url(https://i.pinimg.com/originals/44/db/e6/44dbe6e5cae938b16bdd604d3606cf90.jpg)',
                        }}
                    >
                        <div className='card-info-area'>
                            <span className='ico-heart'>999</span>
                            <span className='ico-comment'>999</span>
                            <span className='ico-eye'>999</span>
                        </div>
                        <div className='card-thumb-area'>
                            <div
                                className='card-thumb'
                                style={{
                                    backgroundImage:
                                        'url(http://img.segye.com/content/image/2019/11/14/20191114515059.jpg)',
                                }}
                            >
                                <span className='blind'>프로필사진</span>
                            </div>
                            <div className='card-desc'>
                                <strong className='ellipsis'>
                                    일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
                                </strong>
                                <p className='ellipsis'>일이삼사오육칠팔구십일이삼사오육칠팔구십</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommunityCard;
