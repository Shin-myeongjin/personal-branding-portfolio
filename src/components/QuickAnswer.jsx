import React, { useState } from 'react';
import './QuickAnswer.css';

function QuickAnswer() {
    // 🔥 여기서 질문과 답변을 자유롭게 수정하세요!
    const faqs = [
        {
            id: 1,
            question: 'UX/UI 디자이너를 선택한 이유는 무엇인가요?',
            answer: '사용자의 불편함을 해결하고, 더 나은 경험을 설계하는 일에 보람을 느꼈기 때문입니다. 디자인을 통해 사람들의 일상을 개선할 수 있다는 점이 매력적이었습니다.'
        },
        {
            id: 2,
            question: '코드 협업 경험이 있나요?',
            answer: 'Git과 GitHub를 활용한 버전 관리 경험이 있으며, 개발자와의 원활한 소통을 위해 직접 코드를 학습하고 있습니다. 디자인 시스템 구축 경험도 있습니다.'
        },
        {
            id: 3,
            question: '본인의 강점/약점과 이를 보완하기 위한 루틴은?',
            answer: '피드백을 양분 삼아 빠르게 적응하는 "영양제"가 실천입니다.\n강점: 디자인 피드백을 유연하게 수용하여 결과물의 완성도를 높이는 능력\n\n보완 루틴: 많은 기획서 전공 마인드 속에서 "이것이 만들어지기"를 처음에게 고민하여\n기획 단계에서 "이것이 문제에 해결 방식으로 필요한가?"를 처음부터 구조화하는 훈련을 배우고 있습니다.'
        },
        {
            id: 4,
            question: '좋은 팀문화를 어떻게 정의하고 합류 후 90일 계획은?',
            answer: '좋은 팀문화는 서로의 의견을 존중하고, 함께 성장하는 환경이라고 생각합니다.\n\n90일 계획:\n1개월: 팀 프로세스와 디자인 시스템 파악\n2개월: 실무 프로젝트 참여 및 피드백 반영\n3개월: 주도적으로 프로젝트 리드 및 개선 제안'
        }
    ];

    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="quick-answer-section">
            <div className="quick-answer-tag">QUICK ANSWERS</div>

            <div className="faq-list">
                {faqs.map((faq) => (
                    <div
                        key={faq.id}
                        className={`faq-item ${hoveredId === faq.id ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredId(faq.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <h3 className="faq-question">{faq.question}</h3>
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default QuickAnswer;