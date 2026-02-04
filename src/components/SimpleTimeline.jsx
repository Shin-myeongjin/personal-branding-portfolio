import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SimpleTimeline.css';

gsap.registerPlugin(ScrollTrigger);

const SimpleTimeline = () => {
    const component = useRef(null);
    const svgRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // SVG 가로 스크롤
            gsap.to(svgRef.current, {
                x: () => -(svgRef.current.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: component.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => "+=" + svgRef.current.scrollWidth,
                    invalidateOnRefresh: true,
                }
            });
        }, component);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section className="simple-timeline" ref={component}>
            <div className="svg-container" ref={svgRef}>
                <svg
                    width="5611"
                    height="743"
                    viewBox="0 0 5611 743"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path
                        d="M0.0192871 467.5C103.186 466.167 354.719 431.2 535.519 302C761.519 140.5 858.019 51 1064.02 51C1288.52 51 1435.52 344.5 1686.52 344.5C1937.52 344.5 2052.02 131.5 2289.52 131.5C2527.02 131.5 2728.52 1.5 2910.02 1.5C3365.52 1.5 3473.02 693.5 4671.52 693.5C4776.85 687.833 4962.72 667.5 4863.52 631.5C4739.52 586.5 4398.31 683.838 4496.52 718.5C4581.52 748.5 4706.02 675 4813.52 639C4921.02 603 5296.02 494.5 5628.02 741.5"
                        stroke="white"
                        strokeWidth="3"
                    />
                </svg>
            </div>
        </section>
    );
};

export default SimpleTimeline;
