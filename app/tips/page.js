'use client';

/*
 * 인포그래픽 제작 팁 & 블로그 페이지
 * - 풍부한 콘텐츠로 SEO 및 애드센스 승인에 도움
 */

import Link from 'next/link';
import '@/styles/components.css';

const tips = [
    {
        id: 1,
        icon: '🎯',
        title: '핵심 데이터만 선별하세요',
        content: `인포그래픽의 가장 큰 실수는 너무 많은 정보를 담으려는 것입니다. 

청중이 기억해야 할 핵심 데이터 3-4개만 선별하세요. 연구에 따르면, 사람들은 한 번에 3-5개의 정보만 효과적으로 처리할 수 있습니다.

**좋은 예시:**
- "매출 150% 성장"
- "고객 만족도 95%"
- "처리 시간 50% 단축"

**피해야 할 예시:**
- 10개 이상의 통계를 나열
- 복잡한 표나 차트를 그대로 사용`,
        category: '디자인 원칙'
    },
    {
        id: 2,
        icon: '🎨',
        title: '색상은 3가지 이하로 제한하세요',
        content: `전문적인 인포그래픽은 일관된 색상 팔레트를 사용합니다.

**60-30-10 법칙을 따르세요:**
- 60% - 주요 색상 (배경 또는 주요 요소)
- 30% - 보조 색상 (강조 요소)
- 10% - 액센트 색상 (중요한 포인트)

브랜드 색상이 있다면 이를 기반으로 팔레트를 구성하세요. InfoMaker는 조화로운 색상 조합을 자동으로 제공합니다.`,
        category: '색상 선택'
    },
    {
        id: 3,
        icon: '📊',
        title: '숫자는 크고 굵게 표시하세요',
        content: `인포그래픽에서 숫자는 가장 중요한 요소입니다. 숫자를 효과적으로 표시하는 방법:

**크기:** 숫자는 라벨보다 2-3배 크게
**굵기:** Bold 또는 Extra Bold 사용
**색상:** 배경과 대비되는 색상 선택
**단위:** 숫자 옆에 작게 표시

예를 들어, "1,234억원"보다 "1,234" + 작은 "억원"이 더 임팩트 있습니다.`,
        category: '타이포그래피'
    },
    {
        id: 4,
        icon: '📱',
        title: 'SNS용 최적 비율을 확인하세요',
        content: `각 플랫폼별로 최적의 이미지 비율이 다릅니다:

**Instagram 피드:** 1:1 (정사각형) 또는 4:5
**Instagram 스토리:** 9:16
**Facebook:** 1.91:1 (1200x630px)
**Twitter:** 16:9 (1200x675px)
**LinkedIn:** 1.91:1 (1200x627px)
**Pinterest:** 2:3 (1000x1500px)

InfoMaker로 생성한 인포그래픽을 각 플랫폼에 맞게 조정하면 참여율이 높아집니다.`,
        category: 'SNS 마케팅'
    },
    {
        id: 5,
        icon: '✨',
        title: '여백의 미를 활용하세요',
        content: `좋은 디자인은 "무엇을 추가할까"가 아니라 "무엇을 뺄까"입니다.

**화이트 스페이스(여백)의 장점:**
- 가독성 향상
- 전문적인 느낌
- 핵심 내용 강조
- 눈의 피로 감소

요소들 사이에 충분한 간격을 두고, 화면을 꽉 채우려는 유혹을 피하세요.`,
        category: '디자인 원칙'
    },
    {
        id: 6,
        icon: '📈',
        title: '비교 데이터로 임팩트를 높이세요',
        content: `단순한 숫자보다 비교가 더 설득력 있습니다.

**Before/After 비교:**
- "매출 10억원" → "전년 대비 50% 증가"
- "고객 1만명" → "경쟁사 대비 3배"

**시간 기준 비교:**
- "올해 vs 작년"
- "도입 전 vs 도입 후"

**업계 평균 비교:**
- "업계 평균 대비 2배 높은 만족도"`,
        category: '데이터 활용'
    },
    {
        id: 7,
        icon: '🔤',
        title: '적절한 폰트를 선택하세요',
        content: `인포그래픽에서 폰트 선택은 전체 분위기를 좌우합니다.

**추천 조합:**
- 제목: 굵은 산세리프 (예: Outfit, Montserrat)
- 본문: 가독성 좋은 산세리프 (예: Inter, Noto Sans)

**피해야 할 것:**
- 3개 이상의 폰트 사용
- 장식적인 폰트 과다 사용
- 너무 얇거나 가는 폰트

InfoMaker는 최적화된 폰트 조합을 자동으로 적용합니다.`,
        category: '타이포그래피'
    },
    {
        id: 8,
        icon: '🎪',
        title: '시선의 흐름을 고려하세요',
        content: `사람들은 보통 "Z" 또는 "F" 패턴으로 콘텐츠를 읽습니다.

**Z 패턴:** 상단 좌측 → 상단 우측 → 하단 좌측 → 하단 우측
**F 패턴:** 상단 가로 → 하단으로 내려가며 스캔

**적용 방법:**
- 가장 중요한 정보를 상단 좌측에 배치
- 두 번째 중요한 정보를 상단 우측
- CTA(행동 유도)는 하단 우측

이 패턴을 따르면 정보 전달력이 높아집니다.`,
        category: '레이아웃'
    }
];

const categories = ['전체', '디자인 원칙', '색상 선택', '타이포그래피', 'SNS 마케팅', '데이터 활용', '레이아웃'];

