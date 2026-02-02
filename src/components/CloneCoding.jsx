import React, { useEffect, useRef, useState } from 'react';
import './CloneCoding.css';

/**
 * CloneCoding 컴포넌트
 * 
 * Props:
 * - items: 클론코딩 프로젝트 배열
 *   [{ id, name, year, image, link }, ...]
 */
const CloneCoding = ({ items = [] }) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [showViewer, setShowViewer] = useState(false);
    const itemRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                let anyActive = false;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        anyActive = true;
                        const index = parseInt(entry.target.getAttribute('data-index'));
                        setActiveIndex(index);
                        setShowViewer(true);
                    }
                });

                // 아무것도 중앙에 없으면 뷰어 숨김
                if (!anyActive) {
                    setShowViewer(false);
                }
            },
            {
                rootMargin: '-49% 0px -49% 0px',
                threshold: 0
            }
        );

        const currentRefs = itemRefs.current;
        currentRefs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            currentRefs.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [items]);

    const handleItemClick = (index) => {
        itemRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    };

    const activeItem = activeIndex >= 0 ? items[activeIndex] : null;

    return (
        <section className="clone-coding-section">
            {/* 고정 헤더 */}
            <div className="clone-fixed-header">
                <div className="clone-header-top">
                    <div className="clone-header-title">
                        <span>CLONE CODING</span>
                    </div>
                    <div className="clone-header-line"></div>

                </div>
            </div>

            {/* 중앙 고정 이미지 뷰어 */}
            <div className={`clone-image-viewer ${showViewer ? 'show' : ''}`}>
                {activeItem && (
                    <a
                        href={activeItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clone-image-link"
                    >
                        <img src={activeItem.image} alt={activeItem.name} />
                    </a>
                )}
            </div>

            {/* 스크롤 리스트 */}
            <div className="clone-scroll-list">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        ref={(el) => (itemRefs.current[index] = el)}
                        data-index={index}
                        className={`clone-item-row ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleItemClick(index)}
                    >
                        <div className="clone-col-left">{item.name}</div>
                        <div className="clone-col-right">
                            <span>{item.name}</span>
                            <span>{item.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CloneCoding;
