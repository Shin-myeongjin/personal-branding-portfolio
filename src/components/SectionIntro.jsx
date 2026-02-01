import React from "react";
import "./SectionIntro.css";

const SectionIntro = ({
    title,
    description,
    pill,
    showScrollHint = false,
    bgColor = "#161616"
}) => {
    return (
        <section className="section-intro" style={{ background: bgColor }}>
            <div className="intro-content">
                <h2 className="intro-title">{title}</h2>
                <p className="intro-description">{description}</p>
                {pill && (
                    <div className="intro-pill">{pill}</div>
                )}
            </div>

            {showScrollHint && (
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

export default SectionIntro;
