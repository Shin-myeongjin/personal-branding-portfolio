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
    progress = []
}) {
    return (
        <section className="project-detail">
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

                        {/* 진행도 바 */}
                        {progress.length > 0 && (
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
                    </div>
                </div>

                {/* UI 스크린샷들 - 하단 */}
                {uiImages.length > 0 && (
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
