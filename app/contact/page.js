'use client';

/*
 * 연락처(문의하기) 페이지
 */

import { useState } from 'react';
import Link from 'next/link';
import '@/styles/components.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 실제로는 서버로 전송하는 로직 추가
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <div className="container">
            {/* 헤더 */}
            <header className="header">
                <Link href="/" className="logo">
                    <span className="logo-icon">📊</span>
                    <span className="logo-text">InfoMaker</span>
                </Link>
            </header>

            {/* 메인 콘텐츠 */}
            <main className="legal-content">
                <h1>문의하기</h1>
                <p className="page-description">
                    서비스 이용 중 궁금한 점이나 건의사항이 있으시면 아래 양식을 통해 문의해 주세요.
                </p>

                {submitted ? (
                    <div className="success-message">
                        <span className="success-icon">✅</span>
                        <h2>문의가 접수되었습니다!</h2>
                        <p>빠른 시일 내에 답변 드리겠습니다.</p>
                        <Link href="/" className="btn-primary">
                            메인으로 돌아가기
                        </Link>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">이름</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="input"
                                placeholder="이름을 입력하세요"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">이메일</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="input"
                                placeholder="example@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">문의 유형</label>
                            <select
                                id="subject"
                                name="subject"
                                className="input"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="">선택해주세요</option>
                                <option value="usage">서비스 이용 문의</option>
                                <option value="bug">버그 신고</option>
                                <option value="feature">기능 제안</option>
                                <option value="partnership">제휴 문의</option>
                                <option value="other">기타</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">문의 내용</label>
                            <textarea
                                id="message"
                                name="message"
                                className="input textarea"
                                placeholder="문의 내용을 상세히 작성해 주세요"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-primary submit-btn">
                            문의 보내기
                        </button>
                    </form>
                )}

                <section className="content-section contact-info">
                    <h2>다른 연락 방법</h2>
                    <ul>
                        <li>
                            <strong>📧 이메일:</strong> support@infomaker.com
                        </li>
                        <li>
                            <strong>⏰ 응답 시간:</strong> 영업일 기준 1-2일 내
                        </li>
                    </ul>
                </section>
            </main>

            {/* 푸터 */}
            <footer className="footer">
                <p className="footer-text">© 2026 InfoMaker. 무료 인포그래픽 생성 도구</p>
                <div className="footer-links">
                    <Link href="/about" className="footer-link">서비스 소개</Link>
                    <Link href="/terms" className="footer-link">이용약관</Link>
                    <Link href="/privacy" className="footer-link">개인정보처리방침</Link>
                    <Link href="/contact" className="footer-link">문의하기</Link>
                </div>
            </footer>
        </div>
    );
}
