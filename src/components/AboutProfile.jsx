import React from 'react';
import './AboutProfile.css';

function AboutProfile() {
    return (
        <section className="about-profile" id='profile'>
            <div className="profile-container">
                {/* 왼쪽: 프로필 이미지 */}
                <div className="profile-image">
                    <img src="/img/profile.png" alt="신명진 프로필" />
                </div>
                <div className="bg-overlay"></div>
                {/* 오른쪽: 텍스트 콘텐츠 */}
                <div className="profile-content">
                    <h2 className="profile-title">현재를 선물하는 디자이너, 신명진</h2>

                    <p className="profile-description">
                        어제보다 더 나은 사용자 경험을 위해<br />
                        끊임없이 본질을 탐구하며 문제 해결을 넘어 <br />
                        누군가에게 기쁨이 되는 디자인을 추구합니다.                    </p>

                    <p className="profile-motto">
                        BEYOND PROBLEM-SOLVING,<br />
                        CRAFTING EXPERIENCES<br />
                        THAT RESONATE AS A GIFT
                    </p>

                    <button className="profile-cta">PRESENT THE PRESENT</button>
                </div>
            </div>
        </section>
    );
}

export default AboutProfile;
