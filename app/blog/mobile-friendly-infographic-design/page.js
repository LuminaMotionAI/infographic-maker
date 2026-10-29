import Link from 'next/link';
import '@/styles/components.css';

export const metadata = {
    title: '모바일 환경에 최적화된 인포그래픽 디자인 가이드 | InfoMaker 블로그',
    description: '스마트폰 세로 화면에서 한눈에 읽히는 모바일 퍼스트 인포그래픽 제작 팁. 폰트 최소 크기, 카드형 분할, 스크롤 인터랙션, SNS 공유 규격을 총정리합니다.',
    keywords: '모바일 인포그래픽, 카드뉴스 디자인, 모바일 시각화, 반응형 디자인, 인포그래픽 규격, SNS 비주얼',
    openGraph: {
        title: '모바일 환경에 최적화된 인포그래픽 디자인 가이드',
        description: '작은 스마트폰 화면에서도 압도적인 가독성을 제공하는 모바일 시각화 설계법',
        url: 'https://infographic-maker.vercel.app/blog/mobile-friendly-infographic-design',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'article',
    },
};

export default function MobileFriendlyInfographicDesignPage() {
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
                    <span className="article-category">모바일 UX</span>
                    <time className="article-date">2026년 4월 14일</time>
                    <span className="article-readtime">⏱ 7분 읽기</span>
                </div>

                <h1>📱 모바일 환경에 최적화된 인포그래픽 디자인 가이드</h1>

                <p className="article-intro">
                    웹 트래픽의 70% 이상이 모바일 기기에서 발생하는 오늘날, PC 모니터 기준으로만 디자인된 가로형 인포그래픽은 
                    스마트폰에서 핀치 줌(확대)을 하지 않고는 읽을 수 없어 사용자에게 외면받습니다. 
                    모바일 화면에서도 뛰어난 전달력을 발휘하는 디자인 법칙을 살펴봅니다.
                </p>

                <section className="content-section">
                    <h2>1. 16:9 가로에서 1:1 또는 9:16 세로 비율로의 전환</h2>
                    <p>
                        과거 데스크톱 프레젠테이션 중심의 16:9 가로형 규격 대신, 스마트폰 화면을 꽉 채우는 
                        <strong>정사각형(1:1) 또는 세로 직사각형(4:5, 9:16)</strong> 비율을 채택해야 합니다.
                    </p>
                    <ul>
                        <li><strong>1:1 (1080 x 1080 px):</strong> 인스타그램 피드, 페이스북, 웹 카드뉴스용 표준 비율.</li>
                        <li><strong>4:5 (1080 x 1350 px):</strong> 피드 스크롤 시 화면 점유율을 극대화하여 시선을 붙잡는 황금비율.</li>
                        <li><strong>9:16 (1080 x 1920 px):</strong> 인스타그램 스토리, 틱톡, 유튜브 쇼츠에 완벽히 들어맞는 풀스크린 규격.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>2. 모바일 최소 가독 폰트 크기 준수</h2>
                    <p>
                        PC 포토샵이나 피그마에서 볼 때 충분히 커 보였던 글씨도 모바일 6인치 화면으로 옮겨오면 개미처럼 보이기 쉽습니다.
                    </p>
                    <ul>
                        <li><strong>핵심 숫자(Hero Number):</strong> 48px 이상으로 과감하게 키워 한눈에 각인되도록 합니다.</li>
                        <li><strong>제목(Headline):</strong> 24px ~ 32px 사이로 2줄 이내로 간결하게 작성합니다.</li>
                        <li><strong>본문 및 설명 라벨:</strong> 절대 14px 미만으로 줄이지 않아야 하며, 안전하게 16px 이상을 권장합니다.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>3. 수직 스크롤과 모듈형 카드 구조</h2>
                    <p>
                        모바일 사용자들은 좌우 스와이프나 핀치 줌에 피로를 느낍니다. 
                        정보를 자연스러운 위-아래 수직 스크롤 흐름으로 배치하고, 각 데이터를 독립된 <strong>카드(Card Module)</strong> 형태로 분할하세요.
                    </p>
                    <p>
                        카드로 구분된 정보는 뇌가 청크(Chunk) 단위로 정보를 소화할 수 있게 도와주며, 시각적 노이즈를 획기적으로 줄여줍니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>4. 엄지손가락 친화적(Thumb-Friendly) 여백 확보</h2>
                    <p>
                        화면 가장자리에 텍스트를 너무 바짝 붙이면 손가락으로 쥐고 볼 때 글자가 가려집니다. 
                        상하좌우에 최소 24px 이상의 안전 여백(Padding)을 확보하여 쾌적한 시각적 호흡을 제공해야 합니다.
                    </p>
                </section>

                <div className="cta-section">
                    <h3>모바일 반응형 인포그래픽 즉시 제작</h3>
                    <p>InfoMaker는 반응형 그리드 시스템을 기반으로 모바일과 데스크톱 모두에서 최적화된 결과물을 출력합니다.</p>
                    <Link href="/" className="btn-primary">모바일용 인포그래픽 만들기 →</Link>
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
