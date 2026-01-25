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

    if (!isLoaded) {
        return (
            <div className="container" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="animate-pulse" style={{ fontSize: '2rem' }}>📊</div>
            </div>
        );
    }

    return (
        <div className="container">
            <Header />

            {/* 히어로 섹션 */}
            <section className="hero">
                <h1>무료 인포그래픽 메이커</h1>
                <p className="hero-subtitle">
                    숫자와 텍스트만 입력하면 예쁜 인포그래픽이 자동으로 생성됩니다
                </p>
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

            {/* 푸터 */}
            <Footer />
        </div>
    );
}
