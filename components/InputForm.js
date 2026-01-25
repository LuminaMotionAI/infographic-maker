'use client';

/*
 * 💻 프론트엔드 개발자 에이전트 - InputForm 컴포넌트
 * 
 * 디자이너 피드백: "입력 필드에 아이콘 추가하면 좋겠어요"
 * 개발자 응답: "적용했습니다. 삭제 버튼도 호버 효과 추가했어요"
 * PM 조율: "좋습니다. 진행하세요"
 */

import { categories } from '@/lib/templates';

export default function InputForm({
    title,
    setTitle,
    items,
    setItems,
    category,
    setCategory
}) {

    // 항목 추가
    const addItem = () => {
        if (items.length >= 6) return;
        setItems([
            ...items,
            { id: Date.now(), label: '', value: '', unit: '' }
        ]);
    };

    // 항목 삭제
    const removeItem = (id) => {
        if (items.length <= 1) return;
        setItems(items.filter(item => item.id !== id));
    };

    // 항목 업데이트
    const updateItem = (id, field, value) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        ));
    };

    return (
        <div className="input-form">
            {/* 제목 입력 */}
            <div className="form-section">
                <div className="form-section-title">제목</div>
                <input
                    type="text"
                    className="input"
                    placeholder="인포그래픽 제목을 입력하세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={50}
                />
            </div>

            {/* 데이터 항목 */}
            <div className="form-section">
                <div className="form-section-title">데이터 항목</div>
                <div className="data-items">
                    {items.map((item, index) => (
                        <div key={item.id} className="data-item">
                            <input
                                type="text"
                                className="data-input"
                                placeholder="라벨 (예: 매출)"
                                value={item.label}
                                onChange={(e) => updateItem(item.id, 'label', e.target.value)}
                            />
                            <input
                                type="text"
                                className="data-input"
                                placeholder="수치"
                                value={item.value}
                                onChange={(e) => updateItem(item.id, 'value', e.target.value)}
                            />
                            <input
                                type="text"
                                className="data-input"
                                placeholder="단위"
                                value={item.unit}
                                onChange={(e) => updateItem(item.id, 'unit', e.target.value)}
                            />
                            <button
                                className="delete-btn"
                                onClick={() => removeItem(item.id)}
                                disabled={items.length <= 1}
                                aria-label="항목 삭제"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>

                {items.length < 6 && (
                    <button className="add-item-btn" onClick={addItem}>
                        <span>+</span>
                        <span>항목 추가 ({items.length}/6)</span>
                    </button>
                )}
            </div>

            {/* 카테고리 선택 */}
            <div className="form-section">
                <div className="form-section-title">카테고리</div>
                <div className="category-grid">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`category-btn ${category === cat.id ? 'active' : ''}`}
                            onClick={() => setCategory(cat.id)}
                        >
                            <span className="category-icon">{cat.icon}</span>
                            <span>{cat.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
