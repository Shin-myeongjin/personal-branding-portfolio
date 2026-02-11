import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeaderFixed.css';

gsap.registerPlugin(ScrollTrigger);

const HeaderFixed = () => {
    const headerRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isWhite, setIsWhite] = React.useState(false);

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
                        updateTheme(section.dataset.theme);
                    },
                    onEnterBack: () => {
                        updateTheme(section.dataset.theme);
                    },
                    onRefresh: (self) => {
                        if (self.isActive) updateTheme(section.dataset.theme);
                    }
                });
            });

            function updateTheme(theme) {
                if (theme === 'white') {
                    setIsWhite(true);
                    root.style.setProperty('--scrollbar-track', '#ffffff');
                    root.style.setProperty('--scrollbar-thumb', '#161616');
                } else {
                    setIsWhite(false);
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // 메뉴 항목 클릭 시 메뉴 닫기
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`header-fixed ${isMenuOpen ? 'menu-open' : ''} ${isWhite ? 'on-white' : ''}`}
            ref={headerRef}
        >
            <div className="logo"><a href="#hero" onClick={handleLinkClick}>PRESENT PORTFOLIO</a></div>

            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
            </div>

            <nav className={isMenuOpen ? 'active' : ''}>
                <ul>
                    <li className="has-dropdown">
                        <a href="#about" onClick={handleLinkClick}>ABOUT</a>
                        <ul className="dropdown">
                            <li><a href="#concept" onClick={handleLinkClick}>CONCEPT</a></li>
                            <li><a href="#profile" onClick={handleLinkClick}>PROFILE</a></li>
                            <li><a href="#keyword" onClick={handleLinkClick}>KEYWORD</a></li>
                            <li><a href="#skills" onClick={handleLinkClick}>SKILLS</a></li>
                            <li><a href="#timeline" onClick={handleLinkClick}>TIMELINE</a></li>
                        </ul>
                    </li>
                    <li className="has-dropdown">
                        <a href="#works" onClick={handleLinkClick}>WORKS</a>
                        <ul className="dropdown">
                            <li><a href="#works" onClick={handleLinkClick}>UXUI</a></li>
                            <li><a href="#industrial" onClick={handleLinkClick}>INDUSTRIAL</a></li>
                            <li><a href="#clone-coding" onClick={handleLinkClick}>CLONE CODING</a></li>
                            <li><a href="#side-project" onClick={handleLinkClick}>SIDE PROJECT</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#hobby" onClick={handleLinkClick}>HOBBY</a>
                    </li>
                    <li className="has-dropdown">
                        <a href="#quick-answer" onClick={handleLinkClick}>CONTACT</a>
                        <ul className="dropdown">
                            <li><a href="#qna" onClick={handleLinkClick}>Q&A</a></li>
                            <li><a href="#contact" onClick={handleLinkClick}>CONTACT</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderFixed;