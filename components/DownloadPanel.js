'use client';

/*
 * 💻 프론트엔드 개발자 에이전트 - DownloadPanel 컴포넌트
 * 
 * SEO 에이전트 피드백: "다운로드 전 광고 노출 3초 적용해주세요"
 * 개발자 응답: "카운트다운 모달 추가했습니다"
 * PM 조율: "좋습니다. 스킵 버튼은 없이 진행하죠"
 */

import { useState, useCallback } from 'react';
import { downloadAsImage, copyToClipboard, getSocialShareUrls } from '@/lib/infographicEngine';

export default function DownloadPanel({ title, items }) {
    const [isDownloading, setIsDownloading] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [downloadFormat, setDownloadFormat] = useState('png');

    // 유효한 데이터 체크
    const hasValidData = title.trim() || items.some(item => item.label.trim() && item.value.trim());

    // 카운트다운 시작
    const startCountdown = useCallback((format) => {
        setDownloadFormat(format);
        setCountdown(3);

        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    executeDownload(format);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }, []);

    // 다운로드 실행
    const executeDownload = async (format) => {
        setIsDownloading(true);
        try {
            const filename = `infographic_${Date.now()}`;
            await downloadAsImage('infographic-canvas', filename, format);
        } catch (err) {
            console.error('Download failed:', err);
            alert('다운로드에 실패했습니다. 다시 시도해주세요.');
        } finally {
            setIsDownloading(false);
            setCountdown(0);
        }
    };

    // 클립보드 복사
    const handleCopy = async () => {
        try {
            await copyToClipboard('infographic-canvas');
            alert('이미지가 클립보드에 복사되었습니다!');
        } catch (err) {
            console.error('Copy failed:', err);
            alert('복사에 실패했습니다. 다시 시도해주세요.');
        }
    };

    // 공유 URL
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const socialUrls = getSocialShareUrls(shareUrl, title || '인포그래픽');

    return (
        <>
            <div className="download-panel">
                <div className="download-buttons">
                    <button
                        className="download-btn download-btn-primary"
                        onClick={() => startCountdown('png')}
                        disabled={!hasValidData || isDownloading}
                    >
                        <span>📥</span>
                        <span>PNG 다운로드</span>
                    </button>
                    <button
                        className="download-btn download-btn-secondary"
                        onClick={() => startCountdown('jpg')}
                        disabled={!hasValidData || isDownloading}
                    >
                        <span>📥</span>
                        <span>JPG</span>
                    </button>
                    <button
                        className="download-btn download-btn-secondary"
                        onClick={handleCopy}
                        disabled={!hasValidData}
                    >
                        <span>📋</span>
                        <span>복사</span>
                    </button>
                </div>

                <div className="share-section">
                    <span className="share-label">공유하기</span>
                    <div className="share-buttons">
                        <a
                            href={socialUrls.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="share-btn"
                            aria-label="Twitter 공유"
                        >
                            𝕏
                        </a>
                        <a
                            href={socialUrls.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="share-btn"
                            aria-label="Facebook 공유"
                        >
                            f
                        </a>
                        <a
                            href={socialUrls.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="share-btn"
                            aria-label="LinkedIn 공유"
                        >
                            in
                        </a>
                        <button
                            className="share-btn"
                            onClick={() => {
                                navigator.clipboard.writeText(shareUrl);
                                alert('링크가 복사되었습니다!');
                            }}
                            aria-label="링크 복사"
                        >
                            🔗
                        </button>
                    </div>
                </div>
            </div>

            {/* 카운트다운 모달 */}
            {countdown > 0 && (
                <div className="countdown-overlay">
                    <div className="countdown-modal">
                        <div className="countdown-number">{countdown}</div>
                        <p className="countdown-text">잠시 후 다운로드가 시작됩니다...</p>
                    </div>
                </div>
            )}
        </>
    );
}
