import Link from 'next/link';
import '@/styles/components.css';

export const metadata = {
    title: '인포그래픽 제작 시 피해야 할 7가지 치명적 실수 | InfoMaker 블로그',
    description: '디자인 초보자와 실무자가 가장 흔히 저지르는 7가지 인포그래픽 오류(정보 과적, 폰트 혼란, 축 왜곡, 가독성 저하 등)와 이를 극복하는 실전 해결책을 정리했습니다.',
    keywords: '인포그래픽 실수, 데이터 시각화 오류, 디자인 가이드, 인포그래픽 꿀팁, 차트 오류, 비즈니스 디자인',
    openGraph: {
        title: '인포그래픽 제작 시 피해야 할 7가지 치명적 실수',
        description: '시각화의 신뢰도를 떨어뜨리는 대표적인 7가지 실수와 올바른 해결법',
        url: 'https://infographic-maker.vercel.app/blog/infographic-mistakes-to-avoid',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'article',
    },
};

export default function InfographicMistakesToAvoidPage() {
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
                    <span className="article-category">디자인 팁</span>
                    <time className="article-date">2026년 4월 8일</time>
                    <span className="article-readtime">⏱ 8분 읽기</span>
                </div>

                <h1>⚠️ 인포그래픽 제작 시 피해야 할 7가지 치명적인 실수</h1>

                <p className="article-intro">
                    잘 만든 인포그래픽은 수많은 단어보다 강력하지만, 잘못 설계된 인포그래픽은 데이터를 왜곡하고 발표자의 신뢰를 무너뜨립니다. 
                    현업에서 가장 빈번하게 발생하는 7가지 대표적인 실수와 그 교정 방법을 소개합니다.
                </p>

                <section className="content-section">
                    <h2>실수 1: 지나친 정보 과적 (Information Overload)</h2>
                    <p>
                        "알고 있는 모든 데이터를 인포그래픽 하나에 쏟아부어야 한다"는 욕심은 독자를 가장 빠르게 이탈시키는 주범입니다. 
                        인포그래픽의 본질은 축약과 큐레이션입니다.
                    </p>
                    <p>
                        <strong>해결책:</strong> 한 화면당 최대 3~6개의 핵심 데이터 포인트만 남기고, 부수적인 설명은 본문이나 부록으로 과감히 덜어내세요.
                    </p>
                </section>

                <section className="content-section">
                    <h2>실수 2: 폰트(서체)의 무분별한 혼용</h2>
                    <p>
                        한 이미지 안에 4~5가지 이상의 각기 다른 서체를 사용하면 조잡하고 비전문적인 인상을 줍니다.
                    </p>
                    <p>
                        <strong>해결책:</strong> 전체 그래픽에서 서체는 최대 2개(제목용 서체 1개 + 본문용 가독성 고딕 1개)로 통일하고, 굵기(Bold, Regular, Light)의 변화로 위계를 표현하세요.
                    </p>
                </section>

                <section className="content-section">
                    <h2>실수 3: 잘려나간 Y축 기준점 (Truncated Y-Axis)</h2>
                    <p>
                        막대그래프의 기준축을 0이 아닌 90%부터 시작하게 만들면, 실제로는 1%의 미세한 차이에 불과한 수치가 마치 10배 이상 차이나는 것처럼 왜곡됩니다.
                    </p>
                    <p>
                        <strong>해결책:</strong> 막대그래프의 베이스라인은 항상 절대 영점(0)에서 시작해야 하며, 돋보기 효과가 필요하다면 꺾은선 차트나 수치 텍스트 카드를 사용하는 것이 윤리적입니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>실수 4: 배경과 텍스트의 대비 부족</h2>
                    <p>
                        밝은 회색 배경 위에 옅은 파스텔톤 텍스트를 배치하면 젊은 사용자조차 눈을 찌푸려야 읽을 수 있습니다.
                    </p>
                    <p>
                        <strong>해결책:</strong> 항상 높은 명도 대비(최소 4.5:1 이상)를 유지하세요. 화려함보다 명확성이 디자인의 제1원칙입니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>실수 5: 비율과 맞지 않는 아이콘 크기</h2>
                    <p>
                        아이콘의 크기를 데이터의 양에 비례하게 키우는 경우가 있습니다. 
                        그러나 사람의 눈은 아이콘의 '길이'가 아닌 '면적'으로 크기를 인지하기 때문에, 수치가 2배 증가했을 때 가로세로를 2배 키우면 면적은 4배로 왜곡되어 보입니다.
                    </p>
                    <p>
                        <strong>해결책:</strong> 크기 변화보다는 개수(픽토그램 반복)나 게이지 바 형태로 수치를 표현하세요.
                    </p>
                </section>

                <section className="content-section">
                    <h2>실수 6: 시선의 흐름(Visual Flow) 무시</h2>
                    <p>
                        사람은 자연스럽게 왼쪽에서 오른쪽으로, 위에서 아래로 시선을 옮깁니다(Z자 또는 F자 패턴). 
                        이 자연스러운 독서 동선을 무시하고 시선이 이리저리 튀게 만들면 정보의 인과관계를 놓치게 됩니다.
                    </p>
                    <p>
                        <strong>해결책:</strong> 숫자 순서 번호(1, 2, 3)를 명시하거나, 화살표와 유도선을 사용해 관람자의 시선을 부드럽게 이끄세요.
                    </p>
                </section>

                <section className="content-section">
                    <h2>실수 7: 출처(Source) 누락</h2>
                    <p>
                        아무리 훌륭한 시각 자료라도 데이터의 출처와 기준 시점이 기재되어 있지 않으면 공신력을 가질 수 없습니다.
                    </p>
                    <p>
                        <strong>해결책:</strong> 하단 가장자리에 작은 텍스트로 데이터 수집 기관과 조사 연월을 정확히 명시하세요. (예: "자료: 통계청 2026년 1분기 가계동향조사")
                    </p>
                </section>

                <div className="cta-section">
                    <h3>실수 없는 인포그래픽 템플릿 사용하기</h3>
                    <p>InfoMaker는 가독성과 정렬이 사전에 완벽히 최적화된 레이아웃을 제공합니다.</p>
                    <Link href="/" className="btn-primary">정돈된 인포그래픽 제작하기 →</Link>
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
