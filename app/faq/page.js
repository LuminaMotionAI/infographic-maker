'use client';

/*
 * FAQ 페이지 - 자주 묻는 질문
 * Client Component (useState 사용) - 하지만 메타데이터는 별도 파일로 분리
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
                a: '네, InfoMaker는 완전히 무료입니다. 회원가입 없이 무제한으로 사용할 수 있으며, 생성한 인포그래픽도 상업적으로 자유롭게 활용할 수 있습니다. 다운로드 횟수나 생성 개수에 제한이 없습니다.'
            },
            {
                q: '회원가입이 필요한가요?',
                a: '아니요, 회원가입 없이 바로 사용하실 수 있습니다. 웹사이트에 접속하면 즉시 인포그래픽 제작을 시작할 수 있습니다. 별도의 로그인 과정 없이 모든 기능을 무료로 이용할 수 있습니다.'
            },
            {
                q: '생성한 인포그래픽을 상업적으로 사용해도 되나요?',
                a: '네, 생성한 인포그래픽은 상업적 목적으로 자유롭게 사용하실 수 있습니다. 비즈니스 보고서, 마케팅 자료, SNS 콘텐츠, 블로그 포스팅 등 어떤 용도로든 활용 가능하며, 별도의 크레딧 표기도 필요하지 않습니다.'
            },
            {
                q: 'InfoMaker는 어떤 회사에서 운영하나요?',
                a: 'InfoMaker는 데이터 시각화의 접근성을 높이기 위해 만들어진 무료 서비스입니다. 누구나 쉽게 전문적인 인포그래픽을 만들 수 있도록 지속적으로 개선하고 있습니다.'
            }
        ]
    },
    {
        category: '기능',
        questions: [
            {
                q: '최대 몇 개의 데이터 항목을 추가할 수 있나요?',
                a: '현재 최대 6개의 데이터 항목을 추가할 수 있습니다. 깔끔한 디자인을 위해 3-4개의 핵심 데이터만 표시하는 것을 권장합니다. 너무 많은 정보는 오히려 가독성을 떨어뜨릴 수 있습니다.'
            },
            {
                q: '어떤 스타일을 선택할 수 있나요?',
                a: 'Minimal(미니멀), Gradient(그라데이션), Glassmorphism(유리 효과) 세 가지 스타일을 제공합니다. 각 스타일에 Purple, Blue, Teal, Orange, Pink, Indigo 등 6가지 색상 테마를 조합할 수 있어 총 18가지 디자인 조합이 가능합니다.'
            },
            {
                q: '다운로드 가능한 파일 형식은 무엇인가요?',
                a: 'PNG와 JPG 두 가지 형식으로 다운로드할 수 있습니다. PNG는 투명 배경으로 웹/SNS용에 적합하고, JPG는 흰색 배경으로 문서/인쇄용에 적합합니다. 두 형식 모두 고해상도로 제공됩니다.'
            },
            {
                q: '생성한 인포그래픽을 공유할 수 있나요?',
                a: '네, "복사" 버튼을 클릭하면 공유 링크가 생성됩니다. 이 링크를 통해 다른 사람들과 인포그래픽을 공유할 수 있으며, 링크를 받은 사람도 동일한 인포그래픽을 확인하고 필요하면 수정할 수 있습니다.'
            },
            {
                q: '카테고리를 선택하면 어떤 점이 달라지나요?',
                a: '카테고리(비즈니스, 마케팅, 교육, SNS)를 선택하면 해당 분야에 가장 적합한 색상 테마가 자동으로 추천됩니다. 물론 추천된 색상을 수동으로 변경할 수도 있습니다.'
            }
        ]
    },
    {
        category: '문제 해결',
        questions: [
            {
                q: '다운로드가 되지 않아요.',
                a: '브라우저의 다운로드 설정을 확인해주세요. 팝업 차단이 활성화되어 있다면 일시적으로 해제하고 다시 시도해보세요. 문제가 계속되면 다른 브라우저(Chrome, Firefox 권장)를 사용해보세요. Safari의 경우 다운로드 권한을 확인해주세요.'
            },
            {
                q: '미리보기가 표시되지 않아요.',
                a: '최소 하나 이상의 데이터 항목에 값을 입력해야 미리보기가 표시됩니다. 라벨과 수치를 입력하고 확인해보세요. 또한 브라우저의 JavaScript가 활성화되어 있는지 확인해주세요.'
            },
            {
                q: '특정 브라우저에서 제대로 작동하지 않아요.',
                a: 'InfoMaker는 최신 버전의 Chrome, Firefox, Safari, Edge에서 최적으로 작동합니다. 브라우저를 최신 버전으로 업데이트하거나 다른 브라우저를 사용해보세요. Internet Explorer는 지원되지 않습니다.'
            },
            {
                q: '이미지가 흐릿하게 나와요.',
                a: '다운로드한 이미지는 고해상도로 저장됩니다. 미리보기에서는 성능을 위해 압축된 이미지가 표시될 수 있지만, 다운로드한 파일은 고품질입니다. 다운로드 후 원본 크기로 확인해보세요.'
            }
        ]
    },
    {
        category: '기타',
        questions: [
            {
                q: '모바일에서도 사용할 수 있나요?',
                a: '네, InfoMaker는 반응형 디자인으로 모바일에서도 사용 가능합니다. 다만, 데이터 입력과 디자인 편집은 더 넓은 화면의 데스크톱/태블릿에서 더 편리하게 사용하실 수 있습니다.'
            },
            {
                q: '오프라인에서도 사용할 수 있나요?',
                a: '현재는 인터넷 연결이 필요합니다. 모든 기능이 웹 기반으로 제공되므로 안정적인 인터넷 연결 환경에서 사용해 주세요. 향후 오프라인 기능 추가를 검토 중입니다.'
            },
            {
                q: '추가 기능을 요청하고 싶어요.',
                a: '소중한 의견 감사합니다! 문의하기 페이지를 통해 기능 제안을 보내주시면 검토 후 반영하겠습니다. 사용자분들의 피드백을 바탕으로 서비스를 지속적으로 개선하고 있습니다.'
            },
            {
                q: '데이터가 저장되나요?',
                a: '현재 서버에 데이터를 저장하지 않습니다. 모든 작업은 브라우저에서 이루어지며, 페이지를 새로고침하면 입력한 데이터가 초기화됩니다. 작업 내용을 보관하려면 다운로드하거나 공유 링크를 저장해 주세요.'
            },
            {
                q: 'API를 제공하나요?',
                a: '현재는 API를 제공하지 않습니다. 대량의 인포그래픽 생성이나 자동화가 필요하신 경우 문의하기 페이지를 통해 연락해 주세요.'
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
                <nav className="header-nav">
                    <Link href="/about" className="nav-link">소개</Link>
                    <Link href="/guide" className="nav-link">가이드</Link>
                    <Link href="/tips" className="nav-link">팁</Link>
                    <Link href="/examples" className="nav-link">예제</Link>
                </nav>
            </header>

            {/* 정적 콘텐츠 - SEO를 위해 항상 렌더링 */}
            <main className="legal-content">
                <h1>❓ 자주 묻는 질문 (FAQ)</h1>
                <p className="page-description">
                    InfoMaker 이용에 관해 자주 묻는 질문들을 정리했습니다.
                    아래에서 원하는 답변을 찾아보세요.
                </p>

                {/* FAQ 카테고리별 소개 (정적 텍스트) */}
                <section className="content-section">
                    <h2>InfoMaker FAQ 안내</h2>
                    <p>
                        InfoMaker는 무료 인포그래픽 생성 도구입니다.
                        이 페이지에서는 서비스 이용과 관련된 자주 묻는 질문과 답변을 확인하실 수 있습니다.
                        일반적인 질문, 기능 관련 질문, 문제 해결 방법, 기타 문의사항으로 분류되어 있습니다.
                    </p>
                </section>

                {/* 대화형 FAQ 섹션 */}
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

                {/* 정적 요약 (SEO용) */}
                <section className="content-section">
                    <h2>주요 FAQ 요약</h2>
                    <div className="faq-summary">
                        <h3>무료 이용</h3>
                        <p>
                            InfoMaker는 완전 무료 서비스입니다. 회원가입 없이 무제한으로 사용 가능하며,
                            생성한 인포그래픽은 상업적 용도로도 자유롭게 활용할 수 있습니다.
                        </p>

                        <h3>지원 기능</h3>
                        <p>
                            최대 6개의 데이터 항목, 3가지 디자인 스타일(Minimal, Gradient, Glassmorphism),
                            6가지 색상 테마, PNG/JPG 다운로드, 링크 공유 기능을 제공합니다.
                        </p>

                        <h3>브라우저 지원</h3>
                        <p>
                            Chrome, Firefox, Safari, Edge 최신 버전에서 최적으로 작동합니다.
                            모바일에서도 사용 가능하지만, 데스크톱에서 더 편리하게 이용할 수 있습니다.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>더 궁금한 점이 있으신가요?</h2>
                    <p>
                        위 내용에서 답을 찾지 못하셨다면,
                        <Link href="/contact"> 문의하기</Link> 페이지를 통해
                        질문해 주세요. 빠른 시일 내에 답변 드리겠습니다.
                    </p>
                    <p>
                        <Link href="/guide">사용 가이드</Link>에서 더 자세한 사용법을 확인하실 수도 있습니다.
                    </p>
                </section>

                <div className="cta-section">
                    <h3>질문이 해결되셨나요?</h3>
                    <p>지금 바로 인포그래픽을 만들어보세요!</p>
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
                    <Link href="/guide" className="footer-link">사용 가이드</Link>
                    <Link href="/tips" className="footer-link">제작 팁</Link>
                    <Link href="/examples" className="footer-link">예제</Link>
                    <Link href="/faq" className="footer-link">FAQ</Link>
                    <Link href="/terms" className="footer-link">이용약관</Link>
                    <Link href="/privacy" className="footer-link">개인정보처리방침</Link>
                    <Link href="/contact" className="footer-link">문의하기</Link>
                </div>
            </footer>
        </div>
    );
}
