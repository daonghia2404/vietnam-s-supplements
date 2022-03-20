import React from 'react';

import './RankPointsHistory.scss';

const RankPointsHistory: React.FC = () => {
  return (
    <div className="RankPointsHistory">
      {[1, 2, 3].map((item) => (
        <div key={item} className="RankPointsHistory-item flex items-end justify-between">
          <div className="RankPointsHistory-item-col">
            <div className="RankPointsHistory-text bold">Đổi 1 lượt quay</div>
            <div className="RankPointsHistory-text error">-1000 điểm</div>
          </div>
          <div className="RankPointsHistory-item-col">
            <div className="RankPointsHistory-text">08:00 - 20/11/2021</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RankPointsHistory;
