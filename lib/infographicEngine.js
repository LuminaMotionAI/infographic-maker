/*
 * 🧠 AI 엔지니어 에이전트 - 인포그래픽 엔진
 * 
 * [🧠 AI 엔지니어 에이전트]
 * - 현재 작업: 핵심 인포그래픽 생성 엔진
 * - 완료 내용: 숫자 포맷팅, 크기 계산, 이미지 내보내기
 * - 다음 에이전트에게 전달할 사항: formatNumber(), downloadAsImage() 사용
 * - 예상 이슈: html2canvas 폰트 렌더링
 */

import { getColorScheme } from './colorSchemes';
import { getTemplateStyle } from './templates';

// 숫자 포맷팅 (1000 -> 1K, 1000000 -> 1M)
export function formatNumber(num) {
    const number = parseFloat(num);

    if (isNaN(number)) return num;

    if (number >= 1000000000) {
        return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (number >= 1000) {
        return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }

    return number.toLocaleString();
}

// 백분율 계산 (최대값 기준)
export function calculatePercentages(items) {
    const values = items.map(item => parseFloat(item.value) || 0);
    const maxValue = Math.max(...values);

    if (maxValue === 0) return items.map(() => 0);

    return values.map(value => (value / maxValue) * 100);
}

// 동적 폰트 크기 계산
export function calculateFontSize(value, containerWidth = 150) {
    const length = String(value).length;

    if (length <= 3) return 48;
    if (length <= 5) return 40;
    if (length <= 7) return 32;
    return 24;
}

// 인포그래픽 데이터로 스타일 객체 생성
export function generateInfographicStyles(options) {
    const { templateKey, colorKey } = options;

    const template = getTemplateStyle(templateKey);
    const colorScheme = getColorScheme(colorKey);

    // 그라데이션 스타일은 색상 테마 적용
    const baseBackground = templateKey === 'gradient'
        ? colorScheme.gradient
        : template.baseStyle.background;

    return {
        container: {
            ...template.baseStyle,
            background: baseBackground,
        },
        card: template.cardStyle,
        text: template.textStyle,
        colorScheme,
    };
}

// 이미지로 내보내기 (html2canvas 사용)
export async function downloadAsImage(elementId, filename = 'infographic', format = 'png') {
    // 동적 import로 html2canvas 로드
    const html2canvas = (await import('html2canvas')).default;

    const element = document.getElementById(elementId);
    if (!element) {
        throw new Error('Element not found');
    }

    // 캔버스 생성
    const canvas = await html2canvas(element, {
        scale: 2, // 고해상도
        useCORS: true,
        backgroundColor: null,
        logging: false,
    });

    // 다운로드 링크 생성
    const link = document.createElement('a');
    const mimeType = format === 'jpg' ? 'image/jpeg' : 'image/png';
    link.download = `${filename}.${format}`;
    link.href = canvas.toDataURL(mimeType, 0.95);

    // DOM에 추가 후 클릭해야 Safari/Chrome에서 정상 동작
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return true;
}

// 클립보드에 이미지 복사
export async function copyToClipboard(elementId) {
    const html2canvas = (await import('html2canvas')).default;

    const element = document.getElementById(elementId);
    if (!element) {
        throw new Error('Element not found');
    }

    const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        logging: false,
    });

    canvas.toBlob(async (blob) => {
        if (blob) {
            try {
                await navigator.clipboard.write([
                    new ClipboardItem({ 'image/png': blob })
                ]);
            } catch (err) {
                console.error('Failed to copy image:', err);
                throw err;
            }
        }
    });

    return true;
}

// URL에서 공유 링크 생성
export function generateShareUrl(data) {
    const params = new URLSearchParams({
        title: data.title,
        items: JSON.stringify(data.items.map(item => ({
            l: item.label,
            v: item.value,
            u: item.unit,
        }))),
        t: data.template,
        c: data.color,
    });

    return `${window.location.origin}?${params.toString()}`;
}

// URL에서 데이터 파싱
export function parseShareUrl() {
    if (typeof window === 'undefined') return null;

    const params = new URLSearchParams(window.location.search);
    const title = params.get('title');
    const itemsStr = params.get('items');

    if (!title || !itemsStr) return null;

    try {
        const items = JSON.parse(itemsStr).map((item, index) => ({
            id: Date.now() + index,
            label: item.l,
            value: item.v,
            unit: item.u || '',
        }));

        return {
            title,
            items,
            template: params.get('t') || 'gradient',
            color: params.get('c') || 'purple',
        };
    } catch {
        return null;
    }
}

// SNS 공유 URL 생성
export function getSocialShareUrls(url, title) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    return {
        twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    };
}
