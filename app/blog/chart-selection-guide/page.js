import Link from 'next/link';
import '@/styles/components.css';

export const metadata = {
    title: '데이터 목적별 차트 선택 완벽 가이드: 막대, 꺾은선, 원형, 히트맵 비교 | InfoMaker 블로그',
    description: '어떤 차트를 써야 할지 고민되시나요? 비교, 추세, 구성비, 상관관계 등 데이터의 목적에 따라 가장 효과적인 차트 유형을 선택하는 기준과 실무 활용 팁을 소개합니다.',
    keywords: '차트 선택, 데이터 시각화 가이드, 막대 차트, 꺾은선 차트, 원형 차트, 히트맵, 인포그래픽 차트',
    openGraph: {
        title: '데이터 목적별 차트 선택 완벽 가이드',
        description: '비교, 추세, 구성비, 분포 등 목적에 따른 최적의 차트 선택 가이드',
        url: 'https://infographic-maker.vercel.app/blog/chart-selection-guide',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'article',
    },
};

export default function ChartSelectionGuidePage() {
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
                    <span className="article-category">데이터 시각화</span>
                    <time className="article-date">2026년 3월 25일</time>
                    <span className="article-readtime">⏱ 9분 읽기</span>
                </div>

                <h1>📈 데이터 목적별 차트 선택 완벽 가이드: 올바른 시각화 유형 고르기</h1>

                <p className="article-intro">
                    잘못된 차트를 선택하면 아무리 정확한 데이터라도 전달하고자 하는 메시지가 왜곡되거나 청중에게 혼란을 줍니다. 
                    데이터의 성격과 커뮤니케이션 목표에 알맞은 최적의 시각화 도구를 선택하는 실무 프레임워크를 알아봅니다.
                </p>

                <section className="content-section">
                    <h2>1. 차트 선택 전 반드시 던져야 할 4가지 질문</h2>
                    <p>
                        디자인 툴이나 스프레드시트를 열기 전, 가장 먼저 분석의 본질을 파악해야 합니다.
                    </p>
                    <ul>
                        <li><strong>청중에게 보여주고자 하는 핵심 통찰은 무엇인가?</strong> (단순 순위인가, 시간 흐름에 따른 변동인가?)</li>
                        <li><strong>데이터 포인트의 개수가 몇 개인가?</strong> (3개 미만의 소규모 비교인가, 수백 개의 밀집 데이터인가?)</li>
                        <li><strong>시간의 연속성이 포함되어 있는가?</strong> (월별/연도별 추세인가, 특정 시점의 단면인가?)</li>
                        <li><strong>비교의 기준이 절대적 크기인가, 상대적 비율인가?</strong></li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>2. 데이터 목적별 4대 차트 분류 체계</h2>

                    <h3>① 항목 간 비교 (Comparison)</h3>
                    <p>
                        여러 카테고리나 그룹의 크기를 비교할 때는 <strong>막대형 차트(Bar / Column Chart)</strong>가 가장 신뢰할 수 있는 선택입니다.
                    </p>
                    <ul>
                        <li><strong>세로 막대(Column):</strong> 비교 항목이 7개 이하이고 항목 레이블의 길이가 짧을 때 적합합니다.</li>
                        <li><strong>가로 막대(Bar):</strong> 항목 이름이 길거나 비교 대상이 10개 이상으로 많을 때 가독성이 극대화됩니다.</li>
                        <li><em>주의점:</em> Y축(또는 X축) 기준점은 반드시 0에서 시작해야 시각적 왜곡이 발생하지 않습니다.</li>
                    </ul>

                    <h3>② 시간에 따른 추세 (Trend Over Time)</h3>
                    <p>
                        연속적인 시간 축(일, 주, 월, 분기, 연)에 따른 지표 변화를 추적할 때는 <strong>꺾은선 차트(Line Chart)</strong> 또는 <strong>영역 차트(Area Chart)</strong>를 사용합니다.
                    </p>
                    <ul>
                        <li><strong>꺾은선 차트:</strong> 연속 데이터의 상승/하강 추세를 가장 직관적으로 드러냅니다. 최대 4~5개 이하의 계열만 겹쳐 표시하는 것이 이상적입니다.</li>
                        <li><strong>영역 차트:</strong> 전체 총량의 변화와 각 구성 성분의 기여도를 누적(Stacked)해서 함께 보여줄 때 유리합니다.</li>
                    </ul>

                    <h3>③ 전체 대비 구성 비율 (Composition)</h3>
                    <p>
                        전체 100% 안에서 각 부문이 차지하는 점유율을 나타낼 때는 다음 차트를 활용합니다.
                    </p>
                    <ul>
                        <li><strong>도넛 차트(Donut Chart):</strong> 파이 차트보다 중앙 공간을 활용할 수 있어 핵심 수치나 아이콘을 배치하기 좋습니다. 구성 항목은 최대 5개 이내로 제한해야 가독성이 유지됩니다.</li>
                        <li><strong>트리맵(Treemap):</strong> 계층 구조가 있거나 항목이 10개 이상으로 세분화된 비율 데이터를 면적 형태로 비교할 때 탁월합니다.</li>
                    </ul>

                    <h3>④ 두 변수 간의 관계 및 상관성 (Correlation)</h3>
                    <p>
                        두 개 이상의 측정값이 서로 어떤 관계(양의 상관관계, 음의 상관관계, 군집 등)를 맺고 있는지 탐색할 때 사용합니다.
                    </p>
                    <ul>
                        <li><strong>산점도(Scatter Plot):</strong> 광고비와 매출액, 수면 시간과 집중도 등 두 수치형 변수 간의 패턴을 확인할 때 기본이 됩니다.</li>
                        <li><strong>히트맵(Heatmap):</strong> 요일별/시간대별 웹사이트 트래픽 등 격자 구조에서 데이터 밀도를 색상 채도로 표현할 때 효과적입니다.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>3. 현업에서 자주 범하는 차트 선택 실수와 해결책</h2>
                    <ol>
                        <li>
                            <strong>무리한 3D 입체 효과 적용:</strong> 3D 차트는 원근감으로 인해 실제 값보다 앞쪽 영역이 과장되어 보이는 치명적인 왜곡을 낳습니다. 평면(2D) 설계를 원칙으로 하세요.
                        </li>
                        <li>
                            <strong>조각이 너무 많은 파이 차트:</strong> 7개 이상의 조각으로 쪼개진 파이 차트는 사람이 각도를 구분하기 불가능합니다. 상위 4개 항목을 제외하고는 '기타'로 묶거나 가로 막대 차트로 전환하세요.
                        </li>
                        <li>
                            <strong>이중 축(Dual Axis)의 남용:</strong> 단위가 다른 두 척도를 한 차트에 겹치면 관람자에게 혼란을 줍니다. 보조 축보다는 나란히 배치된 두 개의 서브 플롯을 사용하는 것이 명확합니다.
                        </li>
                    </ol>
                </section>

                <section className="content-section">
                    <h2>4. 요약: InfoMaker 템플릿과 연계한 빠른 시작</h2>
                    <p>
                        복잡한 통계 차트 소프트웨어가 필요하지 않은 비즈니스 요약 인포그래픽에서는 
                        <strong>핵심 수치(KPI 카드) + 명확한 라벨링</strong> 조합이 복잡한 차트보다 청중의 뇌리에 훨씬 강력하게 각인됩니다. 
                        InfoMaker를 활용하여 3~5개의 핵심 지표를 카드형 인포그래픽으로 즉시 구성해 보세요.
                    </p>
                </section>

                <div className="cta-section">
                    <h3>지금 바로 최적의 인포그래픽을 만들어보세요</h3>
                    <p>정확한 숫자와 라벨만 입력하면 전문적인 비주얼이 자동 완성됩니다.</p>
                    <Link href="/" className="btn-primary">무료 인포그래픽 제작 시작 →</Link>
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
