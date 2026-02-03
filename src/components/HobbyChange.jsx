import React, { useState, useEffect, useRef } from 'react';
import './HobbyChange.css';

const HobbyChange = () => {
    const [activeHobby, setActiveHobby] = useState(0);
    const imageRefs = useRef([]);

    // 취미 데이터 (4개 hobby × 5개 이미지 = 20개)
    const hobbies = [
        {
            id: 1,
            title: 'DRAWING',
            description: '꾸준히 운영중인 드로잉 계정은 \n저를 기록하는 저만의 소중한 아카이브입니다.\n\n거친 선과 미니멀한 색채로 일상의 본질을 포착하며,\n많은 분과 그림을 통해 따뜻한 영감을 주고받고 있습니다.\n\n취미로 참여한 단체 전시회에서는 저만의 시선이 담긴 작품들을 선보였습니다.\n누군가에게 저의 그림이 하나의 선물이 되는 순간을 목격하며,\n 제가 사람들에게 전하고 싶은 진정한 마음의 가치를 다시 한번 확인했습니다.',
            link: 'https://www.instagram.com/p/DNMm_VMSvXG/?igsh=cHh2MHlqN25xaGZ0',
            images: [
                '/img/drawing1.jpg',
                '/img/drawing2.jpg',
                '/img/drawing3.jpg',
                '/img/drawing4.jpg',
                '/img/drawing5.jpg'
            ]
        },
        {
            id: 2,
            title: 'COOKING',
            description: '저에게 요리는 가장 정성스럽게 준비하여 건네는 맛있는 선물입니다.\n\n 언젠가 맞이할 저의 완전한 독립을 위해,\n건강한 한 끼를 스스로 대접할 수 있는 능력을 미리 길러두려 합니다.\n\n블로그  cookinman은 제 취향인 레시피들을 기록한 요리 일기장입니다.\n\n기록해두지 않으면 흩어져 버릴 지금의 취향들을 차곡차곡 모으는 이 시간은, \n더 나은 내일을 준비하며 현재를 소중히 여기는 저만의 소중한 취미중 하나입니다.',
            link: 'https://blog.naver.com/cookinman',
            images: [
                '/img/cooking1.jpg',
                '/img/cooking2.jpg',
                '/img/cooking3.jpg',
                '/img/cooking4.jpg',
                '/img/cooking5.jpg'
            ]
        },
        {
            id: 3,
            title: 'PHOTO',
            description: '저에게 사진은 찰나의 현재를 붙잡아 스스로에게 건네는 가장 솔직한 선물입니다.\n\n카메라 렌즈를 통해 세상을 들여다보며, \n일상 속에 숨어 있어 쉽게 지나칠 법한 반짝이는 순간들을 기록합니다. \n\n이렇게 쌓인 기록들은 훗날 다시 꺼내 볼 수 있는 소중한 기억의 선물이 됩니다. \n지금 이 순간을 소중히 여기고 정성껏 기록하는 태도, \n그것이 제가 사진이라는 취미를 통해 현재를 기록하는 방식입니다.',
            link: 'https://www.instagram.com/p/C6iFgJePUJ3/?igsh=aXozNWVyMTlwcW16',
            images: [
                '/img/photo1.jpg',
                '/img/photo2.jpg',
                '/img/photo3.jpg',
                '/img/photo4.jpg',
                '/img/photo5.jpg'
            ]
        },
        {
            id: 4,
            title: 'CERAMIC',
            description: '저에게 도자기를 빚는 시간은 복잡한 생각과 스트레스를 비워내고, \n오직 현재의 감각에 집중하는 스트레스 관리 취미입니다.\n\n무른 흙이 뜨거운 불길을 견뎌 단단한 그릇이 되듯, \n저 또한 요동치는 감정을 다듬으며 나를 더 견고하게 빚어갑니다.\n\n누군가에게 좋은 디자인을 선물하기 위해서는\n먼저 제 마음이 건강하고 단단해야 한다고 믿기에, \n저는 흙을 빚으며 스스로에게 휴식이라는 선물을 건넵니다.',
            link: 'https://www.instagram.com/p/DNcysKiydCF/?igsh=MW5wMDJwMjBibG8zbQ==',
            images: [
                '/img/ceramic1.jpg',
                '/img/ceramic2.jpg',
                '/img/ceramic3.jpg',
                '/img/ceramic4.jpg',
                '/img/ceramic5.jpg'
            ]
        }
    ];

    // 모든 이미지를 하나의 배열로 (20개)
    const allImages = hobbies.flatMap((hobby, hobbyIndex) =>
        hobby.images.map((img, imgIndex) => ({
            src: img,
            hobbyIndex: hobbyIndex,
            globalIndex: hobbyIndex * 5 + imgIndex
        }))
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index'));
                        const hobbyIndex = Math.floor(index / 5);
                        setActiveHobby(hobbyIndex);
                    }
                });
            },
            {
                rootMargin: '-45% 0px -45% 0px',
                threshold: 0
            }
        );

        imageRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const currentHobby = hobbies[activeHobby];

    return (
        <section className="hobby-change-section">
            {/* 중앙 고정 박스 */}
            <div className="hobby-fixed-center">
                <h2 className="hobby-change-title">{currentHobby.title}</h2>
                <p className="hobby-change-description">{currentHobby.description}</p>
                <a
                    href={currentHobby.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hobby-change-button"
                >
                    MORE VIEW
                </a>
            </div>

            {/* 흐르는 이미지들 */}
            <div className="hobby-images-container">
                <div className="hobby-images-left">
                    {allImages.filter((_, index) => index % 2 === 0).map((img) => (
                        <div
                            key={img.globalIndex}
                            ref={(el) => (imageRefs.current[img.globalIndex] = el)}
                            data-index={img.globalIndex}
                            className="hobby-image-box"
                        >
                            <img src={img.src} alt={`Hobby ${img.globalIndex + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="hobby-images-right">
                    {allImages.filter((_, index) => index % 2 === 1).map((img) => (
                        <div
                            key={img.globalIndex}
                            ref={(el) => (imageRefs.current[img.globalIndex] = el)}
                            data-index={img.globalIndex}
                            className="hobby-image-box"
                        >
                            <img src={img.src} alt={`Hobby ${img.globalIndex + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HobbyChange;
