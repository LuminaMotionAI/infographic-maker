/*
 * 블로그 기사 6: 인포그래픽 타이포그래피 가이드
 */

import Link from 'next/link';
import '@/styles/components.css';

export const metadata = {
    title: '인포그래픽 타이포그래피 가이드: 가독성을 높이는 폰트 선택과 배치 | InfoMaker 블로그',
    description: '인포그래픽에서 텍스트를 효과적으로 활용하기 위한 타이포그래피 원칙, 폰트 조합법, 시각적 계층 구조 설계법을 안내합니다.',
    keywords: '타이포그래피, 폰트 선택, 인포그래픽 폰트, 가독성, 시각적 계층',
    openGraph: {
        title: '인포그래픽 타이포그래피 가이드',
        description: '가독성을 높이는 폰트 선택과 배치 원칙을 알아보세요.',
        url: 'https://infographic-maker.vercel.app/blog/infographic-typography-guide',
        siteName: 'InfoMaker', locale: 'ko_KR', type: 'article',
    },
};

export default function TypographyGuidePage() {
    return (
        <div className="container">
            <header className="header">
                <Link href="/" className="logo"><span className="logo-icon">📊</span><span className="logo-text">InfoMaker</span></Link>
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
                    <span className="article-category">디자인</span>
                    <time className="article-date">2026년 2월 20일</time>
                    <span className="article-readtime">⏱ 6분 읽기</span>
                </div>

                <h1>🔤 인포그래픽 타이포그래피 가이드: 가독성을 높이는 폰트 선택과 배치</h1>

                <p className="article-intro">
                    인포그래픽에서 타이포그래피는 디자인의 50% 이상을 차지합니다. 아무리 좋은 데이터와 색상을 사용해도
                    폰트 선택과 텍스트 배치가 잘못되면 전체적인 완성도가 떨어집니다. 이 가이드에서는 인포그래픽에 최적화된
                    타이포그래피 원칙을 체계적으로 알아봅니다.
                </p>

                <section className="content-section">
                    <h2>타이포그래피가 중요한 이유</h2>
                    <p>
                        MIT 미디어랩의 연구에 따르면, 좋은 타이포그래피는 정보 이해도를 최대 30% 향상시킵니다.
                        반면 잘못된 폰트 선택은 사용자가 콘텐츠를 읽는 것 자체를 포기하게 만듭니다.
                        웹 디자인에서 사용자의 95%는 좋은 타이포그래피를 의식적으로 인식하지 못하지만,
                        나쁜 타이포그래피는 즉시 불편함을 느낍니다.
                    </p>
                    <p>
                        인포그래픽에서 타이포그래피는 세 가지 역할을 수행합니다.
                    </p>
                    <ul>
                        <li><strong>정보 전달:</strong> 숫자와 라벨을 명확하게 읽을 수 있게 합니다</li>
                        <li><strong>시각적 계층:</strong> 무엇이 중요하고 덜 중요한지를 구분합니다</li>
                        <li><strong>분위기 전달:</strong> 폰트의 성격이 전체적인 톤을 결정합니다</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>세리프 vs 산세리프: 올바른 선택</h2>
                    <h3>세리프(Serif) 폰트</h3>
                    <p>
                        글자 끝에 작은 장식(세리프)이 있는 폰트입니다. 전통적, 권위적, 클래식한 느낌을 줍니다.
                        인쇄물에서는 세리프가 글자 간 연결감을 주어 긴 본문 읽기에 유리하지만,
                        디지털 화면에서는 작은 크기에서 가독성이 떨어질 수 있습니다.
                    </p>
                    <ul>
                        <li><strong>적합한 용도:</strong> 격식 있는 보고서, 금융/법률 분야, 프리미엄 브랜드</li>
                        <li><strong>추천 폰트:</strong> Noto Serif KR, 바탕체, Georgia, Times New Roman</li>
                    </ul>

                    <h3>산세리프(Sans-serif) 폰트</h3>
                    <p>
                        장식이 없는 깔끔한 폰트입니다. 현대적, 깔끔, 가독성 높은 느낌을 줍니다.
                        디지털 화면에서의 가독성이 뛰어나 인포그래픽에 가장 많이 사용됩니다.
                    </p>
                    <ul>
                        <li><strong>적합한 용도:</strong> 대부분의 인포그래픽, 디지털 콘텐츠, 프레젠테이션</li>
                        <li><strong>추천 폰트:</strong> Pretendard, Noto Sans KR, Inter, Outfit, Roboto</li>
                    </ul>
                    <div className="tip-box">
                        💡 <strong>인포그래픽 결론:</strong> 90% 이상의 경우, 산세리프 폰트가 인포그래픽에 적합합니다.
                        숫자가 많은 인포그래픽에서는 특히 산세리프의 깔끔함이 가독성을 크게 높입니다.
                    </div>
                </section>

                <section className="content-section">
                    <h2>시각적 계층 구조 설계</h2>
                    <p>
                        타이포그래피의 핵심은 &quot;시각적 계층(Visual Hierarchy)&quot;입니다.
                        독자의 시선이 가장 중요한 정보에서 시작하여 상세 정보로 자연스럽게 이동하도록 설계하세요.
                    </p>

                    <h3>4단계 계층 구조</h3>
                    <ol>
                        <li>
                            <strong>Level 1 - 핵심 숫자:</strong> 가장 크고 굵은 텍스트. 72-120pt.
                            인포그래픽에서 가장 먼저 눈에 들어와야 하는 요소입니다.
                        </li>
                        <li>
                            <strong>Level 2 - 제목:</strong> 두 번째로 큰 텍스트. 24-36pt.
                            인포그래픽의 주제를 알려주는 역할입니다.
                        </li>
                        <li>
                            <strong>Level 3 - 라벨:</strong> 각 데이터 항목의 이름. 14-18pt.
                            숫자의 의미를 설명하는 보조 텍스트입니다.
                        </li>
                        <li>
                            <strong>Level 4 - 단위/부가 정보:</strong> 가장 작은 텍스트. 10-14pt.
                            단위(%, 억원, 명 등)나 출처 정보입니다.
                        </li>
                    </ol>
                    <p>
                        각 레벨 간의 크기 차이는 최소 1.5배 이상이어야 계층이 명확하게 인식됩니다.
                        예를 들어 Level 3이 16pt이라면 Level 2는 최소 24pt 이상이어야 합니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>폰트 조합의 원칙</h2>
                    <p>인포그래픽에서 사용하는 폰트는 최대 2개로 제한하세요. 3개 이상은 시각적 혼란을 줍니다.</p>

                    <h3>추천 조합 패턴</h3>
                    <ul>
                        <li>
                            <strong>패턴 1 (가장 안전):</strong> 같은 폰트 패밀리의 다른 굵기 조합.
                            예: Pretendard Bold + Pretendard Regular
                        </li>
                        <li>
                            <strong>패턴 2 (모던):</strong> 제목용 디스플레이 + 본문용 산세리프.
                            예: Outfit Bold + Inter Regular
                        </li>
                        <li>
                            <strong>패턴 3 (클래식):</strong> 세리프 제목 + 산세리프 본문.
                            예: Noto Serif KR + Noto Sans KR
                        </li>
                    </ul>
                    <div className="tip-box">
                        💡 <strong>황금 규칙:</strong> 대비가 충분하되 충돌하지 않아야 합니다.
                        두 폰트가 너무 비슷하면 의도가 불분명해 보이고(분명한 대비 부족),
                        너무 다르면 조화롭지 못합니다(스타일 충돌).
                    </div>
                </section>

                <section className="content-section">
                    <h2>숫자 표시의 디테일</h2>
                    <p>인포그래픽에서 숫자는 가장 중요한 요소입니다. 숫자를 효과적으로 표시하는 디테일을 알아보세요.</p>
                    <ul>
                        <li><strong>등폭 숫자 사용:</strong> 숫자 정렬이 필요한 경우 등폭(tabular) 숫자 옵션이 있는 폰트를 선택하세요</li>
                        <li><strong>천 단위 구분:</strong> 1000000보다 1,000,000이, 이보다 100만이 읽기 쉽습니다</li>
                        <li><strong>단위 분리:</strong> &quot;1,234억원&quot;보다 &quot;1,234&quot; + 작은 &quot;억원&quot;이 숫자를 더 강조합니다</li>
                        <li><strong>색상 구분:</strong> 양수는 기본색, 증감은 초록/빨강으로 직관적 표시</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>자주 하는 타이포그래피 실수</h2>
                    <ol>
                        <li><strong>폰트 과다 사용:</strong> 3개 이상의 폰트는 시각적 혼란을 초래합니다</li>
                        <li><strong>너무 얇은 폰트:</strong> Light/Thin 굵기는 작은 크기에서 가독성이 매우 떨어집니다</li>
                        <li><strong>부족한 줄간격:</strong> 줄간격은 폰트 크기의 1.4-1.6배가 적정합니다</li>
                        <li><strong>낮은 대비:</strong> 밝은 배경에 밝은 텍스트, 어두운 배경에 어두운 텍스트는 금물입니다</li>
                        <li><strong>장식 폰트 남용:</strong> 캘리그라피, 필기체 폰트는 가독성이 매우 낮아 인포그래픽에 부적합합니다</li>
                    </ol>
                </section>

                <div className="article-nav">
                    <Link href="/blog/presentation-data-design" className="btn-secondary">← 이전: 프레젠테이션</Link>
                    <Link href="/blog" className="btn-primary">블로그 목록 →</Link>
                </div>

                <div className="cta-section">
                    <h3>최적화된 타이포그래피를 체험해보세요</h3>
                    <p>InfoMaker는 가독성에 최적화된 폰트 조합을 자동으로 적용합니다.</p>
                    <Link href="/" className="btn-primary">인포그래픽 만들기 →</Link>
                </div>
            </main>

            <footer className="footer">
                <p className="footer-text">© 2026 InfoMaker. 무료 인포그래픽 생성 도구</p>
                <div className="footer-links">
                    <Link href="/about" className="footer-link">서비스 소개</Link>
                    <Link href="/blog" className="footer-link">블로그</Link>
                    <Link href="/faq" className="footer-link">FAQ</Link>
                    <Link href="/terms" className="footer-link">이용약관</Link>
                    <Link href="/privacy" className="footer-link">개인정보처리방침</Link>
                </div>
            </footer>
        </div>
    );
}
