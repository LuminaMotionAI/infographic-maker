'use client';

import { useEffect } from 'react';

/*
 * 📈 SEO 에이전트 - AdBanner 컴포넌트
 * 
 * [📈 SEO 에이전트]
 * - AdSense 승인 전: 아무것도 렌더링하지 않음 (빈 플레이스홀더 금지)
 * - AdSense 승인 후: 실제 광고 코드 활성화
 */

export default function AdBanner() {
    useEffect(() => {
        // AdSense 광고가 로드되면 초기화
        try {
            if (typeof window !== 'undefined' && window.adsbygoogle) {
                window.adsbygoogle.push({});
            }
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    // AdSense 승인 후 아래 주석을 해제하세요
    // 승인 전까지는 null을 반환하여 빈 플레이스홀더 표시 방지
    return null;

    /* AdSense 승인 후 아래 코드로 교체:
    return (
        <div className="ad-banner" style={{ minHeight: '90px', marginTop: '2rem' }}>
            <ins 
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-8449613598033027"
                data-ad-slot="YOUR_AD_SLOT_ID"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    );
    */
}
