import React from 'react';
import './RootSection.css';

const RootSection = () => {
    // 1. 프로젝트 데이터를 const로 관리 (재활용성 극대화)
    const projectList = [
        { id: 1, title: 'BLOOMING', year: '2023', side: 'left', img: '/img/blooming.jpg', link: 'https://www.figma.com/proto/stZT3wUIbiQyv7Ev8bWK0l/%EC%82%B0%EC%97%85%EB%94%94%EC%9E%90%EC%9D%B8?page-id=&node-id=43-15&viewport=-442%2C459%2C0.07&t=w3X5KnPjiEdJjsaN-1&scaling=min-zoom&content-scaling=fixed' },
        { id: 2, title: 'TETRA-MONG', year: '2023', side: 'right', img: '/img/tetra.jpg', link: 'https://www.figma.com/proto/stZT3wUIbiQyv7Ev8bWK0l/%EC%82%B0%EC%97%85%EB%94%94%EC%9E%90%EC%9D%B8?page-id=1%3A5&node-id=64-434&viewport=583%2C483%2C0.1&t=Dx63MONMSIqnztDK-1&scaling=min-zoom&content-scaling=fixed' },
        { id: 3, title: 'BLESS', year: '2023', side: 'left', img: '/img/bless.jpg', link: 'https://www.figma.com/proto/stZT3wUIbiQyv7Ev8bWK0l/%EC%82%B0%EC%97%85%EB%94%94%EC%9E%90%EC%9D%B8?page-id=1%3A4&node-id=81-2&viewport=597%2C603%2C0.08&t=DKTmu2zfuvnNc3QG-1&scaling=min-zoom&content-scaling=fixed' },
        { id: 4, title: 'SALRANG SALRANG', year: '2023', side: 'right', img: '/img/salrang.jpg', link: 'https://www.figma.com/proto/stZT3wUIbiQyv7Ev8bWK0l/%EC%82%B0%EC%97%85%EB%94%94%EC%9E%90%EC%9D%B8?page-id=1%3A3&node-id=54-485&viewport=474%2C498%2C0.3&t=WkDQUlwm9MfOnB0r-1&scaling=min-zoom&content-scaling=fixed' },
        { id: 5, title: 'PETA', year: '2023', side: 'left', img: '/img/peta.jpg', link: 'https://www.figma.com/proto/stZT3wUIbiQyv7Ev8bWK0l/%EC%82%B0%EC%97%85%EB%94%94%EC%9E%90%EC%9D%B8?page-id=1%3A2&node-id=64-105&viewport=505%2C520%2C0.3&t=et34wAl78bKj82qO-1&scaling=min-zoom&content-scaling=fixed' },
    ];


    return (
        <div className="portfolio-wrap" >

            <section className="roots-section">
                {/* 중앙 고정 텍스트 */}
                <div className="sticky-center">
                    <h2 className="roots-title">ROOTS</h2>
                    <p className="roots-desc">
                        사용자가 원하는 니즈를 포착하고<br />
                        해결책을 제품으로 구현한 산업디자인 작품입니다.<br />
                        가치 있는 경험을 선물하기 위한 소중한 시작점입니다.
                    </p>
                </div>

                {/* 프로젝트 박스 래퍼 (브라우저 양 끝 182px 기준) */}
                <div className="boxes-wrap">
                    {/* 왼쪽 라인: side가 'left'인 것만 필터링해서 렌더링 */}
                    <div className="leftline">
                        {projectList.filter(item => item.side === 'left').map(project => (
                            <div key={project.id} className="project-item">
                                <div className="img_box">
                                    <img src={project.img} alt={project.title} />
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover-overlay">
                                        <span>VIEW MORE</span>
                                    </a>
                                </div>
                                <div className="project-info">
                                    <span className="tag project">{project.title}</span>
                                    <span className="tag year">{project.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 오른쪽 라인: side가 'right'인 것만 필터링해서 렌더링 */}
                    <div className="rightline">
                        {projectList.filter(item => item.side === 'right').map(project => (
                            <div key={project.id} className="project-item">
                                <div className="img_box">
                                    <img src={project.img} alt={project.title} />
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover-overlay">
                                        <span>VIEW MORE</span>
                                    </a>
                                </div>
                                <div className="project-info">
                                    <span className="tag project">{project.title}</span>
                                    <span className="tag year">{project.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RootSection;