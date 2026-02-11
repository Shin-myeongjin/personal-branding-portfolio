
import React from 'react';
import HeaderFixed from './components/HeaderFixed';
import Hero from './components/Hero';
import SplitTextSection from './components/SplitTextSection';
import AboutSearch from './components/AboutSearch';
import AboutProfile from './components/AboutProfile';
import Keywords from './components/Keywords';
import ProjectDetail from './components/ProjectDetail';
import TextSection from './components/TextSection';
import RootSection from './components/RootSection';
import SideProjects from './components/SideProjects';
import CloneCoding from './components/CloneCoding';
import Hobby from './components/Hobby';
import HobbyChange from './components/HobbyChange';
import QuickAnswer from './components/QuickAnswer';
import SkillsFlow from './components/SkillsFlow';
import Timeline from './components/Timeline';
import useThemeColor from './hooks/useThemeColor';

import './index.css';

function App() {
  useThemeColor(); // 배경색 전환 훅 실행

  return (
    <>
      <HeaderFixed />
      <div data-theme="black">
        <Hero />
        <SplitTextSection id="about"
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
        <SkillsFlow />
        <TextSection
          id="timeline"
          title="PRESENT STORY"
          description={[
            "더 나은 경험을 선물하기 위해 탐구된 성장의 기록입니다.",
            "수많은 고민과 시도가 쌓여 만들어진 현재의 가치를 확인해 보세요."
          ]}
          buttonText="TIMELINE"
          showArrow={true}
        />
        <Timeline />
      </div>
      <div data-theme="white">
        <SplitTextSection id="works"
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
        스스로에게 성장의 기쁨을 선물하는
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

          // 작업사진 호버 설명
          hoverDescription="[잘한 점 및 배운 점]
          
부팀장으로서 Git 관리와 리액트 초기 세팅을 도맡아 팀원들이 개발에만 집중할 수 있는 환경을 만들었고, 한달이 안되는 빠듯한 기간임에도 AI를 영리하게 활용해 마감 내 완수하며 효율적인 협업 방식과 탄탄한 기본기의 중요성을 체감했습니다."
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
          // 작업사진 호버 설명
          hoverDescription="[잘한 점 및 배운 점]
          
부팀장으로서 Git 관리와 리액트 초기 세팅을 도맡아 팀원들이 개발에만 집중할 수 있는 환경을 만들었고, 한달이 안되는 빠듯한 기간임에도 AI를 영리하게 활용해 마감 내 완수하며 효율적인 협업 방식과 탄탄한 기본기의 중요성을 체감했습니다."
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
            { text: "웹 바로가기", url: "https://meongpunch.github.io/monamifinal/", variant: "filled" }
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
          // 작업사진 호버 설명
          hoverDescription="[잘한 점 및 배운 점]
          
부팀장으로서 Git 관리와 리액트 초기 세팅을 도맡아 팀원들이 개발에만 집중할 수 있는 환경을 만들었고, 한달이 안되는 빠듯한 기간임에도 AI를 영리하게 활용해 마감 내 완수하며 효율적인 협업 방식과 탄탄한 기본기의 중요성을 체감했습니다."
        />
      </div>
      <div data-theme="black">
        <SplitTextSection
          leftTop="industrial"
          leftBottom="design"
          rightTop="in"
          rightBottom="kaywon uni"
          pillRight="SEARCH RESULT : 5 PROJECTS"
          bgColor="black"
          id="industrial"
        />
        <RootSection />
        <TextSection
          id="clone-coding"
          title="COMMUNICATION DESIGNER"
          description={[
            "개발자와 더 깊게 대화하기 위해 직접 코드를 두드리며 구조를 익혔습니다.",
            "소통형 디자이너 신명진의 클론코딩 기록입니다."
          ]}
          buttonText="CLONE CODING"
          showArrow={false}
        />
        <CloneCoding
          items={[
            { id: 1, name: "MUSINE", year: "2025", image: "/img/clone-musine.jpg", link: "https://clone-coding01-musine.vercel.app/" },
            { id: 2, name: "Y.STUDIO", year: "2025", image: "/img/clone-ystudio.jpg", link: "https://clone-coding02-y-studio.vercel.app/" },
            { id: 3, name: "CREW A LA MODE", year: "2025", image: "/img/clone-crewala.jpg", link: "https://clone-coding03-crew-a-la-mode.vercel.app/" },
            { id: 4, name: "DABANG", year: "2025", image: "/img/clone-dabang.jpg", link: "https://clone-coding04-dabang.vercel.app/" },
            { id: 5, name: "CONCIERGE", year: "2025", image: "/img/clone-concierge.jpg", link: "https://clone-coding05-conclerge.vercel.app/" },
            { id: 6, name: "PHOMAIN", year: "2025", image: "/img/clone-phomain.jpg", link: "https://clone-coding06-phomain.vercel.app/" },
            { id: 7, name: "HANHWA", year: "2025", image: "/img/clone-hanwha.jpg", link: "https://clone-coding07-hanwha.vercel.app/" },
            { id: 8, name: "KOREA CONSUMER", year: "2025", image: "/img/clone-korea.jpg", link: "https://clone-coding08-korea-consumer.vercel.app/" }
          ]}
        />
        <SplitTextSection
          variant="centered"
          leftTop="ANOTHER"
          leftBottom="PRESENTS"
          rightTop="OTHER"
          rightBottom="WORKS"
          pillRight="SEARCH RESULT : SIDE PROJECTS"
          bgColor="black"
          id="side-project"
        />
        <SideProjects
          titles={[
            "ANOTHER PRESENTS,",
            "OTHER WORKS."
          ]}
          projects={[
            {
              image: "/img/thumbnailImage-toletter.jpg",
              link: "https://toletter.vercel.app/",
              tags: [
                { text: "toletter", variant: "filled" },
                { text: "2025", variant: "outline" }
              ],
              description: "딱딱한 오늘의 운세를\n 아버지가 전하는 편지 컨셉으로 기획하여\n사용자에게 정서적 위로를 선물한 프로젝트"
            },
            {
              image: "/img/thumbnailImage-bincan.jpg",
              link: "https://www.instagram.com/p/DKZYYHHSdsS/?igsh=MTVmY2Fmcjc5cTl5Yw==",
              tags: [
                { text: "present", variant: "filled" },
                { text: "2025", variant: "outline" }
              ],
              description: "선물과 현재라는 의미를 담아\n타인과 스스로에게 건넨 그림들을 하나의 점으로\n표현하고 계단을 오르는 사람을 형상화한 작품"
            }
          ]}
        />
      </div>
      <div data-theme="white">
        <Hobby />
        <HobbyChange />
      </div>
      <div data-theme="black">
        <SplitTextSection
          id="quick-answer"
          leftTop="quick"
          leftBottom="answers"
          bgColor="black"
        />
        <QuickAnswer />
        <SplitTextSection
          id="contact"
          leftTop="present."
          leftBottom="end"
          rightTop="Let's"
          rightBottom="contact"
          pillLeft="010-7404-0416"
          pillRight="braingr22n@naver.com"
          variant="contact-lowercase"
          bgColor="black"
        />
      </div>
    </>
  );
}

export default App;
