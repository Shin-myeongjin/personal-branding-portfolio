import React from "react";
import "./PresentStory.css";

const PresentStory = () => {
    return (
        <section className="present-story-section">
            <div className="story-content">
                <h2 className="story-title">PRESENT STORY</h2>
                <p className="story-description">
                    더 나은 경험을 선물하기 위해 탐구된 성장의 기록입니다.
                    <br />
                    수많은 고민과 시도가 쌓여 만들어진 현재의 가치를 확인해 보세요.
                </p>
            </div>

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
        </section>
    );
};

export default PresentStory;
