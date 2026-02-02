import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Header.css';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        const showAnim = gsap.from(headerRef.current, {
            yPercent: -100,
            paused: true,
            duration: 0.3,
            ease: "power2.inOut"
        }).progress(1); // 초기 상태: 보임

        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                // self.direction === 1 (아래로 스크롤) -> 숨김
                // self.direction === -1 (위로 스크롤) -> 보임
                if (self.direction === 1) {
                    showAnim.reverse();
                } else {
                    showAnim.play();
                }
            }
        });
    }, []);

    return (
        <header className="header" ref={headerRef}>
            <div className="logo"><a href="#home">PRESENT PORTFOLIO</a></div>
            <nav>
                <ul>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#works">WORKS</a></li>
                    <li><a href="#hobby">HOBBY</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