export default function TipsPage() {
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
                    <Link href="/examples" className="nav-link">예제</Link>
                    <Link href="/faq" className="nav-link">FAQ</Link>
                </nav>
            </header>

            {/* 메인 콘텐츠 */}
            <main className="legal-content blog-content">
                <h1>💡 인포그래픽 제작 팁</h1>
                <p className="page-description">
                    전문가처럼 인포그래픽을 만들기 위한 실용적인 팁과 노하우를 정리했습니다.
                    이 가이드를 참고하여 더욱 효과적인 시각 자료를 만들어보세요.
                </p>

                {/* 소개 섹션 */}
                <section className="content-section">
                    <h2>왜 인포그래픽이 중요한가요?</h2>
                    <p>
                        인포그래픽은 복잡한 정보를 시각적으로 전달하는 가장 효과적인 방법입니다.
                        연구에 따르면, 인간의 뇌는 텍스트보다 이미지를 60,000배 빠르게 처리하며,
                        시각 자료와 함께 제시된 정보는 기억 유지율이 65% 높습니다.
                    </p>
                    <p>
                        비즈니스 보고서, SNS 마케팅, 교육 자료, 블로그 콘텐츠 등 어떤 분야에서든
                        잘 만들어진 인포그래픽은 메시지의 전달력을 크게 높여줍니다.
                    </p>
                </section>

                {/* 팁 목록 */}
                <section className="content-section">
                    <h2>인포그래픽 제작 핵심 팁 8가지</h2>
                    <p>
                        아래 8가지 팁을 참고하면 디자인 전문가가 아니더라도
                        효과적인 인포그래픽을 만들 수 있습니다.
                    </p>
                </section>

                <div className="tips-grid">
                    {tips.map((tip) => (
                        <article key={tip.id} className="tip-card">
                            <div className="tip-header">
                                <span className="tip-icon">{tip.icon}</span>
                                <span className="tip-category">{tip.category}</span>
                            </div>
                            <h2 className="tip-title">{tip.title}</h2>
                            <div className="tip-content">
                                {tip.content.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx} style={{ whiteSpace: 'pre-line' }}>{paragraph}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                {/* 추가 콘텐츠 섹션 */}
                <section className="content-section">
                    <h2>📊 효과적인 데이터 시각화의 원칙</h2>
                    <p>
                        인포그래픽은 데이터를 시각화하는 도구입니다.
                        아래 원칙을 따르면 더 효과적인 데이터 시각화를 할 수 있습니다.
                    </p>
                    <ul>
                        <li><strong>단순함:</strong> 하나의 인포그래픽에는 하나의 주제만</li>
                        <li><strong>정확성:</strong> 데이터는 정확하고 최신 것으로</li>
                        <li><strong>맥락:</strong> 숫자만이 아닌 의미를 전달</li>
                        <li><strong>스토리:</strong> 데이터로 이야기를 구성</li>
                        <li><strong>일관성:</strong> 색상, 폰트, 스타일의 통일성 유지</li>
                    </ul>
                </section>

                {/* 추가 리소스 */}
                <section className="content-section resources-section">
                    <h2>📚 추가 학습 자료</h2>
                    <p>
                        인포그래픽 디자인에 대해 더 깊이 알고 싶다면 다음 자료를 참고하세요:
                    </p>
                    <ul className="resource-list">
                        <li>
                            <strong>데이터 시각화 기초:</strong> 에드워드 터프티의 "The Visual Display of Quantitative Information" - 데이터 시각화의 고전으로 불리는 책입니다.
                        </li>
                        <li>
                            <strong>색상 이론:</strong> Adobe Color Wheel을 활용한 조화로운 색상 조합 - 보색, 유사색, 삼원색 조합 등을 쉽게 찾을 수 있습니다.
                        </li>
                        <li>
                            <strong>타이포그래피:</strong> Google Fonts에서 무료 폰트 탐색하기 - 상업적 사용도 무료인 양질의 폰트를 찾을 수 있습니다.
                        </li>
                        <li>
                            <strong>레이아웃 원칙:</strong> 그리드 시스템과 정렬의 중요성 - 일관된 레이아웃이 전문적인 느낌을 줍니다.
                        </li>
                    </ul>
                </section>

                {/* 인포그래픽 활용 분야 */}
                <section className="content-section">
                    <h2>🎯 인포그래픽 활용 분야</h2>
                    <p>
                        인포그래픽은 다양한 분야에서 활용됩니다.
                        각 분야별로 어떻게 활용할 수 있는지 알아보세요.
                    </p>
                    <div className="usage-grid">
                        <div className="usage-item">
                            <h3>📈 비즈니스</h3>
                            <p>분기별 실적 보고, KPI 현황, 투자자 프레젠테이션에 활용. 복잡한 재무 데이터를 한눈에 이해할 수 있게 시각화합니다.</p>
                        </div>
                        <div className="usage-item">
                            <h3>📱 마케팅</h3>
                            <p>SNS 콘텐츠, 이메일 뉴스레터, 광고 배너에 활용. 시선을 사로잡는 시각 자료로 참여율을 높입니다.</p>
                        </div>
                        <div className="usage-item">
                            <h3>🎓 교육</h3>
                            <p>수업 자료, 학습 콘텐츠, 연구 발표에 활용. 복잡한 개념을 쉽게 이해할 수 있게 시각화합니다.</p>
                        </div>
                        <div className="usage-item">
                            <h3>📰 저널리즘</h3>
                            <p>데이터 저널리즘, 통계 보도, 특집 기사에 활용. 독자의 이해도와 관심을 높입니다.</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="cta-section">
                    <h3>지금 바로 실습해보세요!</h3>
                    <p>배운 팁을 활용하여 나만의 인포그래픽을 만들어보세요.</p>
                    <Link href="/" className="btn-primary">
                        인포그래픽 만들기 →
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
