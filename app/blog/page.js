/*
 * 블로그 인덱스 페이지
 * 인포그래픽 및 데이터 시각화 관련 심층 교육 콘텐츠
 */

import Link from 'next/link';
import '@/styles/components.css';

export const metadata = {
    title: '블로그 | InfoMaker - 데이터 시각화 & 인포그래픽 가이드',
    description: '데이터 시각화, 인포그래픽 디자인, 색상 심리학, SNS 마케팅 전략 등 실무에 바로 적용할 수 있는 심층 교육 콘텐츠를 제공합니다.',
    keywords: '데이터 시각화 블로그, 인포그래픽 가이드, 색상 심리학, SNS 마케팅, 비즈니스 보고서',
    openGraph: {
        title: '블로그 | InfoMaker',
        description: '데이터 시각화와 인포그래픽에 대한 심층 교육 콘텐츠',
        url: 'https://infographic-maker.vercel.app/blog',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'website',
    },
};

const articles = [
    {
        slug: 'data-visualization-basics',
        title: '데이터 시각화의 기초: 초보자를 위한 완벽 가이드',
        description: '데이터 시각화란 무엇이며, 왜 중요한지, 어떤 차트를 언제 사용해야 하는지 기초부터 체계적으로 알아봅니다.',
        category: '데이터 시각화',
        date: '2026-03-10',
        readTime: '8분',
        icon: '📊',
    },
    {
        slug: 'color-psychology-marketing',
        title: '마케팅에서 색상 심리학: 브랜드 색상이 구매 결정에 미치는 영향',
        description: '색상이 소비자 심리에 미치는 영향을 과학적 연구 근거와 함께 분석하고, 업종별 최적 색상 전략을 제시합니다.',
        category: '마케팅',
        date: '2026-03-08',
        readTime: '7분',
        icon: '🎨',
    },
    {
        slug: 'business-report-visualization',
        title: '비즈니스 보고서에서 데이터를 효과적으로 전달하는 7가지 전략',
        description: '경영진과 투자자를 설득하는 비즈니스 데이터 시각화 전략을 실전 예시와 함께 상세히 설명합니다.',
        category: '비즈니스',
        date: '2026-03-05',
        readTime: '9분',
        icon: '📈',
    },
    {
        slug: 'sns-infographic-strategy',
        title: 'SNS 마케팅에서 인포그래픽 활용 전략: 플랫폼별 최적화 가이드',
        description: 'Instagram, Facebook, LinkedIn, Twitter 각 플랫폼에 최적화된 인포그래픽 제작 전략과 참여율 향상 노하우를 공유합니다.',
        category: 'SNS 마케팅',
        date: '2026-03-01',
        readTime: '8분',
        icon: '📱',
    },
    {
        slug: 'presentation-data-design',
        title: '프레젠테이션 데이터 슬라이드 디자인: 청중을 사로잡는 비주얼 표현법',
        description: '지루한 데이터 슬라이드를 매력적인 비주얼로 변환하는 구체적인 디자인 테크닉과 원칙을 다룹니다.',
        category: '프레젠테이션',
        date: '2026-02-25',
        readTime: '7분',
        icon: '🎯',
    },
    {
        slug: 'infographic-typography-guide',
        title: '인포그래픽 타이포그래피 가이드: 가독성을 높이는 폰트 선택과 배치',
        description: '시각 자료에서 텍스트를 효과적으로 활용하기 위한 타이포그래피 원칙, 폰트 조합, 계층 구조 설계법을 안내합니다.',
        category: '디자인',
        date: '2026-02-20',
        readTime: '6분',
        icon: '🔤',
    },
];

