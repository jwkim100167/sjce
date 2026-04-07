import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WorldCupLanding.css';

export default function WorldCupLanding() {
  const navigate = useNavigate();

  return (
    <div className="wc-landing-page">
      <div className="wc-landing-container">
        <button className="wc-landing-back-btn" onClick={() => navigate('/')}>← 홈</button>

        <div className="wc-landing-header">
          <div className="wc-landing-icon">⚽</div>
          <h1>2026 FIFA 월드컵<br/>순위 예측</h1>
          <p className="wc-landing-sub">1위 · 2위 · 3위를 예측하고 상금을 받아가세요!</p>
        </div>

        <div className="wc-prize-banner">
          <div className="wc-prize-total">💰 총 상금 <b>10만원</b></div>
        </div>

        <p className="wc-landing-question">예측에 참여하셨나요?</p>

        <div className="wc-landing-choices">
          <button className="wc-choice-card wc-choice-no" onClick={() => navigate('/world-cup-predict/form')}>
            <span className="wc-choice-emoji">✏️</span>
            <span className="wc-choice-title">아직 안 했어요</span>
            <span className="wc-choice-desc">지금 예측하러 가기</span>
          </button>

          <button className="wc-choice-card wc-choice-yes" onClick={() => navigate('/world-cup-predict/result')}>
            <span className="wc-choice-emoji">🏆</span>
            <span className="wc-choice-title">예측했어요</span>
            <span className="wc-choice-desc">참가자 목록 확인하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
