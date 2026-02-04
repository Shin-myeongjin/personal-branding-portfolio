import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeaderFixed.css';

gsap.registerPlugin(ScrollTrigger);

const HeaderFixed = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        // 스크롤에 따라 배경색 변경
        ScrollTrigger.create({
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: () => {
                // 헤더 위치에서 요소 확인 (브라우저 상단 = 헤더 위치)
                const elements = document.elementsFromPoint(window.innerWidth / 2, 100);

                // Hero 섹션 확인
                const isInHero = elements.some(el =>
                    el.classList && el.classList.contains('hero-container')
                );

                // Hero 섹션이면 스크롤바 숨김 처리
                if (isInHero) {
                    return;
                }

                // About부터: 흰색 배경 섹션 찾기
                const isOnWhiteSection = elements.some(el => {
                    // 검은색 섹션 명시적 제외
                    if (el.classList && (
                        el.classList.contains('quick-answer-section') ||
                        el.classList.contains('bg-black') ||
                        el.classList.contains('hobby-change-section')
                    )) {
                        return false;
                    }

                    const bgColor = window.getComputedStyle(el).backgroundColor;
                    const isWhiteBg = bgColor === 'rgb(255, 255, 255)' ||
                        el.classList.contains('bg-white');

                    // 섹션 레벨 요소만 체크
                    const isSectionElement = el.tagName === 'SECTION' ||
                        el.classList.contains('about-profile') ||
                        el.classList.contains('side-projects');

                    return isWhiteBg && isSectionElement;
                });

                if (isOnWhiteSection) {
                    headerRef.current.classList.add('on-white');
                } else {
                    headerRef.current.classList.remove('on-white');
                }

                // 스크롤바 색상 변경
                const root = document.documentElement;
                if (isOnWhiteSection) {
                    root.style.setProperty('--scrollbar-track', '#fff');
                    root.style.setProperty('--scrollbar-thumb', '#161616');
                } else {
                    root.style.setProperty('--scrollbar-track', '#161616');
                    root.style.setProperty('--scrollbar-thumb', '#fff');
                }
            }
        });
    }, []);

    return (
        <header className="header-fixed" ref={headerRef}>
            <div className="logo"><a href="#hero">PRESENT PORTFOLIO</a></div>
            <nav>
                <ul>
                    <li><a href="#hero">HERO</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#works">WORKS</a></li>
                    <li><a href="#hobby">HOBBY</a></li>
                    <li><a href="#quick-answer">Q&A</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderFixed;
