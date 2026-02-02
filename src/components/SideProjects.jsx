import React from 'react';
import './SideProjects.css';

/**
 * 사이드 프로젝트 섹션 컴포넌트
 * 
 * Props:
 * - titles: 제목 배열 ["ANOTHER PRESENTS,", "OTHER WORKS."]
 * - projects: 프로젝트 배열 [{ image, tags, description }, ...]
 */
function SideProjects({ titles = [], projects = [] }) {
    return (
        <section className="side-projects">
            <div className="side-projects-inner">
                {/* 제목 영역 */}
                <div className="side-projects-header">
                    {titles.map((title, index) => (
                        <h2 key={index} className="side-projects-title">{title}</h2>
                    ))}
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            {/* 이미지 */}
                            <div className="project-image">
                                <img src={project.image} alt={`Project ${index + 1}`} />
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="image-hover-overlay"
                                    >
                                        <span>VIEW MORE</span>
                                    </a>
                                )}
                            </div>

                            {/* 태그들 */}
                            {project.tags && project.tags.length > 0 && (
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={`project-tag ${tag.variant}`}>
                                            {tag.text}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* 설명 */}
                            {project.description && (
                                <p className="project-description">{project.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SideProjects;
