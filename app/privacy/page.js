'use client';

/*
 * 개인정보처리방침 페이지
 */

import Link from 'next/link';
import '@/styles/components.css';

export default function PrivacyPage() {
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
                <h1>개인정보처리방침</h1>
                <p className="last-updated">최종 수정일: 2026년 1월 25일</p>

                <section className="content-section">
                    <h2>1. 수집하는 개인정보</h2>
                    <p>
                        InfoMaker는 사용자의 개인정보를 최소한으로 수집합니다.
                        본 서비스는 회원가입 없이 이용 가능하며, 다음 정보만 자동으로 수집될 수 있습니다:
                    </p>
                    <ul>
                        <li>기기 정보 (브라우저 종류, 운영체제)</li>
                        <li>접속 로그 (IP 주소, 접속 시간)</li>
                        <li>서비스 이용 기록</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>2. 개인정보의 이용 목적</h2>
                    <p>수집된 정보는 다음 목적으로만 사용됩니다:</p>
                    <ul>
                        <li>서비스 제공 및 운영</li>
                        <li>서비스 개선 및 통계 분석</li>
                        <li>부정 이용 방지</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>3. 개인정보의 보유 기간</h2>
                    <p>
                        접속 로그는 서비스 운영 및 보안 목적으로 최대 1년간 보관되며,
                        이후 안전하게 파기됩니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>4. 개인정보의 제3자 제공</h2>
                    <p>
                        InfoMaker는 원칙적으로 사용자의 개인정보를 제3자에게 제공하지 않습니다.
                        다만, 다음의 경우에는 예외로 합니다:
                    </p>
                    <ul>
                        <li>법령에 의해 요구되는 경우</li>
                        <li>사용자가 사전에 동의한 경우</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>5. 쿠키 사용</h2>
                    <p>
                        본 서비스는 사용자 경험 개선을 위해 쿠키를 사용할 수 있습니다.
                        쿠키는 사용자의 브라우저 설정에서 거부할 수 있습니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>6. 광고</h2>
                    <p>
                        본 서비스는 Google AdSense를 통해 광고를 게재할 수 있습니다.
                        Google은 사용자에게 관련성 높은 광고를 표시하기 위해
                        쿠키를 사용할 수 있습니다. 자세한 내용은
                        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                            Google 광고 정책
                        </a>을 참조하세요.
                    </p>
                </section>

                <section className="content-section">
                    <h2>7. 이용자의 권리</h2>
                    <p>사용자는 다음 권리를 행사할 수 있습니다:</p>
                    <ul>
                        <li>개인정보 열람 요청</li>
                        <li>개인정보 정정 요청</li>
                        <li>개인정보 삭제 요청</li>
                        <li>개인정보 처리 정지 요청</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>8. 개인정보 보호책임자</h2>
                    <p>
                        개인정보 관련 문의사항은
                        <Link href="/contact">문의하기</Link> 페이지를 통해 연락해 주세요.
                    </p>
                </section>

                <section className="content-section">
                    <h2>9. 방침 변경</h2>
                    <p>
                        본 개인정보처리방침은 법령 변경 또는 서비스 정책에 따라
                        변경될 수 있으며, 변경 시 본 페이지를 통해 공지합니다.
                    </p>
                </section>
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
