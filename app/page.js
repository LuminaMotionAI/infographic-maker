'use client';

/*
 * 🎯 PM 에이전트 - 메인 페이지 통합
 * 
 * [🎯 PM 에이전트]
 * - 현재 작업: 모든 컴포넌트 통합 및 상태 관리
 * - 완료 내용: 전체 페이지 조립
 * - 예상 이슈: 없음
 * 
 * === 에이전트 간 대화 시뮬레이션 ===
 * 
 * 🎨 디자이너: "레이아웃을 2컬럼으로 가져갈게요. 왼쪽 입력, 오른쪽 프리뷰"
 * 💻 개발자: "CSS Grid로 구현하겠습니다. 768px 이하에서는 1컬럼으로 전환할게요"
 * 🧠 AI 엔지니어: "상태 변경 시 프리뷰가 실시간으로 업데이트되도록 했어요"
 * 📈 SEO: "메타태그 다 적용했고, 하단에 애드센스 배너 영역 넣었습니다"
 * 🔧 DevOps: "빌드 최적화 준비됐습니다"
 * 🎯 PM: "훌륭합니다! 통합 테스트 진행하겠습니다"
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import '@/styles/components.css';

import Header from '@/components/Header';
import InputForm from '@/components/InputForm';
import StyleSelector from '@/components/StyleSelector';
import InfographicPreview from '@/components/InfographicPreview';
import DownloadPanel from '@/components/DownloadPanel';
import Footer from '@/components/Footer';
import { parseShareUrl } from '@/lib/infographicEngine';
import { getRecommendedColor, getRecommendedTemplate } from '@/lib/colorSchemes';

export default function Home() {
    // 상태 관리
    const [title, setTitle] = useState('');
    const [items, setItems] = useState([
        { id: 1, label: '', value: '', unit: '' },
        { id: 2, label: '', value: '', unit: '' },
        { id: 3, label: '', value: '', unit: '' },
    ]);
    const [category, setCategory] = useState('business');
    const [selectedStyle, setSelectedStyle] = useState('gradient');
    const [selectedColor, setSelectedColor] = useState('purple');
    const [isLoaded, setIsLoaded] = useState(false);

    // URL에서 공유된 데이터 로드
    useEffect(() => {
        const sharedData = parseShareUrl();
        if (sharedData) {
            setTitle(sharedData.title);
            setItems(sharedData.items);
            setSelectedStyle(sharedData.template);
            setSelectedColor(sharedData.color);
        }
        setIsLoaded(true);
    }, []);

    // 카테고리 변경 시 추천 색상/스타일 적용
    useEffect(() => {
        const recommendedColor = getRecommendedColor(category);
        setSelectedColor(recommendedColor);
    }, [category]);

    // 로딩 중에도 SEO를 위한 기본 콘텐츠 구조는 유지
    // Google 봇이 콘텐츠를 인식할 수 있도록 함

    return (
        <div className="container">
            <Header />

            {/* 히어로 섹션 */}
            <section className="hero">
                <h1>무료 인포그래픽 메이커</h1>
                <p className="hero-subtitle">
                    숫자와 텍스트만 입력하면 예쁜 인포그래픽이 자동으로 생성됩니다
                </p>

                {/* 빠른 링크 */}
                <div className="quick-links">
                    <Link href="/guide" className="quick-link">
                        <span>📖</span> 사용 가이드
                    </Link>
                    <Link href="/blog" className="quick-link">
                        <span>📝</span> 블로그
                    </Link>
                    <Link href="/examples" className="quick-link">
                        <span>🎨</span> 예제 보기
                    </Link>
                </div>
            </section>

            {/* 메인 콘텐츠 */}
            <main className="main-content">
                {/* 왼쪽: 입력 폼 */}
                <aside className="card-glass animate-fadeIn">
                    <InputForm
                        title={title}
                        setTitle={setTitle}
                        items={items}
                        setItems={setItems}
                        category={category}
                        setCategory={setCategory}
                    />

                    <div style={{ marginTop: 'var(--space-xl)' }}>
                        <StyleSelector
                            selectedStyle={selectedStyle}
                            setSelectedStyle={setSelectedStyle}
                            selectedColor={selectedColor}
                            setSelectedColor={setSelectedColor}
                        />
                    </div>
                </aside>

                {/* 오른쪽: 프리뷰 */}
                <section className="preview-section animate-slideUp">
                    <div className="preview-header">
                        <h3 className="preview-title">
                            <span className="preview-title-icon">👁️</span>
                            실시간 미리보기
                        </h3>
                    </div>

                    <InfographicPreview
                        title={title}
                        items={items}
                        selectedStyle={selectedStyle}
                        selectedColor={selectedColor}
                    />

                    <DownloadPanel
                        title={title}
                        items={items}
                    />
                </section>
            </main>

            {/* 특징 섹션 */}
            <section className="features-section">
                <h2 className="features-title">✨ InfoMaker의 특별한 기능</h2>
                <p className="features-subtitle">
                    디자인 전문가가 아니어도 누구나 쉽게 전문적인 인포그래픽을 만들 수 있습니다
                </p>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🎨</div>
                        <h3>다양한 스타일</h3>
                        <p>Minimal, Gradient, Glassmorphism 등 트렌디한 디자인 스타일과 6가지 색상 테마를 제공합니다.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>실시간 미리보기</h3>
                        <p>데이터를 입력하면 즉시 결과를 확인할 수 있어 원하는 디자인을 빠르게 완성할 수 있습니다.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📥</div>
                        <h3>고품질 다운로드</h3>
                        <p>PNG, JPG 형식으로 고해상도 이미지를 다운로드할 수 있어 어디서든 활용 가능합니다.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔗</div>
                        <h3>간편한 공유</h3>
                        <p>생성한 인포그래픽을 링크로 쉽게 공유하고 다른 사람들과 협업할 수 있습니다.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💰</div>
                        <h3>완전 무료</h3>
                        <p>회원가입 없이 무료로 사용 가능하며, 상업적 용도로도 자유롭게 활용하실 수 있습니다.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📱</div>
                        <h3>반응형 디자인</h3>
                        <p>데스크톱, 태블릿, 모바일 어디서든 편리하게 인포그래픽을 제작할 수 있습니다.</p>
                    </div>
                </div>
            </section>

            {/* 활용 사례 섹션 */}
            <section className="usecases-section">
                <h2 className="features-title">📌 이런 곳에서 활용하세요</h2>
                <p className="features-subtitle">
                    다양한 분야에서 InfoMaker로 만든 인포그래픽을 활용할 수 있습니다
                </p>
                <div className="usecases-grid">
                    <div className="usecase-item">
                        <div className="usecase-icon">📊</div>
                        <h4>비즈니스 보고서</h4>
                        <p>분기별 실적, KPI 현황을 시각화</p>
                    </div>
                    <div className="usecase-item">
                        <div className="usecase-icon">📱</div>
                        <h4>SNS 마케팅</h4>
                        <p>Instagram, Facebook 콘텐츠 제작</p>
                    </div>
                    <div className="usecase-item">
                        <div className="usecase-icon">🎓</div>
                        <h4>교육 자료</h4>
                        <p>수업 자료, 학습 콘텐츠 제작</p>
                    </div>
                    <div className="usecase-item">
                        <div className="usecase-icon">📧</div>
                        <h4>뉴스레터</h4>
                        <p>이메일 마케팅 시각 자료 제작</p>
                    </div>
                    <div className="usecase-item">
                        <div className="usecase-icon">📈</div>
                        <h4>투자 프레젠테이션</h4>
                        <p>투자자 대상 핵심 지표 시각화</p>
                    </div>
                    <div className="usecase-item">
                        <div className="usecase-icon">🏢</div>
                        <h4>사내 커뮤니케이션</h4>
                        <p>팀 성과, 프로젝트 현황 공유</p>
                    </div>
                </div>
            </section>

            {/* 심층 교육 및 방법론 섹션 (Educational Knowledge Base) */}
            <section className="features-section" style={{ marginTop: 'var(--space-3xl)' }}>
                <h2 className="features-title">📘 성공적인 인포그래픽 제작을 위한 5단계 가이드</h2>
                <p className="features-subtitle">
                    숫자 나열을 넘어 청중의 마음을 움직이는 시각화 방법론
                </p>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">1️⃣</div>
                        <h3>목표와 청중 정의</h3>
                        <p>이 인포그래픽을 보는 사람이 누구이며, 확인 후 어떤 행동을 취해야 하는지 명확한 1가지 목표를 설정합니다.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">2️⃣</div>
                        <h3>핵심 데이터 선별</h3>
                        <p>수집한 수치 중 가장 중요한 3~5개의 핵심 지표만 남기고, 부수적인 세부 수치는 과감히 정리합니다.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">3️⃣</div>
                        <h3>시각적 위계 설계</h3>
                        <p>헤드라인, 핵심 수치, 보조 설명 간의 폰트 크기와 굵기를 조절하여 3초 안에 핵심이 보이도록 배치합니다.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">4️⃣</div>
                        <h3>배색과 명도 대비</h3>
                        <p>브랜드 정체성에 맞는 주조색과 강조색(60-30-10 원칙)을 적용하고, 배경 대비 4.5:1 이상의 가독성을 유지합니다.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">5️⃣</div>
                        <h3>피드백 및 배포</h3>
                        <p>모바일 화면에서도 텍스트가 명확하게 읽히는지 최종 점검한 후 고해상도 이미지(PNG/JPG)로 공유합니다.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💡</div>
                        <h3>데이터 무결성 확인</h3>
                        <p>통계 수치의 출처와 기준 시점을 기재하고 결측치나 과장된 척도가 없는지 윤리적으로 검증합니다.</p>
                    </div>
                </div>
            </section>

            {/* 메인 FAQ 아코디언/섹션 */}
            <section className="features-section" style={{ marginTop: 'var(--space-2xl)' }}>
                <h2 className="features-title">❓ 자주 묻는 질문 (FAQ)</h2>
                <p className="features-subtitle">
                    인포그래픽 제작 및 도구 활용에 대해 가장 궁금해하시는 점들입니다
                </p>
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className="feature-card" style={{ textAlign: 'left' }}>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>Q. 제작한 인포그래픽을 상업적 용도로 무료 사용할 수 있나요?</h4>
                        <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            네, InfoMaker에서 생성된 모든 이미지는 개인, 교육, 기업 비즈니스, 광고 마케팅 등 어떤 상업적 용도로도 저작권 제한 없이 100% 무료로 자유롭게 사용하실 수 있습니다.
                        </p>
                    </div>
                    <div className="feature-card" style={{ textAlign: 'left' }}>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>Q. 입력한 데이터가 외부 서버에 저장되거나 유출되지 않나요?</h4>
                        <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            모든 데이터 처리 및 그래픽 렌더링은 사용자의 브라우저 메모리 안에서만 100% 클라이언트 사이드로 실행됩니다. 귀사의 민감한 매출 데이터나 KPI 수치는 외부 서버로 전송되거나 기록되지 않으므로 안심하고 사용하세요.
                        </p>
                    </div>
                    <div className="feature-card" style={{ textAlign: 'left' }}>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>Q. 고해상도 인쇄물이나 대형 화면에서도 화질이 깨지지 않나요?</h4>
                        <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            다운로드 시 고해상도 스케일링 렌더러를 적용하여 스마트폰은 물론 고해상도 레티나 모니터 및 A4 규격 출력물에서도 선명하고 왜곡 없는 그래픽 품질을 보장합니다.
                        </p>
                    </div>
                    <div className="feature-card" style={{ textAlign: 'left' }}>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>Q. 어떤 스타일 템플릿을 선택하는 것이 가장 효과적인가요?</h4>
                        <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            격식 있는 경영진 보고서나 IR 자료에는 <strong>Minimal</strong> 또는 <strong>Modern</strong> 스타일을, 인스타그램 피드나 SNS 마케팅에는 시선을 사로잡는 <strong>Gradient</strong> 스타일을, 최신 IT/테크 제품 소개에는 감각적인 <strong>Glassmorphism</strong> 스타일을 권장합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* 최신 블로그 글 섹션 */}
            <section className="features-section" style={{ marginTop: 'var(--space-2xl)' }}>
                <h2 className="features-title">📚 데이터 시각화 & 인포그래픽 전문 지식</h2>
                <p className="features-subtitle">
                    전문가가 정리한 실무 시각화 가이드와 디자인 노하우를 확인하세요
                </p>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📈</div>
                        <h3><Link href="/blog/chart-selection-guide" style={{color: 'inherit', textDecoration: 'none'}}>차트 선택 가이드</Link></h3>
                        <p>비교, 추세, 구성비 등 목적에 따른 최적의 차트 유형 분류법과 왜곡 방지 원칙.</p>
                        <Link href="/blog/chart-selection-guide" style={{marginTop: '10px', display: 'inline-block', color: 'var(--primary)', fontWeight: 'bold'}}>가이드 읽기 →</Link>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">♿</div>
                        <h3><Link href="/blog/accessibility-in-data-visualization" style={{color: 'inherit', textDecoration: 'none'}}>시각화 웹 접근성</Link></h3>
                        <p>색약자, 저시력자도 쉽게 읽을 수 있는 WCAG 명도 대비율과 보색 팔레트 설계법.</p>
                        <Link href="/blog/accessibility-in-data-visualization" style={{marginTop: '10px', display: 'inline-block', color: 'var(--primary)', fontWeight: 'bold'}}>가이드 읽기 →</Link>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📖</div>
                        <h3><Link href="/blog/storytelling-with-data-framework" style={{color: 'inherit', textDecoration: 'none'}}>데이터 스토리텔링</Link></h3>
                        <p>단순한 숫자를 청중의 의사결정을 이끌어내는 4단계 비즈니스 스토리로 전환하는 법.</p>
                        <Link href="/blog/storytelling-with-data-framework" style={{marginTop: '10px', display: 'inline-block', color: 'var(--primary)', fontWeight: 'bold'}}>가이드 읽기 →</Link>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚠️</div>
                        <h3><Link href="/blog/infographic-mistakes-to-avoid" style={{color: 'inherit', textDecoration: 'none'}}>피해야 할 7가지 실수</Link></h3>
                        <p>정보 과적, 폰트 혼용, 잘려나간 Y축 기준선 등 흔한 오류와 실전 교정 팁.</p>
                        <Link href="/blog/infographic-mistakes-to-avoid" style={{marginTop: '10px', display: 'inline-block', color: 'var(--primary)', fontWeight: 'bold'}}>가이드 읽기 →</Link>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💰</div>
                        <h3><Link href="/blog/how-to-present-financial-metrics" style={{color: 'inherit', textDecoration: 'none'}}>KPI & 재무 지표 시각화</Link></h3>
                        <p>MRR, CAC, LTV 등 복잡한 경영 지표를 투자자에게 강력하게 전달하는 카드 기법.</p>
                        <Link href="/blog/how-to-present-financial-metrics" style={{marginTop: '10px', display: 'inline-block', color: 'var(--primary)', fontWeight: 'bold'}}>가이드 읽기 →</Link>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🧹</div>
                        <h3><Link href="/blog/data-cleaning-before-visualization" style={{color: 'inherit', textDecoration: 'none'}}>데이터 정제 5단계</Link></h3>
                        <p>시각화 전 결측치, 이상치, 중복값을 필터링하여 통계적 신뢰성을 확보하는 체크리스트.</p>
                        <Link href="/blog/data-cleaning-before-visualization" style={{marginTop: '10px', display: 'inline-block', color: 'var(--primary)', fontWeight: 'bold'}}>가이드 읽기 →</Link>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
                    <Link href="/blog" className="btn-secondary">
                        블로그 14편 전체 보기 →
                    </Link>
                </div>
            </section>

            {/* CTA 섹션 */}
            <section className="cta-section" style={{ marginTop: 'var(--space-3xl)' }}>
                <h3>지금 바로 시작하세요!</h3>
                <p>복잡한 도구 없이 숫자만 입력하면 아름다운 인포그래픽이 완성됩니다.</p>
                <div className="quick-links">
                    <Link href="/about" className="quick-link">
                        서비스 소개 →
                    </Link>
                    <Link href="/faq" className="quick-link">
                        자주 묻는 질문 →
                    </Link>
                </div>
            </section>

            {/* 푸터 */}
            <Footer />
        </div>
    );
}
