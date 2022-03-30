import React from 'react';
import { useSelector } from 'react-redux';

import Icon, { EIconName, EIconColor } from '@/components/Icon';
import { TRootState } from '@/redux/reducers';

const RankReward: React.FC = () => {
  const bonusState = useSelector((state: TRootState) => state.rankReducer.bonus);
  const nextRankLevelInfo = bonusState?.nextLevelBonus?.find((item) => item.rank === bonusState?.rank + 1);

  return (
    <div className="RankReward">
      {/* <div className="Rank-group">
        <div className="Rank-subtitle">Thưởng hạng hiện tại</div>

        {[1, 2, 3, 4, 5].map((item) => (
          <div className="Rank-gift flex" key={item}>
            <Icon name={EIconName.Gift} color={EIconColor.BUDDHA_GOLD} />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        ))}
      </div> */}

      {nextRankLevelInfo && (
        <div className="Rank-group">
          <div className="Rank-subtitle">Thưởng hạng tiếp theo</div>

          <div className="Rank-gift flex items-start">
            <Icon name={EIconName.Gift} color={EIconColor.BUDDHA_GOLD} />
            {nextRankLevelInfo.message}
          </div>
        </div>
      )}
    </div>
  );
};

export default RankReward;
