'use client';

/*
 * 인포그래픽 예제 갤러리 페이지
 * - 다양한 활용 사례 제공
 * - 풍부한 콘텐츠로 SEO 및 애드센스 승인에 도움
 */

import { useState } from 'react';
import Link from 'next/link';
import '@/styles/components.css';

const examples = [
    {
        id: 1,
        title: '2024년 매출 성과',
        category: '비즈니스',
        description: '분기별 매출 성과를 한눈에 보여주는 비즈니스 인포그래픽 예시입니다. 핵심 KPI를 강조하고 전년 대비 성장률을 효과적으로 전달합니다. 투자자 보고서나 경영진 프레젠테이션에 적합합니다.',
        data: [
            { label: '연간 매출', value: '150', unit: '억원' },
            { label: '성장률', value: '+45', unit: '%' },
            { label: '신규 고객', value: '2,340', unit: '명' },
            { label: '재구매율', value: '78', unit: '%' }
        ],
        style: 'gradient',
        color: 'purple',
        useCase: '투자자 프레젠테이션, 사내 보고서, 연말 성과 발표'
    },
    {
        id: 2,
        title: '마케팅 캠페인 결과',
        category: '마케팅',
        description: '디지털 마케팅 캠페인의 성과를 시각화한 예시입니다. CTR, 전환율, ROI 등 핵심 마케팅 지표를 명확하게 보여주어 캠페인의 효과를 한눈에 파악할 수 있습니다.',
        data: [
            { label: '노출 수', value: '500', unit: '만' },
            { label: 'CTR', value: '3.5', unit: '%' },
            { label: '전환율', value: '2.1', unit: '%' },
            { label: 'ROI', value: '320', unit: '%' }
        ],
        style: 'gradient',
        color: 'orange',
        useCase: '마케팅 리포트, 클라이언트 보고, 팀 미팅'
    },
    {
        id: 3,
        title: '고객 만족도 조사',
        category: '리서치',
        description: '고객 만족도 설문조사 결과를 인포그래픽으로 정리한 예시입니다. NPS 점수와 재이용 의향 등 고객 경험 지표를 효과적으로 전달합니다.',
        data: [
            { label: '전체 만족도', value: '4.5', unit: '/5' },
            { label: 'NPS 점수', value: '+67', unit: '' },
            { label: '재이용 의향', value: '92', unit: '%' },
            { label: '추천 의향', value: '88', unit: '%' }
        ],
        style: 'minimal',
        color: 'teal',
        useCase: '고객 리서치 보고서, 품질 개선 회의, 경영진 보고'
    },
    {
        id: 4,
        title: '환경 캠페인 성과',
        category: '비영리',
        description: 'ESG 활동이나 환경 캠페인의 성과를 보여주는 인포그래픽입니다. 탄소 절감량, 나무 심기 실적 등 임팩트 지표를 효과적으로 전달합니다.',
        data: [
            { label: '탄소 절감', value: '1,200', unit: '톤' },
            { label: '나무 심기', value: '5,000', unit: '그루' },
            { label: '참여자', value: '15,000', unit: '명' },
            { label: '파트너사', value: '50', unit: '개' }
        ],
        style: 'glassmorphism',
        color: 'teal',
        useCase: 'ESG 보고서, 소셜 미디어 공유, 파트너십 제안'
    },
    {
        id: 5,
        title: '온라인 강의 성과',
        category: '교육',
        description: '온라인 교육 플랫폼이나 강의의 성과를 보여주는 예시입니다. 수강생 수, 완료율, 만족도 등 교육 효과를 시각화합니다.',
        data: [
            { label: '총 수강생', value: '25,000', unit: '명' },
            { label: '완료율', value: '78', unit: '%' },
            { label: '평균 평점', value: '4.8', unit: '/5' },
            { label: '강의 수', value: '120', unit: '개' }
        ],
        style: 'gradient',
        color: 'blue',
        useCase: '교육 기관 홍보, 강사 포트폴리오, 학습 리포트'
    },
    {
        id: 6,
        title: 'SNS 팔로워 분석',
        category: 'SNS',
        description: '소셜 미디어 채널별 팔로워 현황과 성장률을 보여주는 인포그래픽입니다. 인플루언서나 브랜드 계정 분석에 활용됩니다.',
        data: [
            { label: 'Instagram', value: '50K', unit: '' },
            { label: 'YouTube', value: '100K', unit: '' },
            { label: 'TikTok', value: '200K', unit: '' },
            { label: '월간 성장', value: '+15', unit: '%' }
        ],
        style: 'glassmorphism',
        color: 'pink',
        useCase: '인플루언서 미디어킷, 브랜드 협업 제안, SNS 리포트'
    }
];

const categories = ['전체', '비즈니스', '마케팅', '리서치', '교육', 'SNS', '비영리'];

