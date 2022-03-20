import React from 'react';

import Icon, { EIconName, EIconColor } from '@/components/Icon';

const RankReward: React.FC = () => {
  return (
    <div className="RankReward">
      <div className="Rank-group">
        <div className="Rank-subtitle">Thưởng hạng hiện tại</div>

        {[1, 2, 3, 4, 5].map((item) => (
          <div className="Rank-gift flex" key={item}>
            <Icon name={EIconName.Gift} color={EIconColor.BUDDHA_GOLD} />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        ))}
      </div>

      <div className="Rank-group">
        <div className="Rank-subtitle">Thưởng hạng tiếp theo</div>

        {[1, 2, 3, 4, 5].map((item) => (
          <div className="Rank-gift flex" key={item}>
            <Icon name={EIconName.Gift} color={EIconColor.BUDDHA_GOLD} />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankReward;
