import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutSearch.css';

gsap.registerPlugin(ScrollTrigger);

function AboutSearch() {
    const containerRef = useRef(null);
    const [showPills, setShowPills] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const container = containerRef.current;
        const searchBtn = container.querySelector('.search-btn');
        let mainTrigger;

        // 전체 애니메이션을 하나의 ScrollTrigger로 통합
        mainTrigger = ScrollTrigger.create({
            trigger: container,
            start: 'top top',
            end: '+=2000', // 충분한 스크롤 여유
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            onUpdate: (self) => {
                const progress = self.progress;

                // 1단계: 타이핑 (0% ~ 40%)
                if (progress < 0.4) {
                    const typingProgress = progress / 0.4;
                    const text = 'PRESENT';
                    const length = Math.floor(typingProgress * text.length);
                    setTypedText(text.slice(0, length));
                    setShowCursor(true);
                }

                // 2단계: 타이핑 완료, 버튼 활성화 (40% ~ 50%)
                else if (progress >= 0.4 && progress < 0.5) {
                    setTypedText('PRESENT');
                    setShowCursor(false);
                    gsap.to(searchBtn, { opacity: 1, duration: 0.3 });
                }

                // 3단계: 버튼 클릭 애니메이션 (50% ~ 60%)
                else if (progress >= 0.5 && progress < 0.6) {
                    const clickProgress = (progress - 0.5) / 0.1;
                    const scale = 1 - (clickProgress * 0.05);
                    gsap.to(searchBtn, { scale: scale, duration: 0.1 });
                }

                // 4단계: 버튼 사라지고 알약 나타남 (60% ~ 70%)
                else if (progress >= 0.6 && progress < 0.7) {
                    gsap.to(searchBtn, { opacity: 0, scale: 1, duration: 0.3 });
                    setShowPills(true);
                    setTimeout(() => {
                        gsap.to('.pills', { opacity: 1, duration: 0.5 });
                    }, 50);
                }

                // 5단계: 알약 표시 유지 (70% ~ 100%)
                // 마지막 30%는 알약을 보여주는 시간

                // 완료 시 ScrollTrigger 제거
                if (progress >= 0.99) {
                    setTimeout(() => {
                        if (mainTrigger) {
                            mainTrigger.kill();
                        }
                    }, 100);
                }
            }
        });

        return () => {
            if (mainTrigger) {
                mainTrigger.kill();
            }
        };
    }, []);

    return (
        <section className="about-search" ref={containerRef}>
            <div className="search-container">
                <div className="search-bar">
                    <img src="/img/search-icon.svg" alt="search" className="search-icon" />
                    <span className="search-text">
                        {typedText}
                        {showCursor && <span className="cursor">|</span>}
                    </span>
                </div>

                {!showPills && (
                    <button className="search-btn">
                        SEARCH
                    </button>
                )}

                {showPills && (
                    <div className="pills">
                        <button className="pill">현재</button>
                        <button className="pill">선물</button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default AboutSearch;
