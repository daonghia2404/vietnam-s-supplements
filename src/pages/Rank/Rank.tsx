import React, { useState } from 'react';

import HeaderSkew from '@/components/HeaderSkew';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import RankReward from '@/pages/Rank/RankReward';

import './Rank.scss';
import RankExchangePoints from '@/pages/Rank/RankExchangePoints';
import RankPointsHistory from '@/pages/Rank/RankPointsHistory';
import { EKeyTabRank } from '@/pages/Rank/Rank.enums';
import { dataTabsRank } from '@/pages/Rank/Rank.data';

const Rank: React.FC = () => {
  const [activeKeyTabRank, setActiveKeyTabRank] = useState<EKeyTabRank>(EKeyTabRank.REWARD);

  const handleChangeKeyTabRank = (key: EKeyTabRank): void => {
    setActiveKeyTabRank(key);
  };

  const renderSectionTabRank = (): React.ReactNode => {
    switch (activeKeyTabRank) {
      case EKeyTabRank.REWARD:
        return <RankReward />;
      case EKeyTabRank.EXCHANGE_POINTS:
        return <RankExchangePoints />;
      case EKeyTabRank.HISTORY_POINT:
        return <RankPointsHistory />;

      default:
        return <></>;
    }
  };

  return (
    <div className="Rank style-container">
      <HeaderSkew title="Hạng của bạn" />

      <div className="Rank-main">
        <div className="Rank-card">
          <div className="Rank-card-header flex justify-between">
            <div className="Rank-card-header-item flex items-center">
              <Icon name={EIconName.Medal} color={EIconColor.BUDDHA_GOLD} />
              Hạng 1
            </div>
            <div className="Rank-card-header-item flex items-center">
              100 <span>điểm</span>
            </div>
          </div>
          <div className="Rank-card-description">Bạn cần 1.000 điểm tích luỹ để nhận thêm ưu đãi từ hạng tiếp theo</div>
          <div className="Rank-card-footer flex justify-between flex-wrap">
            <div className="Rank-card-footer-item">Tiến độ</div>
            <div className="Rank-card-footer-item">700 / 1000 điểm</div>
            <div className="Rank-card-footer-process">
              <div className="Rank-card-footer-process-bar" />
            </div>
          </div>
        </div>

        <div className="Rank-tabs flex justify-between">
          {dataTabsRank.map((item) => (
            <div key={item.value} className="Rank-tabs-item">
              <Button
                size="small"
                title={item.label}
                shadow={false}
                type={item.value === activeKeyTabRank ? 'link' : undefined}
                onClick={(): void => handleChangeKeyTabRank(item.value)}
              />
            </div>
          ))}
        </div>

        {renderSectionTabRank()}
      </div>
    </div>
  );
};

export default Rank;
