'use client';

/*
 * 이용약관 페이지
 */

import Link from 'next/link';
import '@/styles/components.css';

export default function TermsPage() {
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
                <h1>이용약관</h1>
                <p className="last-updated">최종 수정일: 2026년 1월 25일</p>

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
                        <li>"서비스"란 InfoMaker가 제공하는 온라인 인포그래픽 생성 도구를 말합니다.</li>
                        <li>"이용자"란 본 약관에 동의하고 서비스를 이용하는 자를 말합니다.</li>
                        <li>"콘텐츠"란 이용자가 서비스를 통해 생성한 인포그래픽 등의 결과물을 말합니다.</li>
                    </ol>
                </section>

                <section className="content-section">
                    <h2>제3조 (약관의 효력 및 변경)</h2>
                    <ol>
                        <li>본 약관은 서비스 화면에 게시하여 공시함으로써 효력이 발생합니다.</li>
                        <li>서비스는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 공지 후 효력이 발생합니다.</li>
                    </ol>
                </section>

                <section className="content-section">
                    <h2>제4조 (서비스의 제공)</h2>
                    <p>서비스는 다음과 같은 기능을 무료로 제공합니다:</p>
                    <ul>
                        <li>인포그래픽 생성 및 편집</li>
                        <li>다양한 디자인 템플릿 제공</li>
                        <li>이미지 파일 다운로드</li>
                        <li>링크를 통한 공유 기능</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>제5조 (이용자의 권리)</h2>
                    <ol>
                        <li>이용자는 서비스를 통해 생성한 콘텐츠에 대한 저작권을 보유합니다.</li>
                        <li>이용자는 생성한 콘텐츠를 상업적 목적으로 자유롭게 사용할 수 있습니다.</li>
                        <li>이용자는 언제든지 서비스 이용을 중단할 수 있습니다.</li>
                    </ol>
                </section>

                <section className="content-section">
                    <h2>제6조 (이용자의 의무)</h2>
                    <p>이용자는 다음 행위를 해서는 안 됩니다:</p>
                    <ul>
                        <li>서비스의 정상적인 운영을 방해하는 행위</li>
                        <li>타인의 명예를 훼손하거나 권리를 침해하는 콘텐츠 제작</li>
                        <li>법령에 위반되는 콘텐츠 제작</li>
                        <li>서비스를 이용한 상업적 광고 행위 (단, 생성된 콘텐츠의 활용은 허용)</li>
                        <li>시스템에 대한 무단 접근 또는 해킹 시도</li>
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
                        <li>기타 서비스 운영상 상당한 이유가 있는 경우</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>제8조 (면책조항)</h2>
                    <ol>
                        <li>서비스는 이용자가 생성한 콘텐츠의 내용에 대해 책임지지 않습니다.</li>
                        <li>서비스는 천재지변 또는 이에 준하는 불가항력으로 인해 서비스를 제공할 수 없는 경우 책임을 면합니다.</li>
                        <li>서비스는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임지지 않습니다.</li>
                    </ol>
                </section>

                <section className="content-section">
                    <h2>제9조 (분쟁 해결)</h2>
                    <p>
                        서비스 이용과 관련하여 분쟁이 발생한 경우,
                        양 당사자는 원만한 해결을 위해 성실히 협의합니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>제10조 (기타)</h2>
                    <p>
                        본 약관에서 정하지 않은 사항은 관련 법령 및
                        일반적인 상관례에 따릅니다.
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
                    <Link href="/terms" className="footer-link">이용약관</Link>
                    <Link href="/privacy" className="footer-link">개인정보처리방침</Link>
                    <Link href="/contact" className="footer-link">문의하기</Link>
                </div>
            </footer>
        </div>
    );
}
