'use client';

/*
 * 💻 프론트엔드 개발자 에이전트 - Footer 컴포넌트
 */

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer-text">
                © 2026 InfoMaker. 무료 인포그래픽 생성 도구
            </p>
            <div className="footer-links">
                <Link href="/about" className="footer-link">서비스 소개</Link>
                <Link href="/guide" className="footer-link">사용 가이드</Link>
                <Link href="/faq" className="footer-link">FAQ</Link>
                <Link href="/terms" className="footer-link">이용약관</Link>
                <Link href="/privacy" className="footer-link">개인정보처리방침</Link>
                <Link href="/contact" className="footer-link">문의하기</Link>
            </div>
        </footer>
    );
}