export default function BlogPage() {
    return (
        <div className="container">
            <header className="header">
                <Link href="/" className="logo">
                    <span className="logo-icon">📊</span>
                    <span className="logo-text">InfoMaker</span>
                </Link>
                <nav className="header-nav">
                    <Link href="/about" className="nav-link">소개</Link>
                    <Link href="/guide" className="nav-link">가이드</Link>
                    <Link href="/tips" className="nav-link">팁</Link>
                    <Link href="/examples" className="nav-link">예제</Link>
                    <Link href="/faq" className="nav-link">FAQ</Link>
                </nav>
            </header>

            <main className="legal-content blog-content">
                <h1>📝 InfoMaker 블로그</h1>
                <p className="page-description">
                    데이터 시각화, 디자인, 마케팅에 대한 심층 가이드와 실무 노하우를 공유합니다.
                    인포그래픽 제작에 필요한 전문 지식을 쌓아보세요.
                </p>

                <section className="content-section">
                    <h2>데이터 시각화와 디자인의 세계</h2>
                    <p>
                        효과적인 데이터 시각화는 단순히 예쁜 그래프를 만드는 것이 아닙니다.
                        데이터에 담긴 이야기를 찾아내고, 그것을 청중이 직관적으로 이해할 수 있는
                        시각적 형태로 변환하는 전문적인 커뮤니케이션 기술입니다.
                    </p>
                    <p>
                        이 블로그에서는 데이터 시각화의 기초 이론부터 실무 활용법까지,
                        디자이너가 아닌 분들도 쉽게 이해하고 바로 적용할 수 있는
                        실용적인 지식을 체계적으로 정리해 드립니다.
                    </p>
                </section>

                <div className="blog-grid">
                    {articles.map((article) => (
                        <article key={article.slug} className="blog-card">
                            <div className="blog-card-header">
                                <span className="blog-card-icon">{article.icon}</span>
                                <div className="blog-card-meta">
                                    <span className="blog-card-category">{article.category}</span>
                                    <span className="blog-card-date">{article.date}</span>
                                </div>
                            </div>
                            <h2 className="blog-card-title">
                                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                            </h2>
                            <p className="blog-card-description">{article.description}</p>
                            <div className="blog-card-footer">
                                <span className="blog-card-readtime">⏱ {article.readTime} 읽기</span>
                                <Link href={`/blog/${article.slug}`} className="blog-card-link">
                                    자세히 읽기 →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <section className="content-section">
                    <h2>왜 데이터 시각화를 배워야 할까요?</h2>
                    <p>
                        오늘날 비즈니스 환경에서 데이터 리터러시는 선택이 아닌 필수 역량입니다.
                        매킨지 글로벌 연구소에 따르면, 데이터 기반 의사결정을 하는 기업은
                        그렇지 않은 기업보다 영업이익이 평균 6% 높습니다.
                    </p>
                    <p>
                        하지만 데이터를 단순히 수집하는 것만으로는 충분하지 않습니다.
                        핵심 인사이트를 추출하고, 이해관계자들에게 효과적으로 전달하는 능력이 필요합니다.
                        바로 이것이 데이터 시각화의 가치입니다.
                    </p>
                    <ul>
                        <li><strong>의사결정 속도 향상:</strong> 시각화된 데이터는 텍스트보다 60,000배 빠르게 처리됩니다</li>
                        <li><strong>설득력 강화:</strong> 시각 자료가 포함된 프레젠테이션은 설득력이 43% 높아집니다</li>
                        <li><strong>기억 유지율 향상:</strong> 시각 정보는 3일 후에도 65%가 기억되지만, 텍스트는 10%만 기억됩니다</li>
                        <li><strong>커뮤니케이션 효율:</strong> 복잡한 데이터를 한 장의 인포그래픽으로 요약할 수 있습니다</li>
                    </ul>
                </section>

                <div className="cta-section">
                    <h3>배운 내용을 바로 실습해보세요</h3>
                    <p>블로그에서 익힌 시각화 원칙을 InfoMaker로 직접 적용해보세요.</p>
                    <Link href="/" className="btn-primary">
                        인포그래픽 만들기 →
                    </Link>
                </div>
            </main>

            <footer className="footer">
                <p className="footer-text">© 2026 InfoMaker. 무료 인포그래픽 생성 도구</p>
                <div className="footer-links">
                    <Link href="/about" className="footer-link">서비스 소개</Link>
                    <Link href="/guide" className="footer-link">사용 가이드</Link>
                    <Link href="/tips" className="footer-link">제작 팁</Link>
                    <Link href="/examples" className="footer-link">예제</Link>
                    <Link href="/blog" className="footer-link">블로그</Link>
                    <Link href="/faq" className="footer-link">FAQ</Link>
                    <Link href="/terms" className="footer-link">이용약관</Link>
                    <Link href="/privacy" className="footer-link">개인정보처리방침</Link>
                    <Link href="/contact" className="footer-link">문의하기</Link>
                </div>
            </footer>
        </div>
    );
}
