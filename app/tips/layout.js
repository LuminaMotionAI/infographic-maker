export const metadata = {
    title: '인포그래픽 제작 팁 | InfoMaker - 전문가처럼 인포그래픽 만들기',
    description: '인포그래픽 제작을 위한 실용적인 팁과 노하우. 색상 선택, 타이포그래피, SNS 마케팅, 데이터 시각화 등 전문가의 노하우를 배워보세요.',
    keywords: '인포그래픽 팁, 인포그래픽 만드는 법, 디자인 팁, 데이터 시각화',
    openGraph: {
        title: '인포그래픽 제작 팁 | InfoMaker',
        description: '전문가처럼 인포그래픽을 만들기 위한 실용적인 팁과 노하우.',
        url: 'https://infographic-maker.vercel.app/tips',
        siteName: 'InfoMaker',
        locale: 'ko_KR',
        type: 'article',
    },
};

export default function TipsLayout({ children }) {
    return children;
}
