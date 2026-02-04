import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SplitTextSection.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * 재사용 가능한 큰 텍스트 섹션 컴포넌트
 * 
 * Props:
 * - id: section의 고유 ID (앵커 링크용) - 선택사항
 * - leftTop: 왼쪽 상단 텍스트 (예: "ABOUT")
 * - leftBottom: 왼쪽 하단 텍스트 (예: "ME")
 * - rightTop: 오른쪽 상단 텍스트 (예: "SHIN")
 * - rightBottom: 오른쪽 하단 텍스트 (예: "MYEONGJIN")
 * - pillLeft: 왼쪽 알약 텍스트 (예: "UX/UI DESIGNER") - 선택사항
 * - pillRight: 오른쪽 알약 텍스트 (예: "SEARCH RESULT : PRESENT") - 선택사항
 * - bgColor: 배경색 ("black" 또는 "white")
 */
function SplitTextSection({
    id,
    leftTop,
    leftBottom,
    rightTop,
    rightBottom,
    pillLeft,
    pillRight,
    variant,
    bgColor = "black"
}) {
    const sectionRef = useRef(null);
    const left1Ref = useRef(null);
    const left2Ref = useRef(null);
    const right1Ref = useRef(null);
    const right2Ref = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const left1 = left1Ref.current;
        const left2 = left2Ref.current;
        const right1 = right1Ref.current;
        const right2 = right2Ref.current;

        // 초기 상태 설정
        gsap.set([left1, left2], { x: 200, opacity: 0 }); // 오른쪽에서
        gsap.set([right1, right2], { x: -200, opacity: 0 }); // 왼쪽에서

        // 알약들 초기 상태
        const pills = section.querySelectorAll('.pill');
        gsap.set(pills, {
            scale: 0,
            opacity: 0
        });

        // ScrollTrigger 애니메이션
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 90%', // 섹션 하단이 화면 95% 지점에 닿을 때
                toggleActions: 'play none none reverse'
            }
        });

        // 순차 애니메이션 (빠르게)
        tl.to(left1, {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'power3.out'
        })
            .to(left2, {
                x: 0,
                opacity: 1,
                duration: 0.4,
                ease: 'power3.out'
            }, '-=0.3') // 0.3초 겹침
            .to(right1, {
                x: 0,
                opacity: 1,
                duration: 0.4,
                ease: 'power3.out'
            }, '-=0.3')
            .to(right2, {
                x: 0,
                opacity: 1,
                duration: 0.4,
                ease: 'power3.out'
            }, '-=0.3')
            .to(pills, {
                scale: 1,
                opacity: 1,
                duration: 0.3,
                stagger: 0.05,
                ease: 'back.out(1.7)'
            }, '-=0.2');

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section
            id={id}
            className={`sectionTitle bg-${bgColor} ${variant || ''}`}
            ref={sectionRef}
        >
            <div className="inner">
                {/* 왼쪽 상단 */}
                <div className="left-1" ref={left1Ref}>
                    <h1 className="big-title-1">{leftTop}</h1>
                </div>

                {/* 왼쪽 하단 + 알약 */}
                <div className="left-2" ref={left2Ref}>
                    <h1 className="big-title-2">{leftBottom}</h1>
                    {pillLeft && <p className="pill">{pillLeft}</p>}
                </div>

                {/* 오른쪽 상단 */}
                <div className="right-1" ref={right1Ref}>
                    {pillRight && <p className="pill">{pillRight}</p>}
                    <h1 className="big-title-3">{rightTop}</h1>
                </div>

                {/* 오른쪽 하단 + 알약 */}
                <div className="right-2" ref={right2Ref}>
                    <h1 className="big-title-4">{rightBottom}</h1>

                </div>
            </div>
        </section>
    );
}

export default SplitTextSection;
