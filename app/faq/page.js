'use client';

/*
 * FAQ 페이지 - 자주 묻는 질문
 */

import { useState } from 'react';
import Link from 'next/link';
import '@/styles/components.css';

const faqs = [
    {
        category: '일반',
        questions: [
            {
                q: 'InfoMaker는 무료인가요?',
                a: '네, InfoMaker는 완전히 무료입니다. 회원가입 없이 무제한으로 사용할 수 있으며, 생성한 인포그래픽도 상업적으로 자유롭게 활용할 수 있습니다.'
            },
            {
                q: '회원가입이 필요한가요?',
                a: '아니요, 회원가입 없이 바로 사용하실 수 있습니다. 웹사이트에 접속하면 즉시 인포그래픽 제작을 시작할 수 있습니다.'
            },
            {
                q: '생성한 인포그래픽을 상업적으로 사용해도 되나요?',
                a: '네, 생성한 인포그래픽은 상업적 목적으로 자유롭게 사용하실 수 있습니다. 단, 별도의 크레딧 표기는 필요하지 않습니다.'
            }
        ]
    },
    {
        category: '기능',
        questions: [
            {
                q: '최대 몇 개의 데이터 항목을 추가할 수 있나요?',
                a: '현재 최대 6개의 데이터 항목을 추가할 수 있습니다. 깔끔한 디자인을 위해 3-4개의 핵심 데이터만 표시하는 것을 권장합니다.'
            },
            {
                q: '어떤 스타일을 선택할 수 있나요?',
                a: 'Minimal(미니멀), Gradient(그라데이션), Glassmorphism(유리 효과) 세 가지 스타일을 제공합니다. 각 스타일에 6가지 색상 테마를 조합할 수 있습니다.'
            },
            {
                q: '다운로드 가능한 파일 형식은 무엇인가요?',
                a: 'PNG와 JPG 두 가지 형식으로 다운로드할 수 있습니다. PNG는 투명 배경으로 웹/SNS용에 적합하고, JPG는 흰색 배경으로 문서/인쇄용에 적합합니다.'
            },
            {
                q: '생성한 인포그래픽을 공유할 수 있나요?',
                a: '네, "복사" 버튼을 클릭하면 공유 링크가 생성됩니다. 이 링크를 통해 다른 사람들과 인포그래픽을 공유할 수 있습니다.'
            }
        ]
    },
    {
        category: '문제 해결',
        questions: [
            {
                q: '다운로드가 되지 않아요.',
                a: '브라우저의 다운로드 설정을 확인해주세요. 팝업 차단이 활성화되어 있다면 일시적으로 해제하고 다시 시도해보세요. 문제가 계속되면 다른 브라우저(Chrome, Firefox 권장)를 사용해보세요.'
            },
            {
                q: '미리보기가 표시되지 않아요.',
                a: '최소 하나 이상의 데이터 항목에 값을 입력해야 미리보기가 표시됩니다. 라벨과 수치를 입력하고 확인해보세요.'
            },
            {
                q: '특정 브라우저에서 제대로 작동하지 않아요.',
                a: 'InfoMaker는 최신 버전의 Chrome, Firefox, Safari, Edge에서 최적으로 작동합니다. 브라우저를 최신 버전으로 업데이트하거나 다른 브라우저를 사용해보세요.'
            }
        ]
    },
    {
        category: '기타',
        questions: [
            {
                q: '모바일에서도 사용할 수 있나요?',
                a: '네, InfoMaker는 반응형 디자인으로 모바일에서도 사용 가능합니다. 다만, 더 넓은 화면의 데스크톱/태블릿에서 더 편리하게 사용하실 수 있습니다.'
            },
            {
                q: '오프라인에서도 사용할 수 있나요?',
                a: '현재는 인터넷 연결이 필요합니다. 향후 오프라인 기능을 추가할 계획입니다.'
            },
            {
                q: '추가 기능을 요청하고 싶어요.',
                a: '소중한 의견 감사합니다! 문의하기 페이지를 통해 기능 제안을 보내주시면 검토 후 반영하겠습니다.'
            }
        ]
    }
];

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <span className="faq-icon">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}

export default function FAQPage() {
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
                <h1>❓ 자주 묻는 질문</h1>
                <p className="page-description">
                    InfoMaker 이용에 관해 자주 묻는 질문들을 정리했습니다.
                </p>

                {faqs.map((category, idx) => (
                    <section key={idx} className="faq-section">
                        <h2>{category.category}</h2>
                        <div className="faq-list">
                            {category.questions.map((item, qIdx) => (
                                <FAQItem
                                    key={qIdx}
                                    question={item.q}
                                    answer={item.a}
                                />
                            ))}
                        </div>
                    </section>
                ))}

                <section className="content-section">
                    <h2>더 궁금한 점이 있으신가요?</h2>
                    <p>
                        위 내용에서 답을 찾지 못하셨다면,
                        <Link href="/contact"> 문의하기</Link> 페이지를 통해
                        질문해 주세요. 빠른 시일 내에 답변 드리겠습니다.
                    </p>
                </section>

                <div className="cta-section">
                    <Link href="/" className="btn-primary">
                        인포그래픽 만들기 →
                    </Link>
                </div>
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
