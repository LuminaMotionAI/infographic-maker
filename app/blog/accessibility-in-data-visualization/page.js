import Link from 'next/link';
import '@/styles/components.css';

export const metadata = {
    title: '웹 접근성을 고려한 데이터 시각화 가이드: 모두를 위한 인포그래픽 | InfoMaker 블로그',
    description: '색약, 저시력자, 고령층 등 모든 사용자가 차별 없이 정보를 이해할 수 있도록 돕는 데이터 시각화 접근성 가이드라인을 제공합니다. WCAG 2.2 기준 대비비와 색상 조합 팁을 확인하세요.',
    keywords: '데이터 시각화 접근성, 웹 접근성, 색약 시각화, WCAG 대비비, 유니버설 디자인, 인포그래픽 디자인',
    openGraph: {
        title: '웹 접근성을 고려한 데이터 시각화 가이드',
        description: '색약자, 저시력자 등 모두를 포용하는 차트 및 인포그래픽 디자인 원칙',
        url: 'https://infographic-maker.vercel.app/blog/accessibility-in-data-visualization',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'article',
    },
};

export default function AccessibilityInDataVisualizationPage() {
    return (
        <div className="container">
            <header className="header">
                <Link href="/" className="logo">
                    <span className="logo-icon">📊</span>
                    <span className="logo-text">InfoMaker</span>
                </Link>
                <nav className="header-nav">
                    <Link href="/blog" className="nav-link">블로그</Link>
                    <Link href="/guide" className="nav-link">가이드</Link>
                    <Link href="/tips" className="nav-link">팁</Link>
                    <Link href="/examples" className="nav-link">예제</Link>
                </nav>
            </header>

            <main className="legal-content blog-article">
                <div className="article-meta">
                    <Link href="/blog" className="back-link">← 블로그 목록</Link>
                    <span className="article-category">디자인 원칙</span>
                    <time className="article-date">2026년 3월 28일</time>
                    <span className="article-readtime">⏱ 8분 읽기</span>
                </div>

                <h1>♿ 웹 접근성을 고려한 데이터 시각화: 모두가 읽을 수 있는 디자인</h1>

                <p className="article-intro">
                    전 세계 남성의 약 8%, 여성의 약 0.5%는 특정 색상을 온전히 식별하지 못하는 색각 이상을 가지고 있습니다. 
                    아무리 화려한 인포그래픽이라도 특정 독자에게 보이지 않거나 오독된다면 훌륭한 디자인이라 할 수 없습니다. 
                    포용적이고 접근성 높은 시각화를 위한 핵심 원칙을 소개합니다.
                </p>

                <section className="content-section">
                    <h2>1. 색상에만 의존한 정보 전달 피하기 (Never Rely on Color Alone)</h2>
                    <p>
                        웹 콘텐츠 접근성 가이드라인(WCAG 2.2)의 가장 중요한 핵심 원칙 중 하나는 
                        <strong>"정보를 전달하는 유일한 수단으로 색상만을 사용해서는 안 된다"</strong>는 것입니다.
                    </p>
                    <ul>
                        <li>
                            <strong>텍스트 라벨 병기:</strong> 범례(Legend)를 멀리 배치하고 색상으로만 차트를 대조하게 하지 말고, 데이터 요소 바로 옆에 직접 수치와 라벨을 적어주세요.
                        </li>
                        <li>
                            <strong>패턴과 질감(Pattern & Texture) 활용:</strong> 막대나 원형 영역에 빗금, 점선, 체크 등의 채우기 패턴을 적용하면 흑백 모드에서도 명확히 구별됩니다.
                        </li>
                        <li>
                            <strong>아이콘과 기호의 결합:</strong> 긍정 지표에는 화살표 상승(↑)과 플러스 기호(+), 부정 지표에는 화살표 하강(↓)을 색상과 반드시 함께 표기합니다.
                        </li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>2. 엄격한 명도 대비율(Contrast Ratio) 준수</h2>
                    <p>
                        저시력자나 야외 직사광선 환경에서 모바일 기기를 사용하는 일반 사용자 모두를 위해 충분한 텍스트 명도 대비가 필수적입니다.
                    </p>
                    <ul>
                        <li><strong>본문 텍스트:</strong> 배경색 대비 최소 4.5:1 이상의 명도 대비를 유지해야 합니다 (WCAG AA 기준).</li>
                        <li><strong>큰 텍스트 및 UI 요소:</strong> 18pt(약 24px) 이상의 제목 텍스트나 핵심 차트 그래픽 경계선은 최소 3:1 이상의 대비를 확보해야 합니다.</li>
                        <li><strong>그라데이션 주의:</strong> 배경에 그라데이션을 사용할 때는 가장 밝은 영역과 가장 어두운 영역 모두에서 글씨가 선명하게 읽히는지 확인해야 합니다.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>3. 색각 이상 유형에 따른 색상 팔레트 설계</h2>
                    <p>
                        가장 흔한 적록색맹(제1색각이상, 제2색각이상) 사용자는 빨간색과 초록색을 거의 구별하지 못합니다. 
                        신호등처럼 빨강(부정/위험)과 초록(긍정/안전)만을 나란히 배치하는 전통적인 색채 배치는 피해야 합니다.
                    </p>
                    <ul>
                        <li><strong>파랑-주황(Blue & Orange) 조합:</strong> 대부분의 색각 이상 유형에서 가장 안정적으로 구별되는 대표적인 보색 쌍입니다.</li>
                        <li><strong>단색조(Monochrome) 명도 변화:</strong> 하나의 색상 계열 안에서 밝기(Lightness) 단계만 조절하면 색맹 여부와 무관하게 수치의 크기를 안전하게 인지할 수 있습니다.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>4. 스크린 리더와 대체 텍스트(Alt Text) 지원</h2>
                    <p>
                        완성된 인포그래픽을 웹사이트나 블로그에 게시할 때는 시각 장애인을 위한 대체 텍스트를 필수적으로 작성해야 합니다.
                    </p>
                    <blockquote>
                        <strong>나쁜 예:</strong> &lt;img src="chart.png" alt="인포그래픽 이미지"&gt;<br />
                        <strong>좋은 예:</strong> &lt;img src="chart.png" alt="2026년 1분기 매출 보고서 인포그래픽: 신규 고객 3,200명 유치(전년비 +45% 성장), 고객 만족도 94.2점 달성, 분기 매출 1억 2천만 원 달성"&gt;
                    </blockquote>
                </section>

                <div className="cta-section">
                    <h3>가독성과 접근성이 보장된 인포그래픽 제작</h3>
                    <p>InfoMaker는 엄선된 고대비 폰트와 직관적인 색상 팔레트를 기반으로 시각 자료를 렌더링합니다.</p>
                    <Link href="/" className="btn-primary">무료 인포그래픽 만들기 →</Link>
                </div>
            </main>

            <footer className="footer">
                <p className="footer-text">© 2026 InfoMaker. 무료 인포그래픽 생성 도구</p>
                <div className="footer-links">
                    <Link href="/about" className="footer-link">서비스 소개</Link>
                    <Link href="/guide" className="footer-link">가이드</Link>
                    <Link href="/blog" className="footer-link">블로그</Link>
                    <Link href="/faq" className="footer-link">FAQ</Link>
                </div>
            </footer>
        </div>
    );
}
