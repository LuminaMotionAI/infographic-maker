/*
 * 사용 가이드 페이지
 * Server Component로 전환하여 SEO 최적화
 */

import Link from 'next/link';
import '@/styles/components.css';

// 페이지별 메타데이터
export const metadata = {
    title: '사용 가이드 | InfoMaker - 인포그래픽 만드는 방법',
    description: 'InfoMaker 사용 가이드입니다. 인포그래픽 제작 방법을 단계별로 상세히 설명합니다. 제목 입력부터 다운로드까지 쉽게 따라할 수 있습니다.',
    keywords: '인포그래픽 만드는 방법, 인포그래픽 사용법, infographic tutorial, 데이터 시각화 가이드',
    openGraph: {
        title: '사용 가이드 | InfoMaker',
        description: 'InfoMaker로 인포그래픽을 만드는 방법을 단계별로 알아보세요.',
        url: 'https://infographic-maker.vercel.app/guide',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'article',
    },
};

export default function GuidePage() {
    return (
        <div className="container">
            {/* 헤더 */}
            <header className="header">
                <Link href="/" className="logo">
                    <span className="logo-icon">📊</span>
                    <span className="logo-text">InfoMaker</span>
                </Link>
                <nav className="header-nav">
                    <Link href="/about" className="nav-link">소개</Link>
                    <Link href="/blog" className="nav-link">블로그</Link>
                    <Link href="/tips" className="nav-link">팁</Link>
                    <Link href="/examples" className="nav-link">예제</Link>
                    <Link href="/faq" className="nav-link">FAQ</Link>
                </nav>
            </header>

            {/* 메인 콘텐츠 */}
            <main className="legal-content guide-content">
                <h1>📖 사용 가이드</h1>
                <p className="page-description">
                    InfoMaker를 처음 사용하시는 분들을 위한 상세한 사용 가이드입니다.
                    이 가이드를 따라하면 누구나 쉽게 전문적인 인포그래픽을 만들 수 있습니다.
                </p>

                <section className="content-section">
                    <h2>🚀 시작하기</h2>
                    <p>
                        InfoMaker는 별도의 회원가입 없이 바로 사용할 수 있습니다.
                        웹사이트에 접속하면 바로 인포그래픽 제작을 시작할 수 있습니다.
                    </p>
                    <p>
                        복잡한 설치 과정 없이 웹 브라우저만 있으면 됩니다.
                        Chrome, Firefox, Safari, Edge 등 최신 브라우저를 권장합니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>📝 Step 1: 제목 입력</h2>
                    <p>
                        상단의 <strong>"제목"</strong> 입력란에 인포그래픽의 제목을 입력합니다.
                        제목은 인포그래픽 상단에 크게 표시되어 핵심 내용을 전달합니다.
                    </p>
                    <div className="tip-box">
                        💡 <strong>팁:</strong> 제목은 간결하고 명확하게 작성하세요.
                        예: "2024년 매출 현황", "팀 성과 분석", "마케팅 캠페인 결과"
                    </div>
                    <p>
                        좋은 제목의 특징:
                    </p>
                    <ul>
                        <li>핵심 내용을 한 줄로 요약</li>
                        <li>구체적인 기간이나 대상 명시</li>
                        <li>이해하기 쉬운 단어 사용</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>📊 Step 2: 데이터 입력</h2>
                    <p>"데이터 항목" 섹션에서 표시할 정보를 입력합니다:</p>
                    <ul>
                        <li><strong>라벨:</strong> 데이터의 이름 (예: "총매출", "신규고객", "성장률")</li>
                        <li><strong>수치:</strong> 표시할 숫자 값 (예: "1,234", "56%", "+25")</li>
                        <li><strong>단위:</strong> 숫자의 단위 (예: "억원", "명", "%", "건")</li>
                    </ul>
                    <p>최대 6개의 데이터 항목을 추가할 수 있습니다.</p>
                    <div className="tip-box">
                        💡 <strong>팁:</strong> 3-4개의 핵심 데이터만 표시하면 더 깔끔한 인포그래픽이 됩니다.
                        너무 많은 정보를 담으면 가독성이 떨어집니다.
                    </div>
                    <p>
                        데이터 입력 예시:
                    </p>
                    <ul>
                        <li>라벨: "연간 매출" / 수치: "150" / 단위: "억원"</li>
                        <li>라벨: "성장률" / 수치: "+45" / 단위: "%"</li>
                        <li>라벨: "신규 고객" / 수치: "2,340" / 단위: "명"</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>🏷️ Step 3: 카테고리 선택</h2>
                    <p>
                        용도에 맞는 카테고리를 선택하세요. 카테고리에 따라 최적화된 색상이 자동으로 적용됩니다:
                    </p>
                    <ul>
                        <li><strong>📊 비즈니스:</strong> 회의, 보고서, 발표자료에 적합한 전문적인 색상</li>
                        <li><strong>📈 마케팅:</strong> 캠페인, 실적 분석에 적합한 역동적인 색상</li>
                        <li><strong>📚 교육:</strong> 학습자료, 강의에 적합한 차분한 색상</li>
                        <li><strong>📱 SNS:</strong> 인스타그램, 페이스북 등 소셜 미디어에 적합한 트렌디한 색상</li>
                    </ul>
                    <p>
                        카테고리를 선택하면 해당 분야에서 가장 효과적인 색상 조합이 자동으로 추천됩니다.
                        물론 추천된 색상을 직접 변경할 수도 있습니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>🎨 Step 4: 스타일 & 색상 선택</h2>
                    <h3>스타일 선택</h3>
                    <p>3가지 디자인 스타일 중 원하는 것을 선택하세요:</p>
                    <ul>
                        <li><strong>◻️ Minimal:</strong> 깔끔하고 미니멀한 디자인. 공식적인 문서나 보고서에 적합합니다.</li>
                        <li><strong>🌈 Gradient:</strong> 그라데이션이 적용된 모던 디자인. 프레젠테이션이나 SNS에 적합합니다.</li>
                        <li><strong>✨ Glassmorphism:</strong> 유리 효과가 적용된 트렌디한 디자인. 세련된 느낌을 주고 싶을 때 적합합니다.</li>
                    </ul>

                    <h3>색상 테마</h3>
                    <p>
                        6가지 색상 테마 중 원하는 것을 선택하세요.
                        Purple, Blue, Teal, Orange, Pink, Indigo 등 다양한 색상을 제공합니다.
                        실시간으로 미리보기가 업데이트됩니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>👁️ Step 5: 실시간 미리보기</h2>
                    <p>
                        오른쪽 미리보기 패널에서 실시간으로 결과를 확인할 수 있습니다.
                        데이터를 수정하면 즉시 미리보기가 업데이트됩니다.
                    </p>
                    <p>
                        미리보기에서 다음 사항을 확인하세요:
                    </p>
                    <ul>
                        <li>제목이 잘 표시되는지</li>
                        <li>데이터가 읽기 쉽게 배치되었는지</li>
                        <li>색상과 스타일이 조화로운지</li>
                        <li>전체적인 균형이 맞는지</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>📥 Step 6: 다운로드 & 공유</h2>
                    <h3>다운로드</h3>
                    <p>완성된 인포그래픽을 이미지 파일로 저장할 수 있습니다:</p>
                    <ul>
                        <li><strong>PNG:</strong> 투명 배경, 웹/SNS용에 적합 (권장)</li>
                        <li><strong>JPG:</strong> 흰색 배경, 문서/인쇄용에 적합</li>
                    </ul>

                    <h3>공유</h3>
                    <p>
                        "복사" 버튼을 클릭하면 공유 가능한 링크가 클립보드에 복사됩니다.
                        이 링크를 통해 다른 사람과 인포그래픽을 공유할 수 있습니다.
                        링크를 받은 사람도 동일한 인포그래픽을 보고, 필요하면 수정할 수 있습니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>💡 인포그래픽 디자인의 3대 핵심 원칙 (Educational Insight)</h2>
                    <p>
                        단순히 예쁜 도표를 넘어 목적을 달성하는 인포그래픽을 만들기 위해서는 다음 3가지 원칙을 기억하세요. 
                        더 자세한 이론은 <Link href="/blog">InfoMaker 블로그</Link>에서 학습하실 수 있습니다.
                    </p>
                    <ul>
                        <li><strong>단순성 (Simplicity):</strong> 불필요한 장식이나 너무 많은 데이터를 제거하세요. 핵심 메시지 하나에 집중하여 데이터-잉크 비율을 높일 때 정보 전달력이 극대화됩니다.</li>
                        <li><strong>명료성 (Clarity):</strong> 색상 대비와 타이포그래피 계층을 활용하여 청중의 시선을 유도하세요. 가장 중요한 숫자가 화면에서 가장 먼저 눈에 띄어야 합니다.</li>
                        <li><strong>맥락성 (Context):</strong> 단순한 숫자의 나열 대신 명확한 비교 대상을 함께 제공하세요 (예: 전년 대비, 목표 대비 등). 맥락이 주어질 때 비로소 &apos;데이터&apos;가 살아있는 &apos;정보&apos;가 됩니다.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>💡 활용 팁</h2>
                    <ul className="feature-list">
                        <li>
                            <strong>프레젠테이션</strong>
                            <p>PPT 슬라이드에 삽입하여 시각적 효과를 높이세요.
                                데이터 슬라이드를 더욱 인상적으로 만들 수 있습니다.</p>
                        </li>
                        <li>
                            <strong>SNS 마케팅</strong>
                            <p>정사각형 비율로 다운로드하여 인스타그램에 바로 업로드하세요.
                                시각 자료는 일반 텍스트보다 참여율이 높습니다.</p>
                        </li>
                        <li>
                            <strong>보고서 작성</strong>
                            <p>주요 KPI를 인포그래픽으로 정리해 보고서에 첨부하세요.
                                경영진이나 클라이언트에게 핵심 내용을 빠르게 전달할 수 있습니다.</p>
                        </li>
                        <li>
                            <strong>블로그/뉴스레터</strong>
                            <p>데이터 기반 콘텐츠에 시각 자료로 활용하세요.
                                독자의 이해도와 공유율을 높일 수 있습니다.</p>
                        </li>
                    </ul>
                </section>

                <div className="cta-section">
                    <h3>가이드를 읽으셨나요?</h3>
                    <p>지금 바로 인포그래픽을 만들어보세요!</p>
                    <Link href="/" className="btn-primary">
                        지금 바로 만들기 →
                    </Link>
                </div>
            </main>

            {/* 푸터 */}
            <footer className="footer">
                <p className="footer-text">© 2026 InfoMaker. 무료 인포그래픽 생성 도구</p>
                <div className="footer-links">
                    <Link href="/about" className="footer-link">서비스 소개</Link>
                    <Link href="/guide" className="footer-link">사용 가이드</Link>
                    <Link href="/tips" className="footer-link">제작 팁</Link>
                    <Link href="/examples" className="footer-link">예제</Link>
                    <Link href="/faq" className="footer-link">FAQ</Link>
                    <Link href="/terms" className="footer-link">이용약관</Link>
                    <Link href="/privacy" className="footer-link">개인정보처리방침</Link>
                    <Link href="/contact" className="footer-link">문의하기</Link>
                </div>
            </footer>
        </div>
    );
}
