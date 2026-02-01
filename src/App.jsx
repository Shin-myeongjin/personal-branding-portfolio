
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SplitTextSection from './components/SplitTextSection';
import AboutSearch from './components/AboutSearch';
import AboutProfile from './components/AboutProfile';
import Keywords from './components/Keywords';
import ProjectDetail from './components/ProjectDetail';
import PresentStory from './components/PresentStory';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SplitTextSection
        leftTop="ABOUT"
        leftBottom="ME"
        rightTop="SHIN"
        rightBottom="MYEONGJIN"
        pillLeft="UX/UI DESIGNER"
        pillRight="SEARCH RESULT : PRESENT"
        bgColor="black"
      />
      <AboutSearch />
      <AboutProfile />
      <Keywords />
      <PresentStory />
      <SplitTextSection
        leftTop="uxui design"
        leftBottom="frontend"
        rightTop="2025-26"
        rightBottom="project"
        pillRight="E-zen academy bootcamp "
        bgColor="white"
      />
      <ProjectDetail
        titles={[
          "OUTBOOK : KNOWLEDGE GARDEN",
          "2025 UXUI DESIGN",
          "BOOK READING APP PROJECT"
        ]}

        thumbnailImage="/img/thumbnailImag-outbook.jpg"
        workingImage="/img/workingImage-outbook.jpg"
        uiImages={["/img/uiImages01-outbook.jpg", "/img/uiImages02-outbook.jpg"]}

        description="책을 읽고 단순한 기록을 넘어
        스스로에게 성장의 기쁨을 선물하는,
        나만의 지식 정원을 가꾸는 독서 플랫폼"

        // 링크 버튼 (a 태그)
        links={[
          { text: "기획서 바로가기", url: "https://www.figma.com/proto/uRDMDVSLCAmgvnLdCG9Rxm/%EC%95%84%EC%9B%83%EB%B6%81-%EA%B8%B0%ED%9A%8D%EC%84%9C?page-id=0%3A1&node-id=1-1350&t=VjSE2zdANtWp5JvJ-1", variant: "outline" },
          { text: "앱 바로가기", url: "https://www.figma.com/proto/fHwGVFECJyqdIGlO4gZkpl/%EC%95%84%EC%9B%83%EB%B6%81-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85?page-id=0%3A1&node-id=1-1046&viewport=683%2C675%2C0.04&t=VerJbHjX3mFpmMok-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A1046", variant: "filled" }
        ]}

        // 상단 태그 (클릭 불가)
        chipTags={[
          { text: "A TO Z DEVELOPMENT", variant: "filled" },
          { text: "PRESONAL PROJECT", variant: "outline" }
        ]}

        // 진행도 바 (최대 3개)
        progress={[
          { label: "기획", value: 100 },
          { label: "디자인", value: 100 }
        ]}
      />
      <ProjectDetail
        titles={[
          "DUGOUT : the 10th player",
          "2026 UXUI DESIGN / publishing",
          "chatbot fandom app project"
        ]}

        thumbnailImage="/img/thumbnailImage-dugout.jpg"
        workingImage="/img/workingImage-dugout.jpg"
        uiImages={["/img/uiImages01-dugout.jpg", "/img/uiImages02-dugout.jpg"]}

        description="팬을 '10번째 선수'로 정의하고, 
                    그들의 열정을 공간으로 설계하다. 
                    야구 KBO 팬덤 커뮤니티 플랫폼"

        // 링크 버튼 (a 태그)
        links={[
          { text: "기획서 바로가기", url: "https://www.figma.com/proto/MaqP5Hb7qhxrTSh3tSzsGI/%EB%8D%95%EC%95%84%EC%9B%83-%EA%B8%B0%ED%9A%8D%EC%84%9C?page-id=0%3A1&node-id=0-377&viewport=553%2C714%2C0.06&t=dKdMYIjCkt86NDZB-1&scaling=min-zoom&content-scaling=fixed", variant: "outline" },
          { text: "앱 바로가기", url: "https://dugout-ruby.vercel.app/", variant: "filled" }
        ]}

        // 상단 태그 (클릭 불가)
        chipTags={[
          { text: "부팀장", variant: "filled" },
          { text: "TEAM PROJECT", variant: "outline" }
        ]}

        // 진행도 바 (최대 3개)
        progress={[
          { label: "기획", value: 80 },
          { label: "디자인", value: 90 },
          { label: "퍼블리싱", value: 90 }
        ]}
      />
      <ProjectDetail
        titles={[
          "MONAMI : WEB RENEWAL",
          "2026 UXUI DESIGN / publishing",
          "K-BRAND WEB RENEWAL PROJECT"
        ]}

        thumbnailImage="/img/thumbnailImage-monami.jpg"
        workingImage="/img/workingImage-monami.jpg"
        uiImages={["/img/uimockup-monami.jpg"]}  // ← 이미지 1개로 변경
        uiLayout="laptop"

        description="쓰다에서 그리다로 경험을 확장하며, 
브랜드의 본질적 가치를 소개하는 
모나미 웹 리뉴얼 프로젝트"

        // 링크 버튼 (a 태그)
        links={[
          { text: "기획서 바로가기", url: "https://www.figma.com/proto/uRorIFumTAW2H5jCJeUPTT/Untitled?page-id=0%3A1&node-id=1-148&viewport=412%2C480%2C0.19&t=THv4VUwueAFcovIK-1&scaling=min-zoom&content-scaling=fixed", variant: "outline" },
          { text: "앱 바로가기", url: "https://meongpunch.github.io/monamifinal/", variant: "filled" }
        ]}

        // 상단 태그 (클릭 불가)
        chipTags={[
          { text: "부팀장", variant: "filled" },
          { text: "TEAM PROJECT", variant: "outline" }
        ]}

        // 진행도 바 (최대 3개)
        progress={[
          { label: "기획", value: 90 },
          { label: "디자인", value: 90 },
          { label: "퍼블리싱", value: 90 }
        ]}
      />
      <SplitTextSection
        leftTop="industrial"
        leftBottom="design"
        rightTop="in"
        rightBottom="kaywon uni"
        pillRight="SEARCH RESULT : 5 PROJECTS"
        bgColor="black"
      />
      <SplitTextSection
        variant="centered"
        leftTop="ANOTHER"
        leftBottom="PRESENTS"
        rightTop="OTHER"
        rightBottom="WORKS"
        pillRight="SEARCH RESULT : SIDE PROJECTS"
        bgColor="black"
      />
    </>
  );
}

export default App;
