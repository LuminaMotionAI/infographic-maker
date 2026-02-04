// 메타데이터는 page.js가 'use client'일 때는 layout에서 정의해야 합니다
// 또는 generateMetadata를 사용하는 별도의 layout 파일을 만들어야 합니다

export const metadata = {
    title: '자주 묻는 질문 (FAQ) | InfoMaker - 무료 인포그래픽 메이커',
    description: 'InfoMaker 자주 묻는 질문과 답변입니다. 무료 이용, 기능, 문제 해결 방법 등 서비스 이용에 관한 궁금증을 해결하세요.',
    keywords: 'FAQ, 자주 묻는 질문, 인포그래픽 도움말, InfoMaker 사용법',
    openGraph: {
        title: '자주 묻는 질문 (FAQ) | InfoMaker',
        description: 'InfoMaker 자주 묻는 질문과 답변입니다.',
        url: 'https://infographic-maker.vercel.app/faq',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'website',
    },
};

export default function FAQLayout({ children }) {
    return children;
}
