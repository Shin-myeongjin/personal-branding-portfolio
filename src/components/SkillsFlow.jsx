import React, { useState, useEffect } from 'react';
import './SkillsFlow.css';

const SkillsFlow = () => {
    const [activeCards, setActiveCards] = useState(new Set());
    // 스킬 데이터 (3개 컬럼)
    const skills = {
        design: [
            'FIGMA',
            'ADOBE XD',
            'PHOTOSHOP',
            'ILLUSTRATOR',
            'INDESIGN',
            'RHINO 3D',
            'KEYSHOT',
            'AUTO CAD'
        ],
        frontend: [
            'HTML / CSS',
            'JAVASCRIPT',
            'JQUERY',
            'GSAP',
            'SCROLLA.JS',
            'GIT / GITHUB',
            'REACT',
            'VERCEL'
        ],
        ai: [
            'CHATGPT',
            'GEMINI',
            'MIDJOURNEY',
            'NANO BANANA AI'
        ]
    };

    // 카드 데이터 (왼쪽 + 오른쪽)
    const skillCards = [
        {
            id: 1,
            name: 'HTML',
            level: 90,
            side: 'left',
            color: '#EF5927',  // HTML 오렌지
            toolName: 'Visual Studio Code',
            description: '웹 접근성과 SEO를 고려한 시맨틱 마크업을 작성하며,\n다양한 웹 표준에 맞게 구조화합니다.'
        },
        {
            id: 2,
            name: 'CSS',
            level: 85,
            side: 'right',
            color: '#659AC0',  // CSS 블루
            toolName: 'Visual Studio Code',
            description: '반응형 디자인과 애니메이션을 구현하며,\nFlexbox와 Grid를 활용한 레이아웃을 작성합니다.'
        },
        {
            id: 3,
            name: 'JS',
            level: 80,
            side: 'left',
            color: '#E7BA1E',  // JS 옐로우
            toolName: 'Visual Studio Code',
            description: 'ES6+ 문법을 활용하여 인터랙티브한\n웹 경험을 구현합니다.'
        },
        {
            id: 4,
            name: 'FIGMA',
            level: 95,
            side: 'right',
            color: '#0EC682',  // Figma 그린
            toolName: 'Figma',
            description: 'UI/UX 디자인부터 프로토타이핑까지\n전 과정을 효율적으로 진행합니다.'
        },
        {
            id: 5,
            name: 'XD',
            level: 85,
            side: 'left',
            color: '#EF277E',  // XD 핑크
            toolName: 'Adobe XD',
            description: '사용자 중심의 디자인과 프로토타입을\n제작합니다.'
        },
        {
            id: 6,
            name: 'PS',
            level: 90,
            side: 'right',
            color: '#36A1F7',  // Photoshop 블루
            toolName: 'Photoshop',
            description: '이미지 편집과 그래픽 디자인을 통해\n시각적 완성도를 높입니다.'
        },
        {
            id: 7,
            name: 'AI',
            level: 85,
            side: 'left',
            color: '#F39F1D',  // Illustrator 오렌지
            toolName: 'Illustrator',
            description: '벡터 그래픽과 아이콘 디자인을\n정교하게 제작합니다.'
        },
        {
            id: 8,
            name: 'REACT',
            level: 75,
            side: 'right',
            color: '#659AC0',  // React 시안
            toolName: 'Visual Studio Code',
            description: '컴포넌트 기반 개발로 재사용 가능한\nUI를 구축합니다.'
        },
        {
            id: 9,
            name: 'RHINO',
            level: 80,
            side: 'left',
            color: '#EF277E',  // GSAP 그린
            toolName: 'RHINO',
            description: '부드럽고 인상적인 웹 애니메이션을\n구현합니다.'
        },
        {
            id: 10,
            name: 'GEMINI',
            level: 80,
            side: 'right',
            color: '#36A1F7',  // Google 블루
            toolName: 'Google Gemini',
            description: 'AI를 활용하여 창의적인 아이디어와\n효율적인 작업 흐름을 만듭니다.'
        },
        {
            id: 11,
            name: 'MID',
            level: 70,
            side: 'left',
            color: '#E7BA1E',  // Midjourney 시안
            toolName: 'Midjourney',
            description: 'AI 이미지 생성으로 독창적인 비주얼\n콘텐츠를 제작합니다.'
        }
    ];

    const leftCards = skillCards.filter(card => card.side === 'left');
    const rightCards = skillCards.filter(card => card.side === 'right');

    // IntersectionObserver로 카드 활성화
    useEffect(() => {
        // 섹션 전체 감지 (리셋용)
        const section = document.querySelector('.skills-flow-section');

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        // 섹션을 벗어나면 전체 리셋
                        setActiveCards(new Set());
                    }
                });
            },
            {
                threshold: 0
            }
        );

        if (section) {
            sectionObserver.observe(section);
        }

        // 카드별 활성화 감지
        const cardObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const cardId = entry.target.getAttribute('data-card-id');
                    if (entry.isIntersecting) {
                        // 활성화만 하고 비활성화는 안 함 (누적)
                        setActiveCards(prev => new Set(prev).add(cardId));
                    }
                });
            },
            {
                rootMargin: '-50% 0px -80% 0px',
                threshold: 0
            }
        );

        // 모든 카드 관찰
        const cards = document.querySelectorAll('.skill-card');
        cards.forEach(card => cardObserver.observe(card));

        return () => {
            sectionObserver.disconnect();
            cardObserver.disconnect();
        };
    }, []);

    return (
        <section id="skills" className="skills-flow-section">
            {/* 중앙 고정 박스 */}
            <div className="skills-fixed-center">
                <h2 className="skills-title">SKILLS</h2>

                <div className="skills-lists">
                    <div className="skill-category">
                        <h3 className="category-title">DESIGN</h3>
                        <ul className="skill-list">
                            {skills.design.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="skill-category">
                        <h3 className="category-title">FRONTEND</h3>
                        <ul className="skill-list">
                            {skills.frontend.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="skill-category">
                        <h3 className="category-title">AI</h3>
                        <ul className="skill-list">
                            {skills.ai.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* 흐르는 스킬 카드들 */}
            <div className="skills-cards-container">
                {/* 왼쪽 카드 */}
                <div className="skills-cards-left">
                    {leftCards.map((card) => (
                        <div
                            key={card.id}
                            className={`skill-card ${activeCards.has(String(card.id)) ? 'active' : ''}`}
                            data-card-id={card.id}
                        >
                            <div className="skill-card-flipper">
                                {/* 앞면 */}
                                <div className="skill-card-front">
                                    <div className="skill-circle">
                                        <svg viewBox="0 0 100 100">
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="none"
                                                stroke="#333"
                                                strokeWidth="6"
                                            />
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="none"
                                                stroke={card.color}
                                                strokeWidth="6"
                                                strokeLinecap="round"
                                                strokeDasharray={`${2 * Math.PI * 45}`}
                                                strokeDashoffset={`${2 * Math.PI * 45}`}
                                                transform="rotate(-90 50 50)"
                                                className="progress-circle"
                                                style={{ '--target-level': card.level }}
                                            />
                                        </svg>
                                        <span className="skill-name">{card.name}</span>
                                    </div>
                                    <p className="skill-tool-name">{card.toolName}</p>
                                </div>

                                {/* 뒷면 */}
                                <div className="skill-card-back">
                                    <h3 className="skill-back-title">{card.name}</h3>
                                    <p className="skill-back-level">{card.level}%</p>
                                    <p className="skill-back-description">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 오른쪽 카드 */}
                <div className="skills-cards-right">
                    {rightCards.map((card) => (
                        <div
                            key={card.id}
                            className={`skill-card ${activeCards.has(String(card.id)) ? 'active' : ''}`}
                            data-card-id={card.id}
                        >
                            <div className="skill-card-flipper">
                                {/* 앞면 */}
                                <div className="skill-card-front">
                                    <div className="skill-circle">
                                        <svg viewBox="0 0 100 100">
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="none"
                                                stroke="#333"
                                                strokeWidth="6"
                                            />
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="none"
                                                stroke={card.color}
                                                strokeWidth="6"
                                                strokeLinecap="round"
                                                strokeDasharray={`${2 * Math.PI * 45}`}
                                                strokeDashoffset={`${2 * Math.PI * 45}`}
                                                transform="rotate(-90 50 50)"
                                                className="progress-circle"
                                                style={{ '--target-level': card.level }}
                                            />
                                        </svg>
                                        <span className="skill-name">{card.name}</span>
                                    </div>
                                    <p className="skill-tool-name">{card.toolName}</p>
                                </div>

                                {/* 뒷면 */}
                                <div className="skill-card-back">
                                    <h3 className="skill-back-title">{card.name}</h3>
                                    <p className="skill-back-level">{card.level}%</p>
                                    <p className="skill-back-description">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsFlow;
