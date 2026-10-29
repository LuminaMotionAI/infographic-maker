import Link from 'next/link';
import '@/styles/components.css';

export const metadata = {
    title: '데이터 스토리텔링 4단계 프레임워크: 숫자를 강력한 행동으로 바꾸는 법 | InfoMaker 블로그',
    description: '단순한 숫자 나열을 넘어 청중의 마음을 움직이고 행동을 유도하는 데이터 스토리텔링 기법을 소개합니다. 맥락 설정, 갈등 제시, 해결책 도출, 시각적 클라이맥스 설계법.',
    keywords: '데이터 스토리텔링, 데이터 시각화, 설득 프레젠테이션, 인포그래픽 기획, 비즈니스 보고서, 데이터 전달력',
    openGraph: {
        title: '데이터 스토리텔링 4단계 프레임워크',
        description: '숫자를 설득력 있는 스토리로 바꾸어 청중의 의사결정을 이끌어내는 방법',
        url: 'https://infographic-maker.vercel.app/blog/storytelling-with-data-framework',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'article',
    },
};

export default function StorytellingWithDataFrameworkPage() {
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
                    <span className="article-category">데이터 스토리텔링</span>
                    <time className="article-date">2026년 4월 2일</time>
                    <span className="article-readtime">⏱ 9분 읽기</span>
                </div>

                <h1>📖 데이터 스토리텔링 4단계 프레임워크: 숫자를 행동으로 바꾸는 기술</h1>

                <p className="article-intro">
                    많은 실무자들이 데이터 분석 결과를 있는 그대로 빽빽하게 보여주면 청중이 알아서 이해할 것이라 착각합니다. 
                    그러나 사람은 숫자가 아니라 <strong>이야기(Story)</strong>를 기억합니다. 
                    단순한 수치 나열을 청중을 매료시키는 비즈니스 스토리로 전환하는 4단계 프레임워크를 공개합니다.
                </p>

                <section className="content-section">
                    <h2>왜 데이터에 스토리가 필요할까?</h2>
                    <p>
                        신경과학 연구에 따르면, 순수 사실과 통계 수치만을 접했을 때 뇌는 언어 처리 영역인 브로카 및 베르니케 영역만 활성화됩니다. 
                        반면 이야기를 들을 때 뇌는 감정, 시각, 공간 지각을 담당하는 복합 감각 영역 전체가 반응합니다. 
                        데이터에 맥락과 인과관계를 부여하는 순간, 청중은 단순한 관찰자에서 이야기의 참여자로 변화합니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>성공적인 데이터 스토리텔링 4단계</h2>

                    <h3>1단계: 상황과 맥락(Context) 설정하기</h3>
                    <p>
                        "무엇이 일어나고 있는가?"를 규정하는 단계입니다. 
                        청중이 공감할 수 있는 기준점(Baseline)과 업계의 현황, 현재 우리가 처한 출발선을 명확히 제시합니다.
                    </p>
                    <p>
                        <em>예시:</em> "지난 3년 동안 우리 회사의 고객 획득 비용(CAC)은 안정적인 15,000원을 유지해 왔습니다."
                    </p>

                    <h3>2단계: 긴장감과 문제(Conflict / Tension) 제시</h3>
                    <p>
                        스토리에는 반드시 장애물이나 예측하지 못한 변화가 등장해야 청중의 주의를 사로잡을 수 있습니다. 
                        데이터에서 발견된 이상 징후, 시장 환경의 급변, 경쟁사의 추격 등 시급한 도전 과제를 지표로 강조합니다.
                    </p>
                    <p>
                        <em>예시:</em> "그러나 지난 분기 신규 매체 진입 이후 CAC가 42% 폭증하여 21,300원에 도달했습니다."
                    </p>

                    <h3>3단계: 근본 원인의 발견과 전환점(Resolution & Climax)</h3>
                    <p>
                        데이터를 세부 분해하여 문제의 진짜 원인이 무엇인지 밝혀냅니다. 
                        이 단계에서 가장 임팩트 있는 시각 자료(핵심 인포그래픽 지표)가 등장해야 합니다.
                    </p>
                    <p>
                        <em>예시:</em> "이탈 경로 분석 결과, 모바일 결제 단계에서 30초 이상의 로딩 지연으로 64%의 고객이 이탈하고 있었습니다."
                    </p>

                    <h3>4단계: 명확한 행동 촉구(Call to Action)</h3>
                    <p>
                        데이터 분석의 궁극적인 종착지는 '의사결정과 실행'입니다. 
                        청중이 당장 무엇을 승인하거나 결정해야 하는지 명료하게 요구합니다.
                    </p>
                    <p>
                        <em>예시:</em> "결제 API 최적화 프로젝트에 2주간 엔지니어 2명을 투입하면 월간 1억 4천만 원의 손실을 방어할 수 있습니다."
                    </p>
                </section>

                <section className="content-section">
                    <h2>데이터 비주얼을 스토리와 결합하는 팁</h2>
                    <ul>
                        <li><strong>단 하나의 주인공 선정:</strong> 한 화면에 모든 지표를 대등한 크기로 늘어놓지 마세요. 가장 중요한 '단 하나의 핵심 지표'를 시각적으로 가장 크게 강조합니다.</li>
                        <li><strong>색상 대비로 클라이맥스 연출:</strong> 배경과 보조 지표는 차분한 무채색(그레이 톤)으로 처리하고, 해결해야 할 핵심 문제 지표에만 포인트 색상을 적용하세요.</li>
                        <li><strong>간결한 요약 카피:</strong> "월별 이탈률"이라는 무미건조한 제목 대신 "모바일 결제 구간에서 64% 이탈 집중 발생"처럼 데이터가 전하는 교훈을 제목으로 작성하세요.</li>
                    </ul>
                </section>

                <div className="cta-section">
                    <h3>인상적인 데이터 스토리를 위한 인포그래픽</h3>
                    <p>InfoMaker를 통해 팀원과 의사결정권자의 마음을 움직이는 시각 요약본을 만들어보세요.</p>
                    <Link href="/" className="btn-primary">스토리보드 인포그래픽 제작하기 →</Link>
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
