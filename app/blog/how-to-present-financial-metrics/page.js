import Link from 'next/link';
import '@/styles/components.css';

export const metadata = {
    title: '투자자와 경영진을 설득하는 재무 지표 및 KPI 시각화 가이드 | InfoMaker 블로그',
    description: 'MRR, CAC, LTV, 영업이익률 등 복잡한 스타트업 및 기업 재무 지표를 한눈에 파악할 수 있도록 시각화하는 노하우와 대시보드 카드 구성법을 다룹니다.',
    keywords: 'KPI 시각화, 재무 지표 인포그래픽, 스타트업 지표, IR 자료 디자인, MRR 시각화, 비즈니스 대시보드',
    openGraph: {
        title: '투자자와 경영진을 설득하는 재무 지표 및 KPI 시각화 가이드',
        description: '복잡한 재무 데이터와 핵심 성과 지표(KPI)를 명쾌하게 전달하는 시각화 전략',
        url: 'https://infographic-maker.vercel.app/blog/how-to-present-financial-metrics',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'article',
    },
};

export default function HowToPresentFinancialMetricsPage() {
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
                    <span className="article-category">비즈니스</span>
                    <time className="article-date">2026년 4월 20일</time>
                    <span className="article-readtime">⏱ 9분 읽기</span>
                </div>

                <h1>💰 투자자와 경영진을 설득하는 재무 지표 및 KPI 시각화</h1>

                <p className="article-intro">
                    투자 유치 IR 피칭이나 월간 경영 회의에서 숫자만 빼곡한 엑셀 시트를 보여주는 것은 경영진의 집중력을 잃게 만드는 지름길입니다. 
                    핵심 성장 지표(SaaS 메트릭, 재무 성과)를 직관적이고 임팩트 있게 전달하는 KPI 시각화 원칙을 정리합니다.
                </p>

                <section className="content-section">
                    <h2>1. 허영 지표(Vanity Metrics) 대신 실행 가능 지표(Actionable Metrics) 선택</h2>
                    <p>
                        누적 앱 다운로드 수, 단순 페이지뷰(PV)와 같이 항상 우상향하지만 실제 비즈니스 건전성을 반영하지 못하는 '허영 지표'는 투자자들의 신뢰를 얻지 못합니다. 
                        진정한 가치를 보여주는 핵심 4대 지표를 중심에 두세요.
                    </p>
                    <ul>
                        <li><strong>MRR / ARR (월간/연간 반복 매출):</strong> 비즈니스의 지속 가능성과 예측 가능성을 증명합니다.</li>
                        <li><strong>LTV / CAC 비율 (고객 생애 가치 대 획득 비용):</strong> 마케팅 효율성과 유닛 이코노믹스의 건전성(이상적인 비율: 3:1 이상)을 나타냅니다.</li>
                        <li><strong>순매출 유지율(NDR / Net Dollar Retention):</strong> 기존 고객이 서비스를 업그레이드하고 유지하는지(100% 초과 여부)를 보여줍니다.</li>
                        <li><strong>CAC 회수 기간(CAC Payback Period):</strong> 고객 획득 비용을 몇 개월 만에 회수할 수 있는지를 평가합니다.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>2. '현재 값 + 전년비(YoY) 증감률' 동시 표기 원칙</h2>
                    <p>
                        수치 하나만 단독으로 표시되면 그 값이 좋은지 나쁜지 청중이 직관적으로 판단할 수 없습니다. 
                        항상 <strong>절대 수치 + 상대적 증감율(%)</strong>을 나란히 배치해야 합니다.
                    </p>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--primary)', margin: '16px 0' }}>
                        <p style={{ margin: 0 }}>
                            <strong>표기 예시:</strong><br />
                            <strong>월 매출:</strong> 1억 2,500만 원 <span style={{ color: '#10B981', fontWeight: 'bold' }}>(▲ 34.8% YoY)</span><br />
                            <strong>고객 획득 비용:</strong> 14,200원 <span style={{ color: '#10B981', fontWeight: 'bold' }}>(▼ 12.5% MoM 개선)</span>
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>3. 색상을 통한 재무 신호등(Traffic Light) 체계</h2>
                    <p>
                        목표 달성 여부를 색상으로 즉시 인지할 수 있도록 표준 색상 코드를 지정하세요.
                    </p>
                    <ul>
                        <li><strong>초록/에메랄드:</strong> 목표 초과 달성 (+100% 이상) 또는 비용 절감.</li>
                        <li><strong>노랑/오렌지:</strong> 주의 필요 (목표 대비 80%~99% 달성).</li>
                        <li><strong>빨강/로즈:</strong> 심각한 미달 (목표 대비 80% 미만) 또는 이탈률 급증.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>4. 카드형 KPI 요약 컴포넌트의 위력</h2>
                    <p>
                        한 슬라이드에 10개가 넘는 차트를 욱여넣지 마세요. 
                        가장 중요한 3~4개의 핵심 지표를 카드 형태의 블록으로 나란히 배치하는 것이 발표 자료의 정석입니다.
                    </p>
                </section>

                <div className="cta-section">
                    <h3>경영 보고서용 KPI 인포그래픽 제작</h3>
                    <p>숫자와 단위, 간단한 항목명만 넣으면 전문적인 KPI 카드가 완성됩니다.</p>
                    <Link href="/" className="btn-primary">비즈니스 KPI 카드 만들기 →</Link>
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
