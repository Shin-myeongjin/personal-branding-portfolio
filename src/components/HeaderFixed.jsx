import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeaderFixed.css';

gsap.registerPlugin(ScrollTrigger);

const HeaderFixed = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        // 이미지나 내부 요소가 모두 로드된 후 실행되도록 약간의 지연을 줍니다.
        const timer = setTimeout(() => {
            const sections = document.querySelectorAll('[data-theme]');
            const root = document.documentElement;

            sections.forEach((section) => {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top 78px",
                    end: "bottom 78px",
                    onEnter: () => {
                        console.log(`Enter: ${section.dataset.theme}`); // 디버깅용
                        updateTheme(section.dataset.theme);
                    },
                    onEnterBack: () => {
                        console.log(`EnterBack: ${section.dataset.theme}`); // 디버깅용
                        updateTheme(section.dataset.theme);
                    },
                    onRefresh: (self) => {
                        if (self.isActive) updateTheme(section.dataset.theme);
                    }
                });
            });

            function updateTheme(theme) {
                if (theme === 'white') {
                    headerRef.current.classList.add('on-white');
                    root.style.setProperty('--scrollbar-track', '#ffffff');
                    root.style.setProperty('--scrollbar-thumb', '#161616');
                } else {
                    headerRef.current.classList.remove('on-white');
                    root.style.setProperty('--scrollbar-track', '#161616');
                    root.style.setProperty('--scrollbar-thumb', '#ffffff');
                }
            }

            // 모든 트리거 위치를 재계산
            ScrollTrigger.refresh();
        }, 500); // 0.5초 지연

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
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