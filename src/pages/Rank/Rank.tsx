import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import RankReward from '@/pages/Rank/RankReward';
import RankExchangePoints from '@/pages/Rank/RankExchangePoints';
import RankPointsHistory from '@/pages/Rank/RankPointsHistory';
import { EKeyTabRank } from '@/pages/Rank/Rank.enums';
import { dataTabsRank } from '@/pages/Rank/Rank.data';
import { getBonusAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { ERankControllerAction } from '@/redux/actions/rank-controller/constants';
import PageLoading from '@/components/PageLoading';

import './Rank.scss';

const Rank: React.FC = () => {
  const dispatch = useDispatch();
  const [activeKeyTabRank, setActiveKeyTabRank] = useState<EKeyTabRank>(EKeyTabRank.REWARD);

  const bonusState = useSelector((state: TRootState) => state.rankReducer.bonus);
  const getBonusLoading = useSelector((state: TRootState) => state.loadingReducer[ERankControllerAction.GET_BONUS]);

  const nextRankLevelInfo = bonusState?.nextLevelBonus?.find((item) => item.rank === bonusState?.rank + 1);

  const handleChangeKeyTabRank = (key: EKeyTabRank): void => {
    setActiveKeyTabRank(key);
  };

  const caculatorPercentProcess = (): string => {
    if (bonusState?.currentPoint && bonusState?.nextLevelPoint) {
      return `${((bonusState.currentPoint / bonusState.nextLevelPoint) * 100).toFixed(2)}%`;
    }

    return '0%';
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

  const getBonusData = useCallback(() => {
    dispatch(getBonusAction.request());
  }, [dispatch]);

  useEffect(() => {
    getBonusData();
  }, [getBonusData]);

  return (
    <div className="Rank style-container">
      {getBonusLoading ? (
        <PageLoading />
      ) : (
        <>
          <HeaderSkew title="Hạng của bạn" />

          <div className="Rank-main">
            <div className="Rank-card">
              <div className="Rank-card-header flex justify-between">
                <div className="Rank-card-header-item flex items-center">
                  <Icon name={EIconName.Medal} color={EIconColor.BUDDHA_GOLD} />
                  Hạng {bonusState?.rank}
                </div>
                <div className="Rank-card-header-item flex items-center">
                  {bonusState?.currentPoint} <span>điểm</span>
                </div>
              </div>
              <div className="Rank-card-description">
                Bạn cần {nextRankLevelInfo?.gradePoint} điểm tích luỹ để nhận thêm ưu đãi từ hạng tiếp theo
              </div>
              <div className="Rank-card-footer flex justify-between flex-wrap">
                <div className="Rank-card-footer-item">Tiến độ</div>
                <div className="Rank-card-footer-item">
                  {bonusState?.currentPoint} / {bonusState?.nextLevelPoint} điểm
                </div>
                <div className="Rank-card-footer-process">
                  <div className="Rank-card-footer-process-bar" style={{ width: caculatorPercentProcess() }} />
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
        </>
      )}
    </div>
  );
};

export default Rank;
