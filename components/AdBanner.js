'use client';

/*
 * 📈 SEO 에이전트 - AdBanner 컴포넌트
 * 
 * [📈 SEO 에이전트]
 * - 현재 작업: 애드센스 배너 영역 구현
 * - 완료 내용: 하단 배너 플레이스홀더
 * - 다음 에이전트에게 전달할 사항: 실제 애드센스 ID로 교체 필요
 * - 예상 이슈: 애드센스 승인 전까지는 플레이스홀더 표시
 */

export default function AdBanner() {
    return (
        <div className="ad-banner">
            {/* 
        실제 애드센스 코드로 교체해주세요:
        
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      */}
            <span>📢 광고 영역 (Google AdSense)</span>
        </div>
    );
}
