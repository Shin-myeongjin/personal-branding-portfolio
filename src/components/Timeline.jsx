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

        // GSAP MatchMedia
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1201px)", () => {
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
                    anticipatePin: 1, // Pin 예측
                    invalidateOnRefresh: true, // 새로고침 시 재계산
                }
            });

            // 2. SVG path 그리기 애니메이션
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
        });

        // 세로 스크롤 모드 (1200px 이하)
        mm.add("(max-width: 1200px)", () => {
            // 세로 선 그리기 애니메이션
            gsap.fromTo(track,
                {
                    '--line-height': '0%'
                },
                {
                    '--line-height': '85%',
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        start: "top center",
                        end: "80% center",
                        scrub: 1,
                    }
                }
            );
        });

        return () => mm.revert();
    }, []);

    const timelineData = [
        {
            year: "2000",
            tag: "LIFE BEGINS",
            description: "신명진의 현재가 시작된 해입니다."
        },
        {
            year: "2016",
            tag: "GIFT OF EMOTION",
            description: "매주 주말 페이스페인팅 봉사를 하며,저의 재능이 타인에게 선물이 될 때의 기쁨을 깨달았습니다. "
        },
        {
            year: "2019",
            tag: "VALUE OF DRAWING",
            description: "재수시절, 그림계정 인스타를 개설해타인에게 인물 드로잉을 선물했습니다. 어제보다 나은 나를 기록하며 지금의 가치관을 확립했습니다."
        },
        {
            year: "2020 - 23",
            tag: "INDUSTRIAL DESIGN",
            description: "계원예술대학교에 입학해 산업디자인을 전공했습니다. 아동 피해자를 위한 'BLOOMING' 프로젝트 등 사용자의 모호한 불편함을 구체적인 가치로 실체화하며 사용자의 니즈를 관찰하고 파악하는 법을 알게되었습니다."
        },
        {
            year: "2025",
            tag: "UI/UX DESIGN",
            description: "졸업 후 혼자 진행한 앱 기획을 통해 제품의 한계를 넘어 데이터로 문제를 즉각 해결하는 UX/UI의 가능성을 확신하는 계기가 되었습니다."
        },
        {
            year: "2025.08",
            tag: "E-ZEN ACADEMY BOOTCAMP",
            description: "이젠아카데미 DX 부트캠프을 수료하였습니다. 기존에 있던 디자인에 코딩 감각을 더해 ‘실무형 디자이너'로 거듭나는 중입니다."
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
                            지금까지의 성장은 사용자에게 더 나은 경험을 선물하기 위한 과정이었습니다.
                            <br />
                            그 고민의 결과물인 UX/UI 프로젝트들을 지금부터 하나씩 소개합니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
