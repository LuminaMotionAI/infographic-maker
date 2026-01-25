'use client';

/*
 * About 페이지 - 서비스 소개
 */

import Link from 'next/link';
import '@/styles/components.css';

export default function AboutPage() {
    return (
        <div className="container">
            {/* 헤더 */}
            <header className="header">
                <Link href="/" className="logo">
                    <span className="logo-icon">📊</span>
                    <span className="logo-text">InfoMaker</span>
                </Link>
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
                </section>

                <section className="content-section">
                    <h2>주요 기능</h2>
                    <ul className="feature-list">
                        <li>
                            <strong>🎨 다양한 스타일</strong>
                            <p>Minimal, Gradient, Glassmorphism 등 트렌디한 디자인 스타일을 제공합니다.</p>
                        </li>
                        <li>
                            <strong>🎯 카테고리별 최적화</strong>
                            <p>비즈니스, 마케팅, 교육, SNS 등 용도에 맞는 최적화된 템플릿을 제공합니다.</p>
                        </li>
                        <li>
                            <strong>⚡ 실시간 미리보기</strong>
                            <p>데이터를 입력하면 즉시 결과를 확인할 수 있습니다.</p>
                        </li>
                        <li>
                            <strong>📥 고품질 다운로드</strong>
                            <p>PNG, JPG 형식으로 고해상도 이미지를 다운로드할 수 있습니다.</p>
                        </li>
                        <li>
                            <strong>🔗 간편한 공유</strong>
                            <p>생성한 인포그래픽을 링크로 쉽게 공유할 수 있습니다.</p>
                        </li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>이런 분들께 추천합니다</h2>
                    <ul>
                        <li>프레젠테이션에 시각 자료가 필요한 직장인</li>
                        <li>SNS에 공유할 매력적인 콘텐츠가 필요한 마케터</li>
                        <li>수업 자료를 만들어야 하는 교육자</li>
                        <li>데이터를 시각화하고 싶은 연구자</li>
                        <li>블로그, 뉴스레터에 그래픽이 필요한 크리에이터</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>무료로 사용하세요</h2>
                    <p>
                        InfoMaker는 <strong>완전히 무료</strong>입니다.
                        회원가입 없이 바로 사용할 수 있으며, 생성한 인포그래픽을
                        상업적 용도로도 자유롭게 활용하실 수 있습니다.
                    </p>
                </section>

                <div className="cta-section">
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
                    <Link href="/terms" className="footer-link">이용약관</Link>
                    <Link href="/privacy" className="footer-link">개인정보처리방침</Link>
                    <Link href="/contact" className="footer-link">문의하기</Link>
                </div>
            </footer>
        </div>
    );
}
