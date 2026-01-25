import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

export const metadata = {
    title: '무료 인포그래픽 메이커 | Free Infographic Maker',
    description: '숫자와 텍스트만 입력하면 예쁜 인포그래픽이 자동으로 생성됩니다. 비즈니스, 마케팅, SNS용 인포그래픽을 무료로 만들어보세요!',
    keywords: '인포그래픽, 인포그래픽 만들기, 무료 인포그래픽, infographic maker, 데이터 시각화',
    authors: [{ name: 'Infographic Maker' }],
    creator: 'Infographic Maker',
    openGraph: {
        title: '무료 인포그래픽 메이커 | Free Infographic Maker',
        description: '숫자와 텍스트만 입력하면 예쁜 인포그래픽이 자동으로 생성됩니다.',
        url: 'https://infographic-maker.vercel.app',
        siteName: 'Infographic Maker',
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '무료 인포그래픽 메이커',
        description: '숫자와 텍스트만 입력하면 예쁜 인포그래픽이 자동으로 생성됩니다.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko" className={`${inter.variable} ${outfit.variable}`}>
            <head>
                {/* Google AdSense */}
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8449613598033027"
                    crossOrigin="anonymous"
                />

                {/* 구조화된 데이터 */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebApplication",
                            "name": "무료 인포그래픽 메이커",
                            "description": "숫자와 텍스트만 입력하면 예쁜 인포그래픽이 자동으로 생성됩니다.",
                            "url": "https://infographic-maker.vercel.app",
                            "applicationCategory": "DesignApplication",
                            "operatingSystem": "Web Browser",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "KRW"
                            }
                        })
                    }}
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
