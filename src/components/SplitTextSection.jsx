import React from 'react';
import './SplitTextSection.css';

/**
 * 재사용 가능한 큰 텍스트 섹션 컴포넌트
 * 
 * Props:
 * - leftTop: 왼쪽 상단 텍스트 (예: "ABOUT")
 * - leftBottom: 왼쪽 하단 텍스트 (예: "ME")
 * - rightTop: 오른쪽 상단 텍스트 (예: "SHIN")
 * - rightBottom: 오른쪽 하단 텍스트 (예: "MYEONGJIN")
 * - pillLeft: 왼쪽 알약 텍스트 (예: "UX/UI DESIGNER") - 선택사항
 * - pillRight: 오른쪽 알약 텍스트 (예: "SEARCH RESULT : PRESENT") - 선택사항
 * - bgColor: 배경색 ("black" 또는 "white")
 */
function SplitTextSection({
    leftTop,
    leftBottom,
    rightTop,
    rightBottom,
    pillLeft,
    pillRight,
    variant,  // 👈 variant prop 추가
    bgColor = "black"
}) {
    return (
        <section className={`sectionTitle bg-${bgColor} ${variant || ''}`}>
            <div className="inner">
                {/* 왼쪽 상단 */}
                <div className="left-1">
                    <h1 className="big-title-1">{leftTop}</h1>
                </div>

                {/* 왼쪽 하단 + 알약 */}
                <div className="left-2">
                    <h1 className="big-title-2">{leftBottom}</h1>
                    {pillLeft && <p className="pill">{pillLeft}</p>}
                </div>

                {/* 오른쪽 상단 */}
                <div className="right-1">
                    {pillRight && <p className="pill">{pillRight}</p>}
                    <h1 className="big-title-3">{rightTop}</h1>
                </div>

                {/* 오른쪽 하단 + 알약 */}
                <div className="right-2">
                    <h1 className="big-title-4">{rightBottom}</h1>

                </div>
            </div>
        </section>
    );
}

export default SplitTextSection;
