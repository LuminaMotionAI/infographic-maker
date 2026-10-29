import Link from 'next/link';
import '@/styles/components.css';

export const metadata = {
    title: '시각화 전 필수 체크리스트: 데이터 정제(Data Cleaning)와 오류 방지 | InfoMaker 블로그',
    description: '잘못된 원본 데이터로 만든 예쁜 차트는 위험한 결정을 부릅니다. 결측치, 이상치, 중복값 처리 및 단위 통일 등 인포그래픽 제작 전 필수 5단계 데이터 검증법을 안내합니다.',
    keywords: '데이터 정제, 데이터 클리닝, 시각화 오류 방지, 이상치 처리, 데이터 전처리, 데이터 신뢰도',
    openGraph: {
        title: '시각화 전 필수 체크리스트: 데이터 정제와 오류 방지',
        description: '아름다운 차트 뒤에 숨은 잘못된 데이터를 걸러내는 실무 데이터 전처리 가이드',
        url: 'https://infographic-maker.vercel.app/blog/data-cleaning-before-visualization',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'article',
    },
};

export default function DataCleaningBeforeVisualizationPage() {
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
                    <span className="article-category">데이터 분석</span>
                    <time className="article-date">2026년 5월 2일</time>
                    <span className="article-readtime">⏱ 8분 읽기</span>
                </div>

                <h1>🧹 시각화 전 필수 체크리스트: 데이터 정제(Data Cleaning) 5단계</h1>

                <p className="article-intro">
                    데이터 과학 분야에는 유명한 격언이 있습니다. <em>"쓰레기가 들어가면 쓰레기가 나온다(Garbage In, Garbage Out)."</em> 
                    아무리 세련되고 화려한 인포그래픽을 디자인하더라도, 바탕이 되는 기초 데이터에 오류가 있다면 
                    그것은 그럴싸하게 포장된 거짓 정보에 불과합니다. 시각화 전 거쳐야 할 필수 5단계를 정리합니다.
                </p>

                <section className="content-section">
                    <h2>1단계: 결측치(Missing Values) 확인 및 처리</h2>
                    <p>
                        비어 있는 셀이나 'N/A', 'null' 값은 평균값이나 총합을 심각하게 왜곡합니다.
                    </p>
                    <ul>
                        <li><strong>제거 vs 대체:</strong> 결측치가 소수일 때는 해당 행을 제거하거나, 비즈니스 특성에 맞게 중앙값(Median) 또는 0으로 명확히 대체한 뒤 주석을 달아야 합니다.</li>
                        <li><strong>0과 빈 값의 구분:</strong> '매출이 0원'인 것과 '해당 월의 데이터가 집계되지 않은 것'은 완전히 다른 의미입니다. 이를 혼용하지 마세요.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>2단계: 이상치(Outliers) 탐색과 원인 분석</h2>
                    <p>
                        평균 매출이 100만 원인데 특정 날에만 입력 오류로 '1억 원'이 적혀 있다면, 평균값은 완전히 망가집니다.
                    </p>
                    <ul>
                        <li>단순 입력 오타(타이핑 실수)인지, 아니면 블랙프라이데이와 같은 실제 특수 이벤트인지 원인을 분리해 조사하세요.</li>
                        <li>이상치가 통계 왜곡을 부를 때는 평균(Mean) 대신 <strong>중앙값(Median)</strong>을 핵심 지표로 표기하는 것이 훨씬 정직합니다.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>3단계: 측정 단위(Units)와 통화 일관성 확보</h2>
                    <p>
                        서로 다른 지표나 기간의 데이터를 결합할 때 단위가 엇갈리는 실수가 매우 흔합니다.
                    </p>
                    <ul>
                        <li>어떤 지표는 '천 원' 단위이고 어떤 지표는 '백만 원' 단위라면, 비교 가능한 단일 기준선으로 반드시 사전에 통일해야 합니다.</li>
                        <li>글로벌 통화(달러, 엔화, 원화)가 섞여 있다면 고정 환율 기준 시점을 명시하세요.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>4단계: 중복 데이터(Duplicates) 제거</h2>
                    <p>
                        설문조사 응답이나 결제 로그를 취합할 때 시스템 재시도로 인해 동일한 사용자의 데이터가 중복 카운트되는 경우가 흔합니다. 
                        고유 ID나 이메일을 기준으로 고유값(Unique Values)을 카운트하세요.
                    </p>
                </section>

                <section className="content-section">
                    <h2>5단계: 비율의 분모(Denominator) 타당성 검증</h2>
                    <p>
                        "A 기능 도입 후 전환율이 200% 폭증했다!"는 발표가, 사실은 모수가 1명에서 2명으로 늘어난 것에 불과하다면 이는 표본 왜곡입니다. 
                        증감율(%)을 표기할 때는 항상 표본의 기본 크기(N수)를 괄호로 명시해야 데이터의 신뢰성이 유지됩니다.
                    </p>
                </section>

                <div className="cta-section">
                    <h3>정제된 데이터로 자신 있게 인포그래픽 제작하기</h3>
                    <p>검증된 수치를 InfoMaker에 입력하여 투명하고 설득력 있는 시각 자료를 완성하세요.</p>
                    <Link href="/" className="btn-primary">정제된 데이터로 인포그래픽 만들기 →</Link>
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
