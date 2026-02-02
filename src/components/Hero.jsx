import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subTextRef = useRef(null);
    const cursorRef = useRef(null);

    const [displayText, setDisplayText] = useState("PORTFOLIO");

    // 새로고침/마운트 시 강제로 스크롤 최상단 이동
    useLayoutEffect(() => {
        // 즉시 스크롤 최상단으로 이동
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    useEffect(() => {
        // 추가 보험: 컴포넌트 마운트 후에도 한 번 더 실행
        const scrollToTop = () => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        scrollToTop();

        // 약간의 지연 후에도 한 번 더 실행 (브라우저가 스크롤 복원을 시도하는 경우 대비)
        const timer = setTimeout(scrollToTop, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 0. 초기 진입 애니메이션
            // 타이틀이 먼저 나오고, 그 다음 서브 텍스트 등장
            const entryTl = gsap.timeline();

            entryTl.from(titleRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out"
            })
                .from(subTextRef.current.children, {
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    stagger: 0.2, // 이름 먼저, 0.2초 뒤에 알약 등장
                    ease: "power3.out"
                }, "+=0.3"); // 타이틀 직후 약간의 텀을 두고 시작

            // 1. 스크롤 기반 타이핑 애니메이션
            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top", // Hero 섹션 상단이 뷰포트 상단에 닿을 때
                    end: "+=3000",   // 애니메이션이 진행될 스크롤 길이
                    pin: true,       // 섹션 고정
                    scrub: 1,        // 부드러운 스크러빙
                }
            });

            // 커서 노출 로직 (타임라인 연동)
            // 타이핑 구간에서만 커서가 보이도록 설정
            // 0% -> 커서 보임
            // ... 타이핑 진행 ...
            // 100% -> 커서 숨김

            // Since scrub timelines interpolate, we use a step-based approach or very short durations
            // to toggle the visibility "instantly" at start and end.

            // 애니메이션 로직
            const proxy = { value: 0 };
            const original = "PORTFOLIO";
            const target = "PRESENT";

            // 타임라인 길이(duration)를 1로 명시하여 진행률과 일치시킴
            scrollTl.to(proxy, {
                value: 1,
                duration: 1,
                ease: "steps(20)", // 단계별로 끊어지는 느낌 연출
                onUpdate: () => {
                    const progress = proxy.value;

                    // 커서 제어: 애니메이션 진행 중일 때만 보임
                    // 0.01 ~ 0.99 사이에서만 커서 노출 (완전 처음/끝에서는 숨김)
                    if (cursorRef.current) {
                        if (progress > 0.01 && progress < 0.99) {
                            cursorRef.current.style.opacity = 1;
                        } else {
                            cursorRef.current.style.opacity = 0;
                        }
                    }

                    if (progress < 0.5) {
                        // 지우는 단계: PORTFOLIO -> P
                        const deleteProgress = progress * 2;
                        const charsToDelete = Math.floor(deleteProgress * 9);
                        const currentLength = Math.max(1, 9 - charsToDelete);
                        // 첫 글자(P)는 항상 유지
                        setDisplayText(original.substring(0, currentLength));
                    } else {
                        // 쓰는 단계: P -> PRESENT
                        const typeProgress = (progress - 0.5) * 2;
                        const charsToAdd = Math.floor(typeProgress * 7);
                        const addedString = target.substring(1, 1 + charsToAdd);
                        setDisplayText("P" + addedString);
                    }
                }
            }, 0);

            /* 기존 커서 트윈 제거 (onUpdate에서 제어) */
            // (커서 종료 트윈 제거됨)

            // 2. Continuous Blinking Cursor (Independent Loop)
            // This is handled by CSS usually, but we can do JS for precise control.
            // But purely CSS animation on the cursor element itself is better, 
            // while GSAP controls the cursor CONTAINER's opacity.
            // Wait, cursorRef is on the `|` span.
            // Let's use GSAP for blinking to ensure it works even when hidden (logic-wise).
            // Actually CSS is cleaner for infinite blinking.
            // We will let GSAP control the "Presence" (opacity 0 or 1) of the cursor.

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero" ref={containerRef}>
            <div className="video-background">
                <video autoPlay loop muted playsInline>
                    <source src="/video/bg-video.mp4" type="video/mp4" />
                </video>
                <div className="overlay"></div>
            </div>

            <div className="hero-content">
                {/* Main Title */}
                <h1 className="hero-title" ref={titleRef}>
                    <span>{displayText}</span>
                    {/* Cursor is initially hidden via CSS opacity 0 */}
                    <span ref={cursorRef} className="cursor">|</span>
                </h1>

                {/* Sub-text Group */}
                <div className="hero-sub" ref={subTextRef}>
                    <p className="designer-name">SHIN MYEONGJIN</p>
                    <div className="portfolio-pill">
                        2026 UX/UI PORTFOLIO
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
