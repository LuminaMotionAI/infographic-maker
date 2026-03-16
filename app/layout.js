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
                {/* Google AdSense Account Verification */}
                <meta name="google-adsense-account" content="ca-pub-8449613598033027" />

                {/* Google AdSense Script */}
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8449613598033027"
                    crossOrigin="anonymous"
                />

                {/* Google Analytics (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-32FNB67FKC"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-32FNB67FKC');
                        `
                    }}
                />

                {/* MS Clarity Script */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(c,l,a,r,i,t,y){
                                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                            })(window, document, "clarity", "script", "v9l5gxis9u");
                        `
                    }}
                />

                {/* 구조화된 데이터 - WebApplication */}
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
                
                {/* 구조화된 데이터 - Blog */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Blog",
                            "@id": "https://infographic-maker.vercel.app/blog",
                            "name": "InfoMaker 블로그",
                            "description": "데이터 시각화와 인포그래픽 디자인에 대한 심층 전문가 가이드",
                            "url": "https://infographic-maker.vercel.app/blog"
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
