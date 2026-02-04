export const metadata = {
    title: '문의하기 | InfoMaker - 무료 인포그래픽 메이커',
    description: 'InfoMaker 서비스에 대한 문의, 버그 신고, 기능 제안, 제휴 문의를 받습니다. 궁금한 점이 있으시면 언제든 연락해 주세요.',
    keywords: '문의하기, 연락처, 고객지원, 버그 신고, 기능 제안',
    openGraph: {
        title: '문의하기 | InfoMaker',
        description: 'InfoMaker 서비스에 대한 문의사항을 보내주세요.',
        url: 'https://infographic-maker.vercel.app/contact',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'website',
    },
};

export default function ContactLayout({ children }) {
    return children;
}