export default function ExamplesPage() {
    const [selectedCategory, setSelectedCategory] = useState('전체');

    const filteredExamples = selectedCategory === '전체'
        ? examples
        : examples.filter(ex => ex.category === selectedCategory);

    // 예시 데이터로 URL 생성
    const generateShareUrl = (example) => {
        const params = new URLSearchParams();
        params.set('title', example.title);
        params.set('data', JSON.stringify(example.data));
        params.set('style', example.style);
        params.set('color', example.color);
        return `/?${params.toString()}`;
    };

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
                    <Link href="/tips" className="nav-link">팁</Link>
                    <Link href="/faq" className="nav-link">FAQ</Link>
                </nav>
            </header>

            {/* 메인 콘텐츠 */}
            <main className="legal-content examples-content">
                <h1>🎨 인포그래픽 예제 갤러리</h1>
                <p className="page-description">
                    다양한 분야에서 활용할 수 있는 인포그래픽 예제를 확인하세요.
                    각 예제를 클릭하면 동일한 스타일로 바로 만들어볼 수 있습니다.
                </p>

                {/* 예제 소개 섹션 */}
                <section className="content-section">
                    <h2>인포그래픽 활용 예시</h2>
                    <p>
                        InfoMaker로 만들 수 있는 다양한 인포그래픽 예시를 살펴보세요.
                        비즈니스 보고서부터 SNS 콘텐츠까지, 각 분야에 최적화된 디자인을 제공합니다.
                        아래 예제들을 참고하여 나만의 인포그래픽을 만들어보세요.
                    </p>
                </section>

                {/* 카테고리 필터 */}
                <div className="category-filter">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* 예제 그리드 */}
                <div className="examples-grid">
                    {filteredExamples.map((example) => (
                        <article key={example.id} className="example-card">
                            <div className="example-header">
                                <span className="example-category">{example.category}</span>
                            </div>

                            {/* 미리보기 영역 */}
                            <div className={`example-preview preview-${example.style} color-${example.color}`}>
                                <h3 className="example-preview-title">{example.title}</h3>
                                <div className="example-preview-data">
                                    {example.data.slice(0, 2).map((item, idx) => (
                                        <div key={idx} className="preview-item">
                                            <span className="preview-value">{item.value}</span>
                                            <span className="preview-unit">{item.unit}</span>
                                            <span className="preview-label">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="example-body">
                                <h2 className="example-title">{example.title}</h2>
                                <p className="example-description">{example.description}</p>

                                <div className="example-data-list">
                                    <h4>포함된 데이터:</h4>
                                    <ul>
                                        {example.data.map((item, idx) => (
                                            <li key={idx}>
                                                <strong>{item.label}:</strong> {item.value}{item.unit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="example-usecase">
                                    <h4>활용 사례:</h4>
                                    <p>{example.useCase}</p>
                                </div>

                                <Link href={generateShareUrl(example)} className="btn-secondary">
                                    이 스타일로 만들기 →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* 활용 가이드 */}
                <section className="content-section usage-guide">
                    <h2>📌 인포그래픽 활용 가이드</h2>
                    <p>
                        인포그래픽은 다양한 목적과 채널에서 활용될 수 있습니다.
                        아래 가이드를 참고하여 목적에 맞는 인포그래픽을 만들어보세요.
                    </p>

                    <div className="guide-grid">
                        <div className="guide-item">
                            <h3>📊 비즈니스 보고서</h3>
                            <p>
                                분기별 실적, 연간 성과, KPI 달성률 등을 시각화하여
                                보고서의 가독성을 높이고 핵심 내용을 효과적으로 전달하세요.
                                숫자로 가득 찬 보고서보다 인포그래픽 한 장이 더 설득력 있습니다.
                            </p>
                        </div>
                        <div className="guide-item">
                            <h3>📱 SNS 마케팅</h3>
                            <p>
                                Instagram, Facebook, LinkedIn 등 소셜 미디어에
                                데이터 기반 콘텐츠를 공유하여 참여율을 높이세요.
                                시각 자료는 텍스트보다 공유율이 40배 높다는 연구 결과도 있습니다.
                            </p>
                        </div>
                        <div className="guide-item">
                            <h3>🎓 교육 자료</h3>
                            <p>
                                복잡한 통계나 연구 결과를 학생들이 이해하기 쉬운
                                시각 자료로 변환하세요. 시각화된 정보는 기억 유지율이
                                65% 더 높습니다.
                            </p>
                        </div>
                        <div className="guide-item">
                            <h3>📧 뉴스레터</h3>
                            <p>
                                이메일 뉴스레터에 인포그래픽을 삽입하여
                                오픈율과 클릭율을 높이세요. 시각적으로 매력적인 이메일은
                                독자의 관심을 더 오래 유지합니다.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 제작 팁 섹션 */}
                <section className="content-section">
                    <h2>💡 인포그래픽 제작 팁</h2>
                    <p>
                        효과적인 인포그래픽을 만들기 위한 핵심 팁을 알아보세요.
                    </p>
                    <ul>
                        <li><strong>핵심 데이터만:</strong> 3-4개의 가장 중요한 데이터만 표시하세요.</li>
                        <li><strong>명확한 제목:</strong> 인포그래픽이 전달하고자 하는 메시지를 명확히 하세요.</li>
                        <li><strong>일관된 색상:</strong> 2-3가지 색상으로 통일감을 주세요.</li>
                        <li><strong>큰 숫자:</strong> 핵심 수치는 크고 굵게 표시하세요.</li>
                        <li><strong>충분한 여백:</strong> 요소들 사이에 여백을 두어 가독성을 높이세요.</li>
                    </ul>
                    <p>
                        더 자세한 팁은 <Link href="/tips">인포그래픽 제작 팁</Link> 페이지에서 확인하세요.
                    </p>
                </section>

                {/* CTA */}
                <div className="cta-section">
                    <h3>나만의 인포그래픽을 만들어보세요!</h3>
                    <p>위 예제를 참고하여 나만의 데이터로 인포그래픽을 만들어보세요.</p>
                    <Link href="/" className="btn-primary">
                        지금 시작하기 →
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
