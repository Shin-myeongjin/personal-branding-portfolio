import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Timeline.css';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const pathRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        const path = pathRef.current;

        if (!container || !track || !path) return;

        // GSAP Context for cleanup
        const ctx = gsap.context(() => {
            // 1. 가로스크롤 애니메이션 (PIN 추가 + 안전장치)
            gsap.to(track, {
                x: () => -(track.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: () => `+=${track.scrollWidth}`,
                    scrub: 1,
                    pin: true, // 화면 고정
                    pinSpacing: true, // 스크롤 공간 자동 생성
                    anticipatePin: 1, // Pin 예측 (부드러움)
                    invalidateOnRefresh: true, // 새로고침 시 재계산
                }
            });

            // 2. SVG path 그리기 애니메이션 (스크롤하면서 선이 그려짐)
            const pathLength = path.getTotalLength();

            // 초기 상태: 선 숨김
            gsap.set(path, {
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength
            });

            // 스크롤하면서 선 그리기
            gsap.to(path, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: () => `+=${track.scrollWidth}`,
                    scrub: 1,
                }
            });
        }, container);

        return () => ctx.revert();
    }, []);

    const timelineData = [
        {
            year: "2000",
            tag: "LIFE BEGINS",
            description: "신명진의 탄생이 시작된 해입니다."
        },
        {
            year: "2016",
            tag: "GIFT OF EMOTION",
            description: "매주 수원 페이스페인팅 봉사를 하며\n저의 재능이 타인에게 감동이 될 때의 기쁨을 깨달았습니다."
        },
        {
            year: "2019",
            tag: "VALUE OF DRAWING",
            description: "재수시절, 그림계열 인스타를 개설해\n타인에게 인물 드로잉을 선물했습니다.\n어제보다 나은 나를 기록하며 저만의 가치관을 확립했습니다."
        },
        {
            year: "2020 - 23",
            tag: "INDUSTRIAL DESIGN",
            description: "계원예술대학교 입학해 산업디자인을 전공했습니다.\n아동 피해자를 위한 'BLOOMING' 프로젝트 등\n사용자의 모습을 꿈꾸며 제품들을 구체적인 가치로 실체화하며\n사용자의 니즈를 관찰하고 파악하는 법을 알게되었습니다."
        },
        {
            year: "2025",
            tag: "INDUSTRIAL DESIGN",
            description: "아버지와 함께한 기획을 통해 새롭게 탐구를 달이며\n데이터로 문제를 측정 후각 체험하는\nUX/UI의 가능성을 확신하는 계기가 되었습니다."
        },
        {
            year: "2025.08",
            tag: "E-ZEN ACADEMY BOOTCAMP",
            description: "이젠아카데미 DX 부트캠프를 수료했습니다.\n기존에 있던 디자인에 코딩 감각을 더해\n'실무형 디자이너'로 거듭나는 중입니다."
        }
    ];

    return (
        <section className="timeline-wrapper" ref={containerRef}>
            {/* 가로스크롤 컨테이너 */}
            <div className="timeline-container">
                <div className="timeline-track" ref={trackRef}>
                    {/* SVG 배경 경로 - track 안으로 이동 */}
                    <svg
                        className="timeline-path"
                        viewBox="0 0 13443 657"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            ref={pathRef}
                            d="M1.5 225.498C154.5 298.498 578 419 965.5 419C1423.5 419 2234.84 1.49844 2809 1.5C3326.5 1.50141 3672.5 72.498 4050.5 226C4588.91 444.644 5092 399.771 5305 318.998C5640.5 191.772 6313.5 4.50039 6743 4.50039C7280 4.50039 8098 301.998 8658 301.998C9291.5 301.998 9759 118.498 10510.5 89.998C11262 61.498 11471 376.329 11983.5 521.5C12449.5 653.5 12768 639.5 12734 580.5C12700 521.5 12489 548.723 12402.5 580.5C12310 614.498 12319.5 661.998 12423 649.998C12526.5 637.998 12757 491.998 12978.5 491.998C13109 491.998 13293.5 505.998 13441.5 655.498"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* 타임라인 아이템들 */}
                    {timelineData.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-content">
                                <div className="timeline-tag">{item.tag}</div>
                                <h2 className="timeline-year">{item.year}</h2>
                                <p className="timeline-description">{item.description}</p>
                            </div>
                        </div>
                    ))}

                    {/* NOW 풀스크린 섹션 */}
                    <div className="now-section">
                        <h2 className="now-title">NOW</h2>
                        <p className="now-description">
                            지금까지의 성장은 새롭게 시작하다 나는 끊임없이 탐구하며 성장하기 위한 경험들을 쌓아왔습니다.
                            <br />
                            그 과정의 결과물인 UX/UI 프로젝트들을 지금부터 소개합니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
