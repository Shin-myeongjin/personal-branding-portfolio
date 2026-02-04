import { useRef, useEffect } from "react";
import "./Keywords.css";

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
        const section = containerRef.current;
        if (!section) return;

        const items = Array.from(section.querySelectorAll('.keyword-item'));
        if (items.length === 0) return;

        const handleScroll = () => {
            const viewportCenter = window.innerHeight / 2;

            // 각 키워드의 위치를 확인하고 viewport center에 가장 가까운 것 찾기
            let closestIndex = -1;
            let closestDistance = Infinity;

            items.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                const itemCenter = rect.top + rect.height / 2;
                const distance = Math.abs(itemCenter - viewportCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            // 모든 active 제거 후 가장 가까운 것만 활성화
            items.forEach((item, index) => {
                if (index === closestIndex) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // 초기 호출

        return () => window.removeEventListener('scroll', handleScroll);
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
