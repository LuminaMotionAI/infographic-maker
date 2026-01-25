'use client';

/*
 * 💻 프론트엔드 개발자 에이전트 - StyleSelector 컴포넌트
 * 
 * 디자이너 피드백: "색상 선택기를 원형으로 하고 싶어요"
 * 개발자 응답: "사각형이 공간 활용도가 더 좋아서 라운드 사각형으로 갈게요"
 * PM 조율: "개발자 의견대로 진행하고, 호버 시 살짝 확대되는 효과 추가해주세요"
 */

import { templates } from '@/lib/templates';
import { colorSchemes } from '@/lib/colorSchemes';

export default function StyleSelector({
    selectedStyle,
    setSelectedStyle,
    selectedColor,
    setSelectedColor
}) {
    return (
        <div className="input-form">
            {/* 스타일 선택 */}
            <div className="form-section">
                <div className="form-section-title">스타일</div>
                <div className="style-options">
                    {Object.entries(templates).map(([key, template]) => (
                        <button
                            key={key}
                            className={`style-btn ${selectedStyle === key ? 'active' : ''}`}
                            onClick={() => setSelectedStyle(key)}
                        >
                            <span>{template.icon}</span>
                            <span>{template.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* 색상 테마 선택 */}
            <div className="form-section">
                <div className="form-section-title">색상 테마</div>
                <div className="color-themes">
                    {Object.entries(colorSchemes).map(([key, scheme]) => (
                        <button
                            key={key}
                            className={`color-theme-btn theme-${key} ${selectedColor === key ? 'active' : ''}`}
                            onClick={() => setSelectedColor(key)}
                            title={scheme.name}
                            aria-label={scheme.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
