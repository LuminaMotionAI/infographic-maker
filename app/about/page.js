/*
 * About 페이지 - 서비스 소개
 * Server Component로 전환하여 SEO 최적화
 */

import Link from 'next/link';
import '@/styles/components.css';

// 페이지별 메타데이터 (Google 봇이 콘텐츠를 인식할 수 있도록)
export const metadata = {
    title: '서비스 소개 | InfoMaker - 무료 인포그래픽 메이커',
    description: 'InfoMaker는 누구나 쉽게 전문적인 인포그래픽을 만들 수 있는 무료 온라인 도구입니다. 다양한 스타일, 실시간 미리보기, 고품질 다운로드를 제공합니다.',
    keywords: '인포그래픽 만들기, 무료 인포그래픽, infographic maker, 데이터 시각화, 인포그래픽 도구',
    openGraph: {
        title: '서비스 소개 | InfoMaker',
        description: 'InfoMaker는 누구나 쉽게 전문적인 인포그래픽을 만들 수 있는 무료 온라인 도구입니다.',
        url: 'https://infographic-maker.vercel.app/about',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'website',
    },
};

export default function AboutPage() {
    return (
        <div className="container">
            {/* 헤더 */}
            <header className="header">
                <Link href="/" className="logo">
                    <span className="logo-icon">📊</span>
                    <span className="logo-text">InfoMaker</span>
                </Link>
                <nav className="header-nav">
                    <Link href="/guide" className="nav-link">가이드</Link>
                    <Link href="/tips" className="nav-link">팁</Link>
                    <Link href="/examples" className="nav-link">예제</Link>
                    <Link href="/faq" className="nav-link">FAQ</Link>
                </nav>
            </header>

            {/* 메인 콘텐츠 */}
            <main className="legal-content">
                <h1>서비스 소개</h1>

                <section className="content-section">
                    <h2>InfoMaker란?</h2>
                    <p>
                        InfoMaker는 누구나 쉽게 전문적인 인포그래픽을 만들 수 있는
                        <strong>무료 온라인 인포그래픽 생성 도구</strong>입니다.
                    </p>
                    <p>
                        복잡한 디자인 도구를 배우지 않아도, 숫자와 텍스트만 입력하면
                        자동으로 아름다운 인포그래픽이 생성됩니다.
                    </p>
                    <p>
                        비즈니스 보고서, SNS 마케팅, 교육 자료, 블로그 콘텐츠 등
                        다양한 목적에 활용할 수 있는 시각 자료를 빠르게 만들 수 있습니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>주요 기능</h2>
                    <ul className="feature-list">
                        <li>
                            <strong>🎨 다양한 스타일</strong>
                            <p>Minimal, Gradient, Glassmorphism 등 트렌디한 디자인 스타일을 제공합니다.
                                6가지 색상 테마와 조합하여 원하는 분위기의 인포그래픽을 만들 수 있습니다.</p>
                        </li>
                        <li>
                            <strong>🎯 카테고리별 최적화</strong>
                            <p>비즈니스, 마케팅, 교육, SNS 등 용도에 맞는 최적화된 템플릿을 제공합니다.
                                카테고리를 선택하면 적합한 색상이 자동으로 추천됩니다.</p>
                        </li>
                        <li>
                            <strong>⚡ 실시간 미리보기</strong>
                            <p>데이터를 입력하면 즉시 결과를 확인할 수 있습니다.
                                스타일이나 색상을 변경하면 바로 미리보기가 업데이트됩니다.</p>
                        </li>
                        <li>
                            <strong>📥 고품질 다운로드</strong>
                            <p>PNG, JPG 형식으로 고해상도 이미지를 다운로드할 수 있습니다.
                                웹, SNS, 문서, 인쇄물 등 다양한 용도로 활용 가능합니다.</p>
                        </li>
                        <li>
                            <strong>🔗 간편한 공유</strong>
                            <p>생성한 인포그래픽을 링크로 쉽게 공유할 수 있습니다.
                                링크를 받은 사람도 동일한 인포그래픽을 확인하고 수정할 수 있습니다.</p>
                        </li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>이런 분들께 추천합니다</h2>
                    <ul>
                        <li><strong>직장인:</strong> 프레젠테이션에 시각 자료가 필요한 분</li>
                        <li><strong>마케터:</strong> SNS에 공유할 매력적인 콘텐츠가 필요한 분</li>
                        <li><strong>교육자:</strong> 수업 자료를 만들어야 하는 분</li>
                        <li><strong>연구자:</strong> 데이터를 시각화하고 싶은 분</li>
                        <li><strong>크리에이터:</strong> 블로그, 뉴스레터에 그래픽이 필요한 분</li>
                        <li><strong>학생:</strong> 발표 자료를 더 멋지게 만들고 싶은 분</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>무료로 사용하세요</h2>
                    <p>
                        InfoMaker는 <strong>완전히 무료</strong>입니다.
                        회원가입 없이 바로 사용할 수 있으며, 생성한 인포그래픽을
                        상업적 용도로도 자유롭게 활용하실 수 있습니다.
                    </p>
                    <p>
                        다운로드 횟수나 생성 개수에 제한이 없으며,
                        언제든지 원하는 만큼 인포그래픽을 만들 수 있습니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>시작하는 방법</h2>
                    <ol>
                        <li><strong>제목 입력:</strong> 인포그래픽의 제목을 입력합니다</li>
                        <li><strong>데이터 입력:</strong> 표시할 숫자와 라벨을 입력합니다 (최대 6개)</li>
                        <li><strong>스타일 선택:</strong> 원하는 디자인 스타일과 색상을 선택합니다</li>
                        <li><strong>다운로드:</strong> PNG 또는 JPG로 저장합니다</li>
                    </ol>
                    <p>단 몇 분 만에 전문적인 인포그래픽을 완성할 수 있습니다!</p>
                </section>

                <div className="cta-section">
                    <h3>지금 바로 시작하세요!</h3>
                    <p>무료로 인포그래픽을 만들어보세요.</p>
                    <Link href="/" className="btn-primary">
                        지금 바로 시작하기 →
                    </Link>
                </div>
            </main>

            {/* 푸터 */}
            <footer className="footer">
                <p className="footer-text">© 2026 InfoMaker. 무료 인포그래픽 생성 도구</p>
                <div className="footer-links">
                    <Link href="/about" className="footer-link">서비스 소개</Link>
                    <Link href="/guide" className="footer-link">사용 가이드</Link>
                    <Link href="/tips" className="footer-link">제작 팁</Link>
                    <Link href="/examples" className="footer-link">예제</Link>
                    <Link href="/faq" className="footer-link">FAQ</Link>
                    <Link href="/terms" className="footer-link">이용약관</Link>
                    <Link href="/privacy" className="footer-link">개인정보처리방침</Link>
                    <Link href="/contact" className="footer-link">문의하기</Link>
                </div>
            </footer>
        </div>
    );
}
