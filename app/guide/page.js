'use client';

/*
 * 사용 가이드 페이지
 */

import Link from 'next/link';
import '@/styles/components.css';

export default function GuidePage() {
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
            <main className="legal-content guide-content">
                <h1>📖 사용 가이드</h1>
                <p className="page-description">
                    InfoMaker를 처음 사용하시는 분들을 위한 상세한 사용 가이드입니다.
                </p>

                <section className="content-section">
                    <h2>🚀 시작하기</h2>
                    <p>
                        InfoMaker는 별도의 회원가입 없이 바로 사용할 수 있습니다.
                        웹사이트에 접속하면 바로 인포그래픽 제작을 시작할 수 있습니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>📝 Step 1: 제목 입력</h2>
                    <p>
                        상단의 <strong>"제목"</strong> 입력란에 인포그래픽의 제목을 입력합니다.
                    </p>
                    <div className="tip-box">
                        💡 <strong>팁:</strong> 제목은 간결하고 명확하게 작성하세요.
                        예: "2024년 매출 현황", "팀 성과 분석"
                    </div>
                </section>

                <section className="content-section">
                    <h2>📊 Step 2: 데이터 입력</h2>
                    <p>"데이터 항목" 섹션에서 표시할 정보를 입력합니다:</p>
                    <ul>
                        <li><strong>라벨:</strong> 데이터의 이름 (예: "총매출", "신규고객")</li>
                        <li><strong>수치:</strong> 표시할 숫자 값 (예: "1,234", "56%")</li>
                        <li><strong>단위:</strong> 숫자의 단위 (예: "억원", "명", "%")</li>
                    </ul>
                    <p>최대 6개의 데이터 항목을 추가할 수 있습니다.</p>
                    <div className="tip-box">
                        💡 <strong>팁:</strong> 3-4개의 핵심 데이터만 표시하면 더 깔끔한 인포그래픽이 됩니다.
                    </div>
                </section>

                <section className="content-section">
                    <h2>🏷️ Step 3: 카테고리 선택</h2>
                    <p>
                        용도에 맞는 카테고리를 선택하세요. 카테고리에 따라 최적화된 색상이 자동으로 적용됩니다:
                    </p>
                    <ul>
                        <li><strong>📊 비즈니스:</strong> 회의, 보고서, 발표자료</li>
                        <li><strong>📈 마케팅:</strong> 캠페인, 실적 분석</li>
                        <li><strong>📚 교육:</strong> 학습자료, 강의</li>
                        <li><strong>📱 SNS:</strong> 인스타그램, 페이스북 등</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>🎨 Step 4: 스타일 & 색상 선택</h2>
                    <h3>스타일 선택</h3>
                    <ul>
                        <li><strong>◻️ Minimal:</strong> 깔끔하고 미니멀한 디자인</li>
                        <li><strong>🌈 Gradient:</strong> 그라데이션이 적용된 모던 디자인</li>
                        <li><strong>✨ Glassmorphism:</strong> 유리 효과가 적용된 트렌디한 디자인</li>
                    </ul>

                    <h3>색상 테마</h3>
                    <p>6가지 색상 테마 중 원하는 것을 선택하세요. 실시간으로 미리보기가 업데이트됩니다.</p>
                </section>

                <section className="content-section">
                    <h2>👁️ Step 5: 실시간 미리보기</h2>
                    <p>
                        오른쪽 미리보기 패널에서 실시간으로 결과를 확인할 수 있습니다.
                        데이터를 수정하면 즉시 미리보기가 업데이트됩니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>📥 Step 6: 다운로드 & 공유</h2>
                    <h3>다운로드</h3>
                    <ul>
                        <li><strong>PNG:</strong> 투명 배경, 웹/SNS용 (권차)</li>
                        <li><strong>JPG:</strong> 흰색 배경, 문서/인쇄용</li>
                    </ul>

                    <h3>공유</h3>
                    <p>
                        "복사" 버튼을 클릭하면 공유 가능한 링크가 클립보드에 복사됩니다.
                        이 링크를 통해 다른 사람과 인포그래픽을 공유할 수 있습니다.
                    </p>
                </section>

                <section className="content-section">
                    <h2>💡 활용 팁</h2>
                    <ul className="feature-list">
                        <li>
                            <strong>프레젠테이션</strong>
                            <p>PPT 슬라이드에 삽입하여 시각적 효과를 높이세요.</p>
                        </li>
                        <li>
                            <strong>SNS 마케팅</strong>
                            <p>정사각형 비율로 다운로드하여 인스타그램에 바로 업로드하세요.</p>
                        </li>
                        <li>
                            <strong>보고서 작성</strong>
                            <p>주요 KPI를 인포그래픽으로 정리해 보고서에 첨부하세요.</p>
                        </li>
                        <li>
                            <strong>블로그/뉴스레터</strong>
                            <p>데이터 기반 콘텐츠에 시각 자료로 활용하세요.</p>
                        </li>
                    </ul>
                </section>

                <div className="cta-section">
                    <Link href="/" className="btn-primary">
                        지금 바로 만들기 →
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
