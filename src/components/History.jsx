import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './History.css';

gsap.registerPlugin(ScrollTrigger);

function History() {
    const sectionRef = useRef(null);

    const cards = [
        { tag: 'BIRTH', year: '1998', desc: '경기도 성남시에서 태어났습니다.' },
        { year: '2017', desc: '성남고등학교를 졸업했습니다.' },
        { year: '2017', desc: '한국외국어대학교 중국어과에 입학했습니다.' },
        { year: '2019', desc: '중국 베이징 칭화대학교 교환학생으로 1년간 유학했습니다.' },
        { year: '2023', desc: '한국외국어대학교를 졸업했습니다.' },
        { tag: 'PRESENT', year: '2024', desc: 'UX/UI 디자인을 공부하며 포트폴리오를 준비하고 있습니다.' }
    ];

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const items = section.querySelectorAll('.timeline-item');

        // 초기 상태
        gsap.set(items, { opacity: 0, y: 50 });

        // ScrollTrigger로 순차 등장
        items.forEach((item, index) => {
            gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.trigger && items.length && Array.from(items).includes(trigger.vars.trigger)) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        <section className="history-section" ref={sectionRef}>
            <div className="history-container">
                <h2 className="history-title">HISTORY</h2>

                <div className="timeline-vertical">
                    {cards.map((card, index) => (
                        <div key={index} className="timeline-item">
                            {card.tag && (
                                <div className="timeline-tag">{card.tag}</div>
                            )}
                            <div className="timeline-content">
                                <span className="timeline-year">{card.year}</span>
                                <p className="timeline-desc">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default History;
