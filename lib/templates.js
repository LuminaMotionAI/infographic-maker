/*
 * 🧠 AI 엔지니어 에이전트 - 템플릿 시스템
 * 
 * [🧠 AI 엔지니어 에이전트]
 * - 현재 작업: 인포그래픽 템플릿 정의
 * - 완료 내용: 3가지 스타일 템플릿 (Minimal, Gradient, Glass)
 * - 다음 에이전트에게 전달할 사항: getTemplateStyle() 함수 사용법
 * - 예상 이슈: 없음
 */

// 템플릿 스타일 정의
export const templates = {
    minimal: {
        name: 'Minimal',
        icon: '◻️',
        description: '깔끔하고 심플한 디자인',
        baseStyle: {
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
        },
        cardStyle: {
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        textStyle: {
            titleColor: '#ffffff',
            valueColor: '#ffffff',
            labelColor: 'rgba(255, 255, 255, 0.7)',
        },
    },
    gradient: {
        name: 'Gradient',
        icon: '🌈',
        description: '생동감 있는 그라데이션',
        baseStyle: {
            // gradient는 colorScheme에서 적용
            border: 'none',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        },
        cardStyle: {
            background: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            backdropFilter: 'blur(5px)',
        },
        textStyle: {
            titleColor: '#ffffff',
            valueColor: '#ffffff',
            labelColor: 'rgba(255, 255, 255, 0.9)',
        },
    },
    glass: {
        name: 'Glassmorphism',
        icon: '✨',
        description: '트렌디한 글래스 효과',
        baseStyle: {
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '24px',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        },
        cardStyle: {
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
        },
        textStyle: {
            titleColor: '#ffffff',
            valueColor: '#ffffff',
            labelColor: 'rgba(255, 255, 255, 0.8)',
        },
    },
};

// 카테고리 정의
export const categories = [
    { id: 'business', name: '비즈니스', icon: '💼' },
    { id: 'marketing', name: '마케팅', icon: '📊' },
    { id: 'education', name: '교육', icon: '📚' },
    { id: 'sns', name: 'SNS', icon: '📱' },
];

// 템플릿 스타일 가져오기
export function getTemplateStyle(templateKey) {
    return templates[templateKey] || templates.minimal;
}

// 모든 템플릿 키 반환
export function getAllTemplateKeys() {
    return Object.keys(templates);
}

// 카테고리에 따른 추천 템플릿
export function getRecommendedTemplate(category) {
    const recommendations = {
        business: 'minimal',
        marketing: 'gradient',
        education: 'minimal',
        sns: 'glass',
    };
    return recommendations[category] || 'gradient';
}

// 데이터 항목 수에 따른 레이아웃 추천
export function getRecommendedLayout(itemCount) {
    if (itemCount <= 2) return 'horizontal';
    if (itemCount <= 4) return 'grid-2';
    return 'grid-3';
}

// 기본 데이터 항목 생성
export function createDefaultDataItem(index) {
    return {
        id: Date.now() + index,
        label: '',
        value: '',
        unit: '',
    };
}

// 데이터 유효성 검사
export function validateData(data) {
    const errors = [];

    if (!data.title || data.title.trim() === '') {
        errors.push('제목을 입력해주세요.');
    }

    const validItems = data.items.filter(item =>
        item.label.trim() !== '' && item.value.trim() !== ''
    );

    if (validItems.length === 0) {
        errors.push('최소 1개의 데이터 항목이 필요합니다.');
    }

    return {
        isValid: errors.length === 0,
        errors,
        validItems,
    };
}
