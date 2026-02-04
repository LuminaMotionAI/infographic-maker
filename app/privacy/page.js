/*
 * 개인정보처리방침 페이지
 * Server Component로 전환하여 SEO 최적화
 */

import Link from 'next/link';
import '@/styles/components.css';

// 페이지별 메타데이터
export const metadata = {
    title: '개인정보처리방침 | InfoMaker - 무료 인포그래픽 메이커',
    description: 'InfoMaker 개인정보처리방침입니다. 수집하는 개인정보, 이용 목적, 보유 기간, 이용자의 권리 등을 안내합니다.',
    keywords: '개인정보처리방침, 개인정보보호, privacy policy',
    openGraph: {
        title: '개인정보처리방침 | InfoMaker',
        description: 'InfoMaker 개인정보처리방침입니다.',
        url: 'https://infographic-maker.vercel.app/privacy',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'website',
    },
};

export default function PrivacyPage() {
    return (
        <div className="container">
            {/* 헤더 */}
            <header className="header">
                <Link href="/" className="logo">
                    <span className="logo-icon">📊</span>
                    <span className="logo-text">InfoMaker</span>
                </Link>
                <nav className="header-nav">
                    <Link href="/about" className="nav-link">소개</Link>
                    <Link href="/guide" className="nav-link">가이드</Link>
                    <Link href="/faq" className="nav-link">FAQ</Link>
                </nav>
            </header>

            {/* 메인 콘텐츠 */}
            <main className="legal-content">
                <h1>개인정보처리방침</h1>
                <p className="last-updated">최종 수정일: 2026년 2월 4일</p>

                <p className="page-description">
                    InfoMaker(이하 "서비스")는 이용자의 개인정보를 중요시하며,
                    개인정보보호법 등 관련 법령을 준수합니다.
                    본 개인정보처리방침을 통해 이용자의 개인정보가 어떻게 수집, 이용,
                    보호되는지 알려드립니다.
                </p>

                <section className="content-section">
                    <h2>1. 수집하는 개인정보</h2>
                    <p>
                        InfoMaker는 사용자의 개인정보를 최소한으로 수집합니다.
                        본 서비스는 회원가입 없이 이용 가능하며, 다음 정보만 자동으로 수집될 수 있습니다:
                    </p>
                    <ul>
                        <li><strong>기기 정보:</strong> 브라우저 종류, 운영체제, 화면 해상도</li>
                        <li><strong>접속 로그:</strong> IP 주소, 접속 시간, 접속 페이지</li>
                        <li><strong>서비스 이용 기록:</strong> 인포그래픽 생성 횟수, 사용한 기능</li>
                    </ul>
                    <p>
                        위 정보는 서비스 개선 및 통계 분석 목적으로만 사용되며,
                        개인을 식별할 수 없는 형태로 처리됩니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>2. 개인정보의 이용 목적</h2>
                    <p>수집된 정보는 다음 목적으로만 사용됩니다:</p>
                    <ul>
                        <li><strong>서비스 제공 및 운영:</strong> 인포그래픽 생성 기능 제공</li>
                        <li><strong>서비스 개선:</strong> 사용자 경험 분석 및 기능 개선</li>
                        <li><strong>통계 분석:</strong> 서비스 이용 현황 파악</li>
                        <li><strong>부정 이용 방지:</strong> 비정상적인 접근 탐지 및 차단</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>3. 개인정보의 보유 기간</h2>
                    <p>
                        접속 로그는 서비스 운영 및 보안 목적으로 최대 1년간 보관되며,
                        이후 안전하게 파기됩니다. 통계 데이터는 개인을 식별할 수 없는
                        형태로 기간 제한 없이 보관될 수 있습니다.
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
                        <li>수사기관의 법적 요청이 있는 경우</li>
                        <li>사용자가 사전에 동의한 경우</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>5. 쿠키 사용</h2>
                    <p>
                        본 서비스는 사용자 경험 개선을 위해 쿠키를 사용할 수 있습니다.
                        쿠키는 웹사이트가 사용자의 브라우저에 저장하는 작은 데이터 파일입니다.
                    </p>
                    <p>
                        쿠키를 통해 수집되는 정보:
                    </p>
                    <ul>
                        <li>사용자 설정 (선택한 스타일, 색상 등)</li>
                        <li>방문 기록</li>
                        <li>세션 정보</li>
                    </ul>
                    <p>
                        쿠키는 사용자의 브라우저 설정에서 거부할 수 있습니다.
                        단, 쿠키를 거부하면 일부 기능이 정상적으로 작동하지 않을 수 있습니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>6. 광고</h2>
                    <p>
                        본 서비스는 Google AdSense를 통해 광고를 게재할 수 있습니다.
                        Google은 사용자에게 관련성 높은 광고를 표시하기 위해
                        쿠키를 사용할 수 있습니다.
                    </p>
                    <p>
                        Google의 광고 관련 정책에 대한 자세한 내용은 다음 링크를 참조하세요:
                    </p>
                    <ul>
                        <li>
                            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                                Google 광고 정책
                            </a>
                        </li>
                        <li>
                            <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">
                                Google 광고 설정
                            </a>
                        </li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>7. 이용자의 권리</h2>
                    <p>사용자는 다음 권리를 행사할 수 있습니다:</p>
                    <ul>
                        <li><strong>개인정보 열람 요청:</strong> 수집된 개인정보의 내용을 확인할 수 있습니다</li>
                        <li><strong>개인정보 정정 요청:</strong> 부정확한 정보의 수정을 요청할 수 있습니다</li>
                        <li><strong>개인정보 삭제 요청:</strong> 수집된 정보의 삭제를 요청할 수 있습니다</li>
                        <li><strong>개인정보 처리 정지 요청:</strong> 정보 처리의 중단을 요청할 수 있습니다</li>
                    </ul>
                    <p>
                        위 권리를 행사하려면 <Link href="/contact">문의하기</Link> 페이지를 통해 연락해 주세요.
                    </p>
                </section>

                <section className="content-section">
                    <h2>8. 개인정보의 안전성 확보 조치</h2>
                    <p>
                        InfoMaker는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
                    </p>
                    <ul>
                        <li>SSL/TLS 암호화를 통한 데이터 전송 보안</li>
                        <li>접근 권한 관리 및 제한</li>
                        <li>정기적인 보안 점검</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>9. 개인정보 보호책임자</h2>
                    <p>
                        개인정보 관련 문의사항은
                        <Link href="/contact"> 문의하기</Link> 페이지를 통해 연락해 주세요.
                        빠른 시일 내에 성실히 답변드리겠습니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>10. 방침 변경</h2>
                    <p>
                        본 개인정보처리방침은 법령 변경 또는 서비스 정책에 따라
                        변경될 수 있으며, 변경 시 본 페이지를 통해 공지합니다.
                        중요한 변경 사항이 있는 경우, 서비스 내 공지를 통해 별도로 알려드립니다.
                    </p>
                </section>

                <div className="cta-section">
                    <Link href="/" className="btn-primary">
                        서비스 이용하기 →
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
