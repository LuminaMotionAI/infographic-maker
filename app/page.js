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
                    <Link href="/tips" className="quick-link">
                        <span>💡</span> 제작 팁
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
