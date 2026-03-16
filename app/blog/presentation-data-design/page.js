/*
 * 블로그 기사 5: 프레젠테이션 데이터 슬라이드 디자인
 */

import Link from 'next/link';
import '@/styles/components.css';

export const metadata = {
    title: '프레젠테이션 데이터 슬라이드 디자인 | InfoMaker 블로그',
    description: '지루한 데이터 슬라이드를 매력적인 비주얼로 변환하는 디자인 테크닉과 원칙을 다룹니다.',
    keywords: '프레젠테이션 디자인, PPT 데이터, 슬라이드 디자인, 발표 자료',
    openGraph: {
        title: '프레젠테이션 데이터 슬라이드 디자인',
        description: '데이터 슬라이드를 매력적인 비주얼로 변환하는 테크닉.',
        url: 'https://infographic-maker.vercel.app/blog/presentation-data-design',
        siteName: 'InfoMaker', locale: 'ko_KR', type: 'article',
    },
};

export default function PresentationDesignPage() {
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
                    <span className="article-category">프레젠테이션</span>
                    <time className="article-date">2026년 2월 25일</time>
                    <span className="article-readtime">⏱ 7분 읽기</span>
                </div>

                <h1>🎯 프레젠테이션 데이터 슬라이드 디자인: 청중을 사로잡는 비주얼 표현법</h1>

                <p className="article-intro">
                    평균적인 프레젠테이션에서 청중의 주의력은 10분 만에 급격히 떨어집니다.
                    특히 숫자가 나열된 데이터 슬라이드는 청중이 집중을 잃는 가장 큰 원인입니다.
                    이 가이드에서는 데이터 슬라이드를 매력적인 비주얼로 변환하는 구체적인 방법을 알아봅니다.
                </p>

                <section className="content-section">
                    <h2>데이터 슬라이드의 3대 실수</h2>
                    <h3>실수 1: 엑셀 표를 그대로 복사</h3>
                    <p>작은 글씨로 가득 찬 표는 뒷좌석에서 읽을 수 없고, 핵심 메시지가 묻힙니다.</p>
                    <div className="tip-box">💡 <strong>해결법:</strong> 핵심 숫자 2-3개만 추출하여 크게 표시하세요. 자세한 데이터는 부록으로.</div>

                    <h3>실수 2: 차트에 모든 정보 넣기</h3>
                    <p>하나의 차트에 10개 이상의 데이터 시리즈를 넣으면 &quot;차트 쓰레기(Chart Junk)&quot;가 됩니다.</p>
                    <div className="tip-box">💡 <strong>해결법:</strong> 슬라이드 하나에 핵심 메시지 하나. 차트도 단순화하세요.</div>

                    <h3>실수 3: 맥락 없는 숫자</h3>
                    <p>&quot;매출 53억원&quot;만 보여주면 청중은 좋은 것인지 판단할 수 없습니다.</p>
                    <div className="tip-box">💡 <strong>해결법:</strong> 항상 비교 기준을 함께 제시하세요. &quot;전년 대비 +45%&quot;, &quot;업계 평균의 2.3배&quot;처럼요.</div>
                </section>

                <section className="content-section">
                    <h2>빅 넘버 슬라이드: 가장 효과적인 데이터 표현법</h2>
                    <p>
                        낸시 두아르테(Nancy Duarte)는 &quot;숫자 하나가 차트 열 개보다 강하다&quot;고 말합니다.
                        핵심 숫자를 화면 가득 크게 보여주는 빅 넘버 슬라이드는 가장 임팩트 있는 표현법입니다.
                    </p>
                    <ol>
                        <li><strong>핵심 숫자:</strong> 화면의 40% 이상, 72pt 이상</li>
                        <li><strong>단위/라벨:</strong> 숫자 옆에 24-36pt로 작게</li>
                        <li><strong>맥락 한 줄:</strong> 하단에 비교 정보 (18-24pt)</li>
                        <li><strong>여백:</strong> 숫자 주변에 충분한 여백으로 시선 집중</li>
                    </ol>
                    <p>인포그래픽 형태의 빅 넘버 슬라이드는 핵심 KPI 3-4개를 한 화면에 배치하여 전체 성과를 한눈에 보여줍니다.</p>
                </section>

                <section className="content-section">
                    <h2>색상으로 데이터에 의미 더하기</h2>
                    <ul>
                        <li><strong>신호등 체계:</strong> 초록(달성), 노랑(주의), 빨강(미달)을 일관되게 사용</li>
                        <li><strong>강조 대비:</strong> 핵심 데이터만 진한 색, 나머지는 연한 회색</li>
                        <li><strong>브랜드 색상:</strong> 회사 색상을 주색으로 사용하여 전문적인 인상</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>발표 흐름에 따른 슬라이드 구성</h2>
                    <ol>
                        <li><strong>오프닝 (1-2장):</strong> 핵심 결론 먼저 제시. 한 문장 + 핵심 숫자 인포그래픽</li>
                        <li><strong>맥락 (2-3장):</strong> 시장 환경, 전략적 배경을 핵심 수치와 함께</li>
                        <li><strong>핵심 데이터 (3-5장):</strong> KPI별 상세 분석. 슬라이드당 핵심 숫자 하나</li>
                        <li><strong>인사이트 & 액션 (2-3장):</strong> 시사점과 다음 단계 제안</li>
                    </ol>
                </section>

                <section className="content-section">
                    <h2>텍스트 최소화 원칙</h2>
                    <p>가이 가와사키(Guy Kawasaki)의 10-20-30 규칙: 폰트 최소 30pt 이상이면 자연스럽게 텍스트가 줄어들고 핵심에 집중합니다.</p>
                    <ul>
                        <li><strong>제목:</strong> 40-54pt, 굵은 산세리프</li>
                        <li><strong>핵심 숫자:</strong> 72-120pt, Extra Bold</li>
                        <li><strong>설명:</strong> 24-30pt, Regular</li>
                        <li><strong>출처:</strong> 14-18pt, 연한 색상</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>인포그래픽을 PPT에 활용하는 방법</h2>
                    <ol>
                        <li>InfoMaker로 핵심 KPI 인포그래픽 생성</li>
                        <li>PNG 형식으로 다운로드 (투명 배경 지원)</li>
                        <li>PPT 슬라이드에 삽입 후 배경색과 조화되도록 배치</li>
                        <li>필요시 텍스트 박스로 추가 맥락 정보 배치</li>
                    </ol>
                    <p>인포그래픽이 포함된 슬라이드는 텍스트만 있는 슬라이드보다 청중의 기억 유지율이 55% 높습니다.</p>
                </section>

                <div className="article-nav">
                    <Link href="/blog/sns-infographic-strategy" className="btn-secondary">← 이전: SNS 전략</Link>
                    <Link href="/blog/infographic-typography-guide" className="btn-primary">다음 글: 타이포그래피 →</Link>
                </div>

                <div className="cta-section">
                    <h3>다음 발표를 위한 인포그래픽</h3>
                    <p>핵심 KPI를 인포그래픽으로 만들어 프레젠테이션에 활용해보세요.</p>
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
