import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Keywords.css";

gsap.registerPlugin(ScrollTrigger);

const Keywords = () => {
    const containerRef = useRef(null);

    const keywords = [
        { text: "PRESENT", align: "left" },
        { text: "BE", align: "left-indent" },
        { text: "BETTER THAN", align: "center" },
        { text: "YESTERDAY", align: "left-indent" },
        { text: "FOCUS", align: "left" },
        { text: "GIFT", align: "left-indent" },
        { text: "RIGHT NOW", align: "center" },
        { text: "COMMUNICATION", align: "left-indent" },
        { text: "CONNECT", align: "left" },
        { text: "VALUE", align: "left-indent" },
        { text: "DESIGNER", align: "center" }
    ];

    useEffect(() => {
        const items = gsap.utils.toArray('.keyword-item');

        items.forEach((item) => {
            ScrollTrigger.create({
                trigger: item,
                start: "center center",
                end: "center center",
                onEnter: () => item.classList.add('active'),
                onLeave: () => item.classList.remove('active'),
                onEnterBack: () => item.classList.add('active'),
                onLeaveBack: () => item.classList.remove('active'),
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <section ref={containerRef} className="keywords-section">
            <div className="keyword-pill">MY KEYWORD</div>

            {keywords.map((keyword, index) => (
                <div key={index} className={`keyword-item align-${keyword.align}`}>
                    <h1 className="keyword-title">{keyword.text}</h1>
                </div>
            ))}
        </section>
    );
};

export default Keywords;
