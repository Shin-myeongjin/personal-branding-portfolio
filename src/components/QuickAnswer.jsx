import React, { useState } from 'react';
import './QuickAnswer.css';

function QuickAnswer() {
    // 🔥 여기서 질문과 답변을 자유롭게 수정하세요!
    const faqs = [
        {
            id: 1,
            question: '산업디자인에서 UX/UI로 전향한 특별한 계기가 있나요?',
            answer: '현재의 불편함을 즉시 해결하는 가장 확실한 선물이기 때문입니다.\n산업디자인을 전공하며 제품을 만들었지만, 한 번 생산되면 고칠 수 없는 과거의 산물이 된다는 점이 늘 아쉬웠습니다.\n반면 웹과 앱은 데이터와 피드백을 통해 문제를 즉각 수정하며 현재를 바꿀 수 있다는 점이 매력적이었습니다.\n시공간의 제약 없이 수많은 사람에게 매일 업데이트되는 편리함을 선물하고 싶어 UX/UI 디자이너가 되고 싶습니다.'
        },
        {
            id: 2,
            question: '코드 협업 경험이 있나요?',
            answer: '6개월간 이젠아카데미에서 기획부터 디자인, 개발, 배포까지 전 과정을 직접 경험하며 \n구현 가능성을 고려한 설계 습관을 길렀습니다.\n 모호한 설명보다 시각적 프로토타입으로 개발자의 언어로 소통하며 \n최선의 구현 방안을 함께 고민하는 협업에 최적화된 디자이너가 되겠습니다.'
        },
        {
            id: 3,
            question: '본인의 강점/약점과 이를 보완하기 위한 루틴은?',
            answer: '저의 가장 큰 장점은 피드백을 열린 태도로 수용하여 더 나은 결과를 만들어내는 유연함입니다.\n아웃북 프로젝트 당시 기획이 딱딱하다는 피드백을 수용해 캐릭터와 직관적인 가이드를 도입하여 앱의 가치를 친근하게 전달했습니다.\n반면 더 많은 가치를 선물하고 싶은 욕심에 기획 단계에서 기능을 과하게 담으려는 성향이 있습니다. \n이를 보완하기 위해 이 기능이 문제 해결에 반드시 필요한가라는 질문을 스스로 던지며 핵심만 남기는 MVP 모델을 우선적으로 구축하는 덜어내기 훈련을 하고 있습니다.'
        },
        {
            id: 4,
            question: '좋은 팀문화를 어떻게 정의하고 합류 후 90일 계획은?',
            answer: '제가 생각하는 좋은 팀문화는 구성원이 서로의 의견을 존중하고 하나의 목표를 향해 달리는 환경입니다. \n입사 후 30일 동안은 팀의 프로세스와 디자인 시스템을 완벽히 파악하겠습니다. \n60일 차에는 실무 프로젝트에 본격적으로 참여하여 피드백을 반영한 성과를 내고, \n90일이 되었을 때는 능동적으로 개선안을 제안하며 팀의 성장에 실질적으로 기여하는 팀원이 되겠습니다'
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