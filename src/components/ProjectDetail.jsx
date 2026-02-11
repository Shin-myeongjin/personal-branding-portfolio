import React from 'react';
import './ProjectDetail.css';

/**
 * 프로젝트 상세 섹션 컴포넌트
 * 
 * Props:
 * - titles: 제목 배열 ["OUTBOOK", "2025 UXUI DESIGN", ...]
 * - thumbnailImage: 왼쪽 큰 썸네일 이미지 경로
 * - workingImage: 작업 사진 이미지 경로
 * - uiImages: UI 스크린샷 배열 [img1, img2]
 * - uiLayout: UI 이미지 레이아웃 ('phones' | 'laptop') - 기본값: 'phones'
 * - description: 프로젝트 설명 (줄바꿈 포함 가능)
 * - links: 버튼 링크 배열 [{ text, url, variant }]
 * - chipTags: 상단 태그 배열 [{ text, variant }]
 * - progress: 진행도 배열 [{ label, value }] (최대 3개)
 * - bgColor: 배경 테마 ('light' | 'dark') - 기본값: 'light'
 * - showProgress: 진행도 바 표시 여부 - 기본값: true
 * - additionalText: 진행도 바 대신 표시할 추가 텍스트
 * - showUIScreenshots: UI 스크린샷 섹션 표시 여부 - 기본값: true
 * - hoverDescription: 작업사진 호버 시 표시할 설명 (선택적)
 */
function ProjectDetail({
    titles = [],
    thumbnailImage,
    workingImage,
    uiImages = [],
    uiLayout = 'phones', // 'phones' or 'laptop'
    description,
    links = [],
    chipTags = [],
    progress = [],
    bgColor = 'light', // 'light' or 'dark'
    showProgress = true,
    additionalText = '',
    showUIScreenshots = true,
    hoverDescription = null // 작업사진 호버 설명 (선택적)
}) {
    return (
        <section className={`project-detail ${bgColor}`}>
            <div className="project-inner">
                {/* 제목 영역 */}
                <div className="project-header">
                    {titles.map((title, index) => (
                        <h2 key={index} className="project-title">{title}</h2>
                    ))}
                </div>

                {/* 메인 콘텐츠 - 2컬럼 그리드 */}
                <div className="project-main">
                    {/* 왼쪽 컬럼: 썸네일 + 설명 + 버튼 */}
                    <div className="project-left">
                        {thumbnailImage && (
                            <div className="project-thumbnail">
                                <img src={thumbnailImage} alt="Project thumbnail" />
                                {/* 호버 오버레이 */}
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

                    {/* 오른쪽 컬럼: 작업사진 + 태그 + 진행도 */}
                    <div className="project-right">
                        {workingImage && (
                            <div className="working-photo">
                                <img src={workingImage} alt="Working process" />

                                {/* 호버 힌트 (항상 표시) */}
                                {hoverDescription && (
                                    <>
                                        {/* 우측 상단 정보 아이콘 */}
                                        <div className="working-photo-hint-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                                                <path d="M12 16V12M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </div>

                                        {/* 호버 시 전체 설명 오버레이 */}
                                        <div className="working-photo-hover-overlay">
                                            <div className="working-photo-description">
                                                {hoverDescription}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        {/* 태그들 */}
                        {chipTags.length > 0 && (
                            <div className="chip-tags">
                                {chipTags.map((tag, index) => (
                                    <span key={index} className={`chip-tag ${tag.variant}`}>
                                        {tag.text}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* 모바일용 설명 (768px 이하에서만 표시) */}
                        {hoverDescription && (
                            <div className="working-photo-mobile-description">
                                {hoverDescription}
                            </div>
                        )}

                        {/* 진행도 바 또는 추가 텍스트 */}
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

                {/* UI 스크린샷들 - 하단 */}
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
