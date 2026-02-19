import React, { useState, useRef, useCallback, useEffect } from 'react';
import './ProjectDetail.css';

/**
 * 이미지 슬라이더 컴포넌트
 * - 오토플레이 (3.5초)
 * - 드래그/터치 지원
 * - 데스크탑: 호버 시 어두운 오버레이 + 설명글
 * - 모바일: 오버레이 없이 설명글 슬라이더 아래 항상 표시
 */
function WorkingSlider({ images, hoverDescription }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const dragStartX = useRef(0);
    const dragDelta = useRef(0);
    const autoPlayRef = useRef(null);
    const totalImages = images.length;

    // 오토플레이
    const startAutoPlay = useCallback(() => {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % totalImages);
        }, 3500);
    }, [totalImages]);

    const stopAutoPlay = useCallback(() => {
        clearInterval(autoPlayRef.current);
    }, []);

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
    }, [startAutoPlay, stopAutoPlay]);

    // 마우스 드래그
    const handleMouseDown = useCallback((e) => {
        stopAutoPlay();
        setIsDragging(true);
        dragStartX.current = e.clientX;
        dragDelta.current = 0;
        e.preventDefault();
    }, [stopAutoPlay]);

    const handleMouseMove = useCallback((e) => {
        if (!isDragging) return;
        dragDelta.current = e.clientX - dragStartX.current;
    }, [isDragging]);

    const handleMouseUp = useCallback(() => {
        if (!isDragging) return;
        setIsDragging(false);
        const threshold = 60;
        if (dragDelta.current < -threshold) {
            setCurrentIndex(prev => (prev + 1) % totalImages);
        } else if (dragDelta.current > threshold) {
            setCurrentIndex(prev => (prev - 1 + totalImages) % totalImages);
        }
        dragDelta.current = 0;
        startAutoPlay();
    }, [isDragging, totalImages, startAutoPlay]);

    // 터치
    const handleTouchStart = useCallback((e) => {
        stopAutoPlay();
        dragStartX.current = e.touches[0].clientX;
        dragDelta.current = 0;
    }, [stopAutoPlay]);

    const handleTouchEnd = useCallback((e) => {
        dragDelta.current = e.changedTouches[0].clientX - dragStartX.current;
        const threshold = 60;
        if (dragDelta.current < -threshold) {
            setCurrentIndex(prev => (prev + 1) % totalImages);
        } else if (dragDelta.current > threshold) {
            setCurrentIndex(prev => (prev - 1 + totalImages) % totalImages);
        }
        startAutoPlay();
    }, [totalImages, startAutoPlay]);

    // dot 클릭
    const handleDotClick = useCallback((i) => {
        setCurrentIndex(i);
        startAutoPlay();
    }, [startAutoPlay]);

    return (
        <div className="working-slider">
            {/* 슬라이더 뷰포트 */}
            <div
                className="working-slider-viewport"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={() => { handleMouseUp(); setIsHovered(false); }}
                onMouseEnter={() => setIsHovered(true)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                <div
                    className="working-slider-track"
                    style={{
                        transform: `translateX(${-currentIndex * 100}%)`,
                        transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                >
                    {images.map((src, i) => (
                        <div key={i} className="working-slide">
                            <img src={src} alt={`Working process ${i + 1}`} draggable={false} />
                        </div>
                    ))}
                </div>

                {/* 데스크탑 전용: 호버 시 오버레이 + 설명글 */}
                {hoverDescription && (
                    <div className={`working-slider-overlay ${isHovered && !isDragging ? 'visible' : ''}`}>
                        <p className="working-slider-overlay-text">{hoverDescription}</p>
                    </div>
                )}
            </div>

            {/* 페이지네이션 */}
            {totalImages > 1 && (
                <div className="slider-pagination">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            className={`slider-dot ${i === currentIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(i)}
                            aria-label={`슬라이드 ${i + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* 모바일 전용: 슬라이더 아래 항상 표시 */}
            {hoverDescription && (
                <p className="working-description-mobile">{hoverDescription}</p>
            )}
        </div>
    );
}

/**
 * 프로젝트 상세 섹션 컴포넌트
 */
function ProjectDetail({
    titles = [],
    thumbnailImage,
    workingImages = [],
    workingImage,
    uiImages = [],
    uiLayout = 'phones',
    description,
    links = [],
    chipTags = [],
    progress = [],
    bgColor = 'light',
    showProgress = true,
    additionalText = '',
    showUIScreenshots = true,
    hoverDescription = null
}) {
    const imageList = workingImages.length > 0
        ? workingImages
        : workingImage
            ? [workingImage]
            : [];

    return (
        <section className={`project-detail ${bgColor}`}>
            <div className="project-inner">
                <div className="project-header">
                    {titles.map((title, index) => (
                        <h2 key={index} className="project-title">{title}</h2>
                    ))}
                </div>

                <div className="project-main">
                    {/* 왼쪽 */}
                    <div className="project-left">
                        {thumbnailImage && (
                            <div className="project-thumbnail">
                                <img src={thumbnailImage} alt="Project thumbnail" />
                                {links.length > 0 && (
                                    <div className="thumbnail-hover-overlay">
                                        <div className="thumbnail-buttons">
                                            {links.map((link, index) => (
                                                <a
                                                    key={index}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`thumbnail-link ${link.variant}`}
                                                >
                                                    {link.text}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        <p className="project-description">{description}</p>
                        {links.length > 0 && (
                            <div className="project-links">
                                {links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`project-link ${link.variant}`}
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* 오른쪽 */}
                    <div className="project-right">
                        {imageList.length > 0 && (
                            <WorkingSlider
                                images={imageList}
                                hoverDescription={hoverDescription}
                            />
                        )}
                        {chipTags.length > 0 && (
                            <div className="chip-tags">
                                {chipTags.map((tag, index) => (
                                    <span key={index} className={`chip-tag ${tag.variant}`}>
                                        {tag.text}
                                    </span>
                                ))}
                            </div>
                        )}
                        {showProgress && progress.length > 0 && (
                            <div className="progress-bars">
                                {progress.map((item, index) => (
                                    <div key={index} className="progress-item">
                                        <span className="progress-label">{item.label}</span>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-fill"
                                                style={{ width: `${item.value}%` }}
                                            />
                                        </div>
                                        <span className="progress-value">{item.value}%</span>
                                    </div>
                                ))}
                            </div>
                        )}
                        {!showProgress && additionalText && (
                            <p className="additional-text">{additionalText}</p>
                        )}
                    </div>
                </div>

                {showUIScreenshots && uiImages.length > 0 && (
                    <div className={`ui-screenshots ${uiLayout}`}>
                        {uiImages.map((img, index) => (
                            <div key={index} className="ui-screenshot">
                                <img src={img} alt={`UI Screenshot ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProjectDetail;
