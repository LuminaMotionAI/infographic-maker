/*
 * 🧠 AI 엔지니어 에이전트 - 색상 테마 시스템 (Professional Redesign)
 * 
 * 비즈니스 친화적인 프로페셔널 색상 팔레트로 전면 교체
 */

// 색상 테마 정의 - 비즈니스 프로페셔널 버전
export const colorSchemes = {
    blue: {
        name: '코퍼레이트 블루',
        primary: '#2563eb',
        secondary: '#3b82f6',
        gradient: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
        textColor: '#ffffff',
        cardBg: 'rgba(37, 99, 235, 0.08)',
        lightBg: '#eff6ff',
    },
    gray: {
        name: '프로페셔널 그레이',
        primary: '#374151',
        secondary: '#6b7280',
        gradient: 'linear-gradient(135deg, #374151 0%, #6b7280 100%)',
        textColor: '#ffffff',
        cardBg: 'rgba(55, 65, 81, 0.08)',
        lightBg: '#f9fafb',
    },
    teal: {
        name: '모던 틸',
        primary: '#0d9488',
        secondary: '#14b8a6',
        gradient: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
        textColor: '#ffffff',
        cardBg: 'rgba(13, 148, 136, 0.08)',
        lightBg: '#f0fdfa',
    },
    indigo: {
        name: '엘레강트 인디고',
        primary: '#4f46e5',
        secondary: '#6366f1',
        gradient: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
        textColor: '#ffffff',
        cardBg: 'rgba(79, 70, 229, 0.08)',
        lightBg: '#eef2ff',
    },
    rose: {
        name: '소프트 로즈',
        primary: '#e11d48',
        secondary: '#f43f5e',
        gradient: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)',
        textColor: '#ffffff',
        cardBg: 'rgba(225, 29, 72, 0.08)',
        lightBg: '#fff1f2',
    },
};

// 카테고리별 추천 색상
export const categoryColors = {
    business: 'blue',
    marketing: 'rose',
    education: 'teal',
    sns: 'indigo',
};

// 색상 테마 가져오기
export function getColorScheme(themeKey) {
    return colorSchemes[themeKey] || colorSchemes.blue;
}

// 카테고리에 따른 추천 색상 가져오기
export function getRecommendedColor(category) {
    return categoryColors[category] || 'blue';
}

// 그라데이션 생성
export function generateGradient(startColor, endColor, angle = 135) {
    return `linear-gradient(${angle}deg, ${startColor} 0%, ${endColor} 100%)`;
}

// 색상 밝기 계산 (대비 확인용)
export function getLuminance(hexColor) {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;

    const a = [r, g, b].map(c => {
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

// 대비 텍스트 색상 반환
export function getContrastTextColor(bgColor) {
    const luminance = getLuminance(bgColor);
    return luminance > 0.5 ? '#000000' : '#ffffff';
}

// 랜덤 테마 선택
export function getRandomTheme() {
    const themes = Object.keys(colorSchemes);
    return themes[Math.floor(Math.random() * themes.length)];
}
