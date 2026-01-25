'use client';

/*
 * 💻 프론트엔드 개발자 에이전트 - Header 컴포넌트
 */

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <div className="logo-icon">📊</div>
                <span>InfoMaker</span>
            </div>
            <div className="header-badge">무료 • Free</div>
        </header>
    );
}
