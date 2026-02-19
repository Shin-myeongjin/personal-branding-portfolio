
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
          workingImages={[
            "/img/workingImage-outbook.jpg",
            "/img/workingImage-outbook2.jpg",
            "/img/workingImage-outbook3.jpg",
            "/img/workingImage-outbook4.jpg"
          ]}
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
          hoverDescription="기획부터 디자인까지 100% 주도한 프로젝트 아웃북의 소감입니다.
1차 발표 당시, 기획과 컨셉은 좋지만 완성된 디자인 화면이 문서처럼 딱딱하여 사용자의 지속적인 사용을 유도하기 어렵고 옆에서 계속 설명하지 않으면 어떻게 사용하는건지 알기 힘들다는 피드백을 받았습니다.

 이를 해결하기 위해 사용자와 소통할 수 있는 매개체가 필요하다고 판단했습니다. 책과 거북이를 결합한 중의적인 네이밍의 캐릭터 북이를 직접 기획 및 디자인하여, 딱딱한 안내 문구 대신 북이가 말을 거는 대화형 UI를 적용하고, 기능 중간 가이드 페이지에서 사용자의 흐름을 안내하는 역할을 하여 피드백 받은 내용을 반영한 수정을 했습니다.

디자이너의 고집보다는 사용자의 니즈를 반영하는 유연함이, 가장 논리적이고 완성도 높은 솔루션을 만든다는 것을 배운 프로젝트였습니다."
        />
        <ProjectDetail
          titles={[
            "DUGOUT : the 10th player",
            "2026 UXUI DESIGN / publishing",
            "chatbot fandom app project"
          ]}

          thumbnailImage="/img/thumbnailImage-dugout.jpg"
          workingImages={[
            "/img/workingImage-dugout.jpg",
            "/img/workingImage-dugout2.jpg",
            "/img/workingImage-dugout3.jpg",
            "/img/workingImage-dugout4.jpg"
          ]}
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
          hoverDescription="이전 프로젝트의 시행착오를 교훈 삼아, 명확한 일정 관리와 역할 분배를 선행하여 불필요한 혼선을 줄이고 개발에만 몰입할 수 있는 최적의 환경을 구축했습니다.

부팀장으로서 React 초기 세팅과 Git 관리를 주도해 기반을 다졌고, 빠듯한 기간을 극복하기 위해 AI 도구를 영리하게 활용하여 팀의 생산성을 극대화했습니다.

익숙한 주제보다는 실무에서 마주할 낯선 문제에 대비하고자 탬원들 중 절반 이상이 모르는 주제인 야구를 주제로 선택해 공부해가며 프로젝트를 진행하였습니다. 이를 통해 모르는 분야도 부딪히면 결국 내 것이 된다는 확신과 자신감을 얻은 프로젝트였습니다."
        />
        <ProjectDetail
          titles={[
            "MONAMI : WEB RENEWAL",
            "2026 UXUI DESIGN / publishing",
            "K-BRAND WEB RENEWAL PROJECT"
          ]}

          thumbnailImage="/img/thumbnailImage-monami.jpg"
          workingImages={[
            "/img/workingImage-monami.jpg",
            "/img/workingImage-monami2.jpg",
            "/img/workingImage-monami3.jpg"
          ]}
          uiImages={["/img/uimockup-monami.jpg"]}
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
          hoverDescription="초기에는 팀 내부의 주관적인 만족에 갇혀 진행하다가, 웹 구현의 어려움과 UX적 모호함이라는 피드백을 받고 기획을 전면 수정하는 시행착오를 겪었습니다.

이를 해결하기 위해 마우스 드로잉 대신 GSAP 스크롤 인터랙션을 도입하여 점-선-면으로 확장되는 브랜드 메시지를 기술적으로 안정감 있게 구현했고, 긴 호흡 대신 짧은 주기로 결과를 공유하며 방향성을 수시로 점검했습니다.

잦은 피드백은 지연이 아닌 방향을 잡는 나침반임을 깨달았으며, 단순한 심미성을 넘어 개발 환경과 구현 가능성까지 고려하는 설계자로서의 태도를 갖추게 된 프로젝트였습니다."
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
