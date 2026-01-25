'use client';

/*
 * 💻 프론트엔드 개발자 에이전트 - InfographicPreview 컴포넌트
 * 
 * AI 엔지니어 피드백: "formatNumber 함수 반영해주세요"
 * 개발자 응답: "적용했고, 숫자 크기에 따라 폰트 사이즈도 동적으로 조절되게 했어요"
 * PM 조율: "훌륭합니다!"
 */

import { useMemo } from 'react';
import { getColorScheme } from '@/lib/colorSchemes';
import { getTemplateStyle } from '@/lib/templates';
import { formatNumber, calculateFontSize } from '@/lib/infographicEngine';

export default function InfographicPreview({
    title,
    items,
    selectedStyle,
    selectedColor
}) {
    // 유효한 항목만 필터링
    const validItems = useMemo(() =>
        items.filter(item => item.label.trim() && item.value.trim()),
        [items]
    );

    // 스타일 계산
    const styles = useMemo(() => {
        const template = getTemplateStyle(selectedStyle);
        const colorScheme = getColorScheme(selectedColor);

        const baseBackground = selectedStyle === 'gradient'
            ? colorScheme.gradient
            : selectedStyle === 'glass'
                ? 'linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(22, 33, 62, 0.95))'
                : template.baseStyle.background;

        return {
            container: {
                ...template.baseStyle,
                background: baseBackground,
            },
            colorScheme,
        };
    }, [selectedStyle, selectedColor]);

    // 빈 상태
    if (!title.trim() && validItems.length === 0) {
        return (
            <div className="preview-container">
                <div className="preview-empty">
                    <div className="preview-empty-icon">📊</div>
                    <p className="preview-empty-text">인포그래픽 미리보기</p>
                    <p className="preview-empty-hint">왼쪽에서 데이터를 입력하세요</p>
                </div>
            </div>
        );
    }

    return (
        <div className="preview-container">
            <div
                id="infographic-canvas"
                className="infographic-canvas"
                style={styles.container}
            >
                {/* 제목 */}
                {title.trim() && (
                    <h2 className="infographic-title">{title}</h2>
                )}

                {/* 데이터 항목들 */}
                {validItems.length > 0 && (
                    <div className="infographic-data-grid">
                        {validItems.map((item) => (
                            <div key={item.id} className="infographic-data-item">
                                <div
                                    className="infographic-value"
                                    style={{ fontSize: calculateFontSize(item.value) }}
                                >
                                    {formatNumber(item.value)}
                                    {item.unit && (
                                        <span className="infographic-unit">{item.unit}</span>
                                    )}
                                </div>
                                <div className="infographic-label">{item.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* 데코레이션 요소들 */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '-50px',
                        width: '150px',
                        height: '150px',
                        background: `radial-gradient(circle, ${styles.colorScheme.primary}40 0%, transparent 70%)`,
                        borderRadius: '50%',
                        pointerEvents: 'none',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-30px',
                        left: '-30px',
                        width: '100px',
                        height: '100px',
                        background: `radial-gradient(circle, ${styles.colorScheme.secondary}30 0%, transparent 70%)`,
                        borderRadius: '50%',
                        pointerEvents: 'none',
                    }}
                />
            </div>
        </div>
    );
}
