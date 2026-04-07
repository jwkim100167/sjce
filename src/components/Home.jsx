import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const SERVICE_LIST = [
  {
    id: 'world-cup',
    title: '2026 FIFA 월드컵\n순위 예측',
    icon: '⚽',
    path: '/world-cup-predict',
    desc: '1위 · 2위 · 3위를 예측하고 상금 받기',
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="sjce-home">
      <div className="sjce-home-container">
        <div className="sjce-home-header">
          <img
            className="sjce-home-emblem"
            src="https://www.sejong.ac.kr/_res/sejong/kor/img/intro/img-ui-logo.png"
            alt="세종대학교 앰블럼"
          />
          <p className="sjce-home-univ">세종대학교 컴퓨터공학과</p>
          <h1>동문회</h1>
        </div>

        <div className="sjce-service-list">
          {SERVICE_LIST.map((svc) => (
            <button
              key={svc.id}
              className="sjce-service-card"
              onClick={() => navigate(svc.path)}
            >
              <span className="sjce-card-icon">{svc.icon}</span>
              <div className="sjce-card-body">
                <h2>
                  {svc.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && svc.title.includes('\n') && <br />}
                    </React.Fragment>
                  ))}
                </h2>
                {svc.desc && <p>{svc.desc}</p>}
              </div>
              <span className="sjce-card-arrow">→</span>
            </button>
          ))}
        </div>

        <p className="sjce-home-footer">made by jwkim1001</p>
      </div>
    </div>
  );
}
