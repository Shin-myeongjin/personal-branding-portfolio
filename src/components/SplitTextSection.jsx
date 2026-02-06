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
        const pills = section.querySelectorAll('.pill');

        // GSAP Context 사용 (Clean-up 용이)
        let ctx = gsap.context(() => {
            // 초기 상태 설정
            // 왼쪽 텍스트들 -> 오른쪽에서 약간만 이동 (x: 100px) - 은은하게
            gsap.set([left1, left2], { x: 150, opacity: 0 });
            // 오른쪽 텍스트들 -> 왼쪽에서 약간만 이동 (x: -100px) - 은은하게
            gsap.set([right1, right2], { x: -150, opacity: 0 });
            // 알약들 -> 작게 시작 (Scale 0)
            gsap.set(pills, { autoAlpha: 0, scale: 0 });

            // ScrollTrigger 타임라인
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom', // 섹션 상단이 뷰포트 하단에 닿을 때 시작
                    end: 'top top',    // 섹션 상단이 뷰포트 상단에 닿을 때 끝
                    scrub: 1.5,        // 스크롤 동기화 (부드러움 증가)
                }
            });

            // 순차 애니메이션 (부드럽게 겹치며 실행)
            // 텍스트 애니메이션 (Subtle & Smooth)
            tl.to(left1, { x: 0, opacity: 1, duration: 2, ease: 'power2.out' })
                .to(left2, { x: 0, opacity: 1, duration: 2, ease: 'power2.out' }, "<0.2")
                .to(right1, { x: 0, opacity: 1, duration: 2, ease: 'power2.out' }, "<0.2")
                .to(right2, { x: 0, opacity: 1, duration: 2, ease: 'power2.out' }, "<0.2")

                // 알약 애니메이션 (Fast Pop!)
                .to(pills, {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 0.6, // 텍스트보다 훨씬 짧고 빠르게
                    ease: 'back.out(3)' // 강한 반동 (커졌다가 작아짐)
                }, "-=0.5"); // 텍스트 거의 끝날 때쯤 등장

        }, section);

        return () => ctx.revert();
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
