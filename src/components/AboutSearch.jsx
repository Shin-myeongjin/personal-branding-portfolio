import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutSearch.css';

gsap.registerPlugin(ScrollTrigger);

function AboutSearch() {
    const containerRef = useRef(null);
    const [typedText, setTypedText] = useState('');
    const [showCursor, setShowCursor] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [showPills, setShowPills] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let typingInterval = null;
        let currentStep = 0;

        // ScrollTrigger로 섹션 고정하고 스크롤 진행도에 따라 애니메이션
        const trigger = ScrollTrigger.create({
            trigger: container,
            start: 'top top',
            end: '+=3000', // 충분한 스크롤 공간
            pin: true,
            pinSpacing: true,
            scrub: false,
            onUpdate: (self) => {
                const scrolled = self.progress * 3000;

                // Step 1: 타이핑 시작 (0 ~ 1000px)
                if (scrolled >= 0 && currentStep === 0) {
                    currentStep = 1;
                    setShowCursor(true);

                    const text = 'PRESENT';
                    let index = 0;

                    typingInterval = setInterval(() => {
                        if (index <= text.length) {
                            setTypedText(text.slice(0, index));
                            index++;
                        } else {
                            clearInterval(typingInterval);
                            setShowCursor(false);
                            setShowButton(true); // 타이핑 완료 동시에 버튼 표시!
                            currentStep = 2;
                        }
                    }, 100);
                }

                // Step 2: 버튼 표시됨 (대기 중)

                // Step 3: 검색 결과 표시 (1500 ~ 3000px)
                if (scrolled >= 1500 && currentStep === 2) {
                    currentStep = 3; // 다음 스텝으로 진행
                    setShowButton(false);
                    setShowPills(true);
                }

                // Step 4: 완료 - 스크롤 풀림 (3000px)
                // progress >= 0.99면 자동으로 pin 해제되고 다음 섹션으로
            },
            onEnter: () => {
                // 섹션 진입 시 초기화 (새로고침 대응)
                if (currentStep > 0) {
                    currentStep = 0;
                    setTypedText('');
                    setShowCursor(false);
                    setShowButton(false);
                    setShowPills(false);
                    if (typingInterval) clearInterval(typingInterval);
                }
            },
            onLeaveBack: () => {
                // 위로 스크롤해서 섹션을 벗어나면 리셋
                currentStep = 0;
                setTypedText('');
                setShowCursor(false);
                setShowButton(false);
                setShowPills(false);
                if (typingInterval) clearInterval(typingInterval);
            }
        });

        return () => {
            if (typingInterval) clearInterval(typingInterval);
            trigger.kill();
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

                {showButton && (
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
