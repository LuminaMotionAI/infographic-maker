/*
 * 이용약관 페이지
 * Server Component로 전환하여 SEO 최적화
 */

import Link from 'next/link';
import '@/styles/components.css';

// 페이지별 메타데이터
export const metadata = {
    title: '이용약관 | InfoMaker - 무료 인포그래픽 메이커',
    description: 'InfoMaker 이용약관입니다. 서비스 이용 조건, 사용자의 권리와 의무, 면책조항 등을 안내합니다.',
    keywords: '이용약관, 서비스 약관, terms of service',
    openGraph: {
        title: '이용약관 | InfoMaker',
        description: 'InfoMaker 이용약관입니다.',
        url: 'https://infographic-maker.vercel.app/terms',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'website',
    },
};

export default function TermsPage() {
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
                <h1>이용약관</h1>
                <p className="last-updated">최종 수정일: 2026년 2월 4일</p>

                <p className="page-description">
                    본 약관은 InfoMaker(이하 "서비스")가 제공하는 인포그래픽 생성 서비스의
                    이용조건 및 절차, 이용자와 서비스의 권리와 의무, 기타 필요한 사항을 규정합니다.
                    서비스를 이용하기 전에 본 약관을 주의 깊게 읽어주시기 바랍니다.
                </p>

                <section className="content-section">
                    <h2>제1조 (목적)</h2>
                    <p>
                        본 약관은 InfoMaker(이하 "서비스")가 제공하는 인포그래픽 생성 서비스의
                        이용조건 및 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>제2조 (정의)</h2>
                    <ol>
                        <li><strong>"서비스"</strong>란 InfoMaker가 제공하는 온라인 인포그래픽 생성 도구를 말합니다.</li>
                        <li><strong>"이용자"</strong>란 본 약관에 동의하고 서비스를 이용하는 자를 말합니다.</li>
                        <li><strong>"콘텐츠"</strong>란 이용자가 서비스를 통해 생성한 인포그래픽 등의 결과물을 말합니다.</li>
                        <li><strong>"회원"</strong>이란 서비스에 가입하여 이용하는 자를 말합니다. (현재 회원가입 기능 없음)</li>
                    </ol>
                </section>

                <section className="content-section">
                    <h2>제3조 (약관의 효력 및 변경)</h2>
                    <ol>
                        <li>본 약관은 서비스 화면에 게시하여 공시함으로써 효력이 발생합니다.</li>
                        <li>서비스는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 공지 후 효력이 발생합니다.</li>
                        <li>이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단할 수 있습니다.</li>
                        <li>약관 변경 후에도 서비스를 계속 이용하는 경우, 변경된 약관에 동의한 것으로 간주합니다.</li>
                    </ol>
                </section>

                <section className="content-section">
                    <h2>제4조 (서비스의 제공)</h2>
                    <p>서비스는 다음과 같은 기능을 무료로 제공합니다:</p>
                    <ul>
                        <li><strong>인포그래픽 생성:</strong> 숫자와 텍스트를 입력하여 인포그래픽 이미지 생성</li>
                        <li><strong>디자인 템플릿:</strong> 다양한 스타일과 색상 테마 제공</li>
                        <li><strong>이미지 다운로드:</strong> PNG, JPG 형식으로 고해상도 이미지 다운로드</li>
                        <li><strong>공유 기능:</strong> 링크를 통한 인포그래픽 공유</li>
                        <li><strong>실시간 미리보기:</strong> 입력 내용의 실시간 프리뷰 제공</li>
                    </ul>
                    <p>
                        서비스는 운영상의 필요에 따라 제공하는 기능을 추가하거나 변경할 수 있습니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>제5조 (이용자의 권리)</h2>
                    <ol>
                        <li><strong>저작권 보유:</strong> 이용자는 서비스를 통해 생성한 콘텐츠에 대한 저작권을 보유합니다.</li>
                        <li><strong>상업적 이용:</strong> 이용자는 생성한 콘텐츠를 상업적 목적으로 자유롭게 사용할 수 있습니다.</li>
                        <li><strong>크레딧 면제:</strong> 생성한 콘텐츠 사용 시 별도의 출처 표기 의무가 없습니다.</li>
                        <li><strong>서비스 이용 중단:</strong> 이용자는 언제든지 서비스 이용을 중단할 수 있습니다.</li>
                        <li><strong>무제한 이용:</strong> 다운로드 횟수나 생성 개수에 제한이 없습니다.</li>
                    </ol>
                </section>

                <section className="content-section">
                    <h2>제6조 (이용자의 의무)</h2>
                    <p>이용자는 다음 행위를 해서는 안 됩니다:</p>
                    <ul>
                        <li>서비스의 정상적인 운영을 방해하는 행위</li>
                        <li>타인의 명예를 훼손하거나 권리를 침해하는 콘텐츠 제작</li>
                        <li>법령에 위반되는 콘텐츠 제작 (음란물, 폭력물, 혐오 표현 등)</li>
                        <li>허위 정보를 담은 콘텐츠 제작 및 유포</li>
                        <li>서비스를 이용한 무분별한 상업적 광고 행위</li>
                        <li>시스템에 대한 무단 접근 또는 해킹 시도</li>
                        <li>서비스의 소스 코드를 무단으로 복제 또는 배포하는 행위</li>
                        <li>자동화 도구를 이용한 대량의 요청 전송</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>제7조 (서비스의 중단)</h2>
                    <p>
                        서비스는 다음 경우에 서비스 제공을 일시적으로 중단할 수 있습니다:
                    </p>
                    <ul>
                        <li>시스템 점검, 보수, 교체 등의 경우</li>
                        <li>천재지변, 정전 등 불가항력적인 경우</li>
                        <li>통신 장애 등 외부 요인으로 인한 경우</li>
                        <li>기타 서비스 운영상 상당한 이유가 있는 경우</li>
                    </ul>
                    <p>
                        서비스 중단이 예정된 경우, 가능한 범위 내에서 사전에 공지합니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>제8조 (면책조항)</h2>
                    <ol>
                        <li>서비스는 이용자가 생성한 콘텐츠의 내용에 대해 책임지지 않습니다.</li>
                        <li>서비스는 천재지변 또는 이에 준하는 불가항력으로 인해 서비스를 제공할 수 없는 경우 책임을 면합니다.</li>
                        <li>서비스는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임지지 않습니다.</li>
                        <li>서비스는 무료로 제공되는 서비스로서, 이용자가 기대한 수익이나 이익에 대해 책임지지 않습니다.</li>
                        <li>서비스는 이용자 간 또는 이용자와 제3자 간의 분쟁에 개입하지 않으며, 이로 인한 손해를 배상할 책임이 없습니다.</li>
                    </ol>
                </section>

                <section className="content-section">
                    <h2>제9조 (지적재산권)</h2>
                    <ol>
                        <li>서비스의 디자인, 소스코드, 상표 등에 대한 지적재산권은 서비스 운영자에게 있습니다.</li>
                        <li>이용자는 서비스가 제공하는 템플릿과 디자인 요소를 서비스 내에서만 사용할 수 있습니다.</li>
                        <li>이용자가 생성한 콘텐츠의 저작권은 이용자에게 귀속됩니다.</li>
                    </ol>
                </section>

                <section className="content-section">
                    <h2>제10조 (분쟁 해결)</h2>
                    <p>
                        서비스 이용과 관련하여 분쟁이 발생한 경우,
                        양 당사자는 원만한 해결을 위해 성실히 협의합니다.
                        협의가 이루어지지 않는 경우, 관할 법원에 소송을 제기할 수 있습니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>제11조 (기타)</h2>
                    <p>
                        본 약관에서 정하지 않은 사항은 관련 법령 및
                        일반적인 상관례에 따릅니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>부칙</h2>
                    <p>
                        본 약관은 2026년 1월 25일부터 시행됩니다.
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
