import React from "react";
import "./TextSection.css";

/**
 * 재사용 가능한 텍스트 섹션 컴포넌트
 * 
 * Props:
 * - title: 제목 텍스트
 * - description: 설명 텍스트 (배열 또는 문자열)
 * - showArrow: 화살표 표시 여부 (기본값: false)
 * - buttonText: 버튼 텍스트 (있으면 버튼 표시)
 * - buttonLink: 버튼 링크 URL
 */
const TextSection = ({
    title,
    description,
    showArrow = false,
    buttonText
}) => {
    return (
        <section className="text-section">
            <div className="text-content">
                <h2 className="text-title">{title}</h2>
                <p className="text-description">
                    {Array.isArray(description)
                        ? description.map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < description.length - 1 && <br />}
                            </React.Fragment>
                        ))
                        : description
                    }
                </p>

                {/* 태그 (있으면 표시) - 클릭 불가능한 장식용 */}
                {buttonText && (
                    <span className="text-tag">
                        {buttonText}
                    </span>
                )}
            </div>

            {/* 화살표 (showArrow가 true면 표시) */}
            {showArrow && (
                <div className="scroll-hint">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 5V19M12 19L19 12M12 19L5 12"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            )}
        </section>
    );
};

export default TextSection;
