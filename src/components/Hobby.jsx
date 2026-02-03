import React, { useEffect, useRef } from 'react';
import './Hobby.css';

const Hobby = () => {
    const sectionRef = useRef(null);
    const myRef = useRef(null);
    const hobbyRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current || !myRef.current || !hobbyRef.current) return;

            const image = imageRef.current;
            const imageRect = image.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // 이미지가 화면에 들어온 정도 계산 (0 ~ 1)
            // 스크롤 범위를 조정해서 벌어지는 속도 조절
            const scrollProgress = Math.max(0, Math.min(1,
                (windowHeight - imageRect.top) / (windowHeight * 1.2)
            ));

            // 스크롤 진행도에 따라 좌우로 이동 (0 ~ 700px)
            const moveDistance = scrollProgress * 500;

            // MY는 왼쪽으로, HOBBY는 오른쪽으로
            myRef.current.style.transform = `translateX(-${moveDistance}px)`;
            hobbyRef.current.style.transform = `translateX(${moveDistance}px)`;

            // 설명과 버튼 페이드아웃 (이미지 보이기 전에 사라짐)
            const fadeOpacity = Math.max(0, 1 - scrollProgress * 1.5);
            if (descriptionRef.current) {
                descriptionRef.current.style.opacity = fadeOpacity;
            }
            if (buttonRef.current) {
                buttonRef.current.style.opacity = fadeOpacity;
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 초기 실행

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hobby-section" id="hobby" ref={sectionRef}>
            <div className="hobby-container">
                <div className="hobby-start">
                    <div className="hobby-title-wrapper">
                        <h1 className="hobby-title hobby-my" ref={myRef}>MY</h1>
                        <h1 className="hobby-title hobby-hobby" ref={hobbyRef}>HOBBY</h1>
                    </div>
                    <p className="hobby-description" ref={descriptionRef}>
                        저에게 취미란 단순한 여가를 넘어, 더 나은 경험과 관점을 만들어 주며 저 스스로를 성장할 새로운 기회입니다.<br />
                        작업자로 살아가는 저만의 '선물' 같은 일상들로 지속되고 있습니다.
                    </p>
                    <button className="hobby-button" ref={buttonRef}>MY PRESENTS</button>
                </div>
                <img
                    ref={imageRef}
                    src="/img/hobby_silhouette.png"
                    alt="Hobby Silhouette"
                    className="hobby-silhouette"
                />
            </div>
        </section>
    );
};

export default Hobby;
