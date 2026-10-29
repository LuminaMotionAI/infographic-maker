import Link from 'next/link';
import '@/styles/components.css';

export const metadata = {
    title: '시선을 사로잡는 시각적 위계(Hierarchy)와 색상 대비 원칙 | InfoMaker 블로그',
    description: '디자인의 성패를 가르는 시각적 계층 구조(Visual Hierarchy) 구축법과 60-30-10 색상 배색 공식. 사용자가 첫 3초 안에 핵심 정보를 인지하게 만드는 레이아웃 법칙을 소개합니다.',
    keywords: '시각적 위계, 비주얼 하이어라키, 색상 배색 원칙, 60-30-10 법칙, 인포그래픽 디자인, 정보 디자인',
    openGraph: {
        title: '시각적 위계와 색상 대비 원칙',
        description: '독자의 시선을 사로잡고 정보 전달력을 극대화하는 시각적 계층 설계',
        url: 'https://infographic-maker.vercel.app/blog/color-contrast-and-hierarchy',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'article',
    },
};

export default function ColorContrastAndHierarchyPage() {
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
                    <time className="article-date">2026년 4월 26일</time>
                    <span className="article-readtime">⏱ 8분 읽기</span>
                </div>

                <h1>🎯 시선을 사로잡는 시각적 위계(Visual Hierarchy)와 색상 대비 원칙</h1>

                <p className="article-intro">
                    잘 정돈된 디자인과 난잡한 디자인의 가장 결정적인 차이는 <strong>'시각적 위계(Visual Hierarchy)'</strong>의 유무입니다. 
                    관람자가 어떤 순서로 정보를 읽어야 할지 본능적으로 알게 만드는 레이아웃과 배색 원칙을 살펴봅니다.
                </p>

                <section className="content-section">
                    <h2>1. 시각적 위계를 형성하는 4대 기본 도구</h2>
                    <p>
                        디자이너는 사용자의 시선 흐름을 인위적으로 통제할 수 있습니다. 이를 달성하는 4가지 물리적 속성은 다음과 같습니다.
                    </p>
                    <ol>
                        <li>
                            <strong>크기(Size & Scale):</strong> 가장 중요한 정보는 물리적으로 가장 커야 합니다. 핵심 통계 숫자는 본문 설명 글씨보다 최소 2.5배에서 4배 이상 커야 시선을 압도합니다.
                        </li>
                        <li>
                            <strong>무게와 굵기(Weight):</strong> 굵은 볼드(Bold) 서체는 얇은 서체보다 자연스럽게 시선을 먼저 끌어당깁니다.
                        </li>
                        <li>
                            <strong>위치(Position):</strong> 대부분의 문화권에서 시선은 상단 좌측에서 시작해 하단 우측으로 이동합니다. 가장 중요한 결론이나 헤드라인은 상단 1/3 영역에 두어야 합니다.
                        </li>
                        <li>
                            <strong>여백(Negative Space):</strong> 중요한 요소 주변에 충분한 빈 공간(여백)을 부여하면, 요소 자체가 마치 조명을 비춘 무대 주인공처럼 부각됩니다.
                        </li>
                    </ol>
                </section>

                <section className="content-section">
                    <h2>2. 디자이너들의 황금 배색 공식: 60-30-10 법칙</h2>
                    <p>
                        인테리어와 그래픽 디자인 전반에서 쓰이는 가장 안전하고 세련된 색채 배분 공식입니다.
                    </p>
                    <ul>
                        <li><strong>60% 주조색 (Dominant Color):</strong> 배경이나 넓은 카드 영역을 차지하는 베이스 색상입니다. 일반적으로 편안한 화이트, 옅은 그레이, 또는 깊은 네이비 다크 톤을 씁니다.</li>
                        <li><strong>30% 보조색 (Secondary Color):</strong> 본문 텍스트, 경계선, 서브 타이틀 등 구조를 잡아주는 색상입니다. 주조색과 차분하게 어우러지는 톤을 선택합니다.</li>
                        <li><strong>10% 강조색 (Accent Color):</strong> 가장 중요한 핵심 숫자, CTA 버튼, 성공/위험 알림에만 제한적으로 사용하는 강력한 포인트 색상입니다.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>3. 흔히 범하는 위계 붕괴 현상</h2>
                    <p>
                        "이것도 중요하고, 저것도 중요하니 모두 굵은 빨간색으로 표기하자!"는 순간 디자인의 위계는 즉시 붕괴합니다. 
                        모든 것이 강조되면 결국 아무것도 강조되지 않는 결과를 낳습니다.
                    </p>
                </section>

                <div className="cta-section">
                    <h3>완벽한 배색 템플릿으로 인포그래픽 제작</h3>
                    <p>InfoMaker가 사전 설계한 스타일 테마를 적용해 완벽한 시각적 위계를 경험해보세요.</p>
                    <Link href="/" className="btn-primary">템플릿 선택하여 시작하기 →</Link>
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
