import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useThemeColor = () => {
    useEffect(() => {
        const themes = document.querySelectorAll('[data-theme]');

        themes.forEach((theme) => {
            const themeColor = theme.getAttribute('data-theme');
            const isBlackTheme = themeColor === 'black';
            const bgColor = isBlackTheme ? '#161616' : '#fff';
            const textColor = isBlackTheme ? '#fff' : '#161616';

            ScrollTrigger.create({
                trigger: theme,
                start: "top 50%", // 섹션의 상단이 화면 중앙에 올 때
                end: "bottom 50%", // 섹션의 하단이 화면 중앙에 올 때
                onEnter: () => gsap.to("body", {
                    backgroundColor: bgColor,
                    color: textColor,
                    duration: 0.8,
                    ease: "power2.inOut"
                }),
                onEnterBack: () => gsap.to("body", {
                    backgroundColor: bgColor,
                    color: textColor,
                    duration: 0.8,
                    ease: "power2.inOut"
                }),
                // markers: false
            });
        });

        // Cleanup function (optional, but good practice)
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
};

export default useThemeColor;
