import React, { useEffect, useState } from 'react';

import ImageArrow from '@/assets/images/image-wheel-arrow.png';
import WheelRotationItem from '@/components/WheelRotation/WheelRotationItem';
import { TWheelRotationData, TWheelRotationProps } from '@/components/WheelRotation/WheelRotation.types';

import './WheelRotation.scss';

const WheelRotation: React.FC<TWheelRotationProps> = ({ triggerStart, dataGifts, onFinish }) => {
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [rotateWheel, setRotateWheel] = useState<number>(0);
  const [currentRotate, setCurrentRotate] = useState<number>(0);

  const size = dataGifts.length;
  const rotate = 360 / size;
  const skewY = 90 - rotate;

  const startRotation = (): void => {
    // Đóng nút quay
    setIsRotating(true);

    // Lấy 1 số ngầu nhiên 0 -> 1
    const random = Math.random();

    // Gọi hàm lấy phần thưởng
    const gift = getGift(random);

    // Số vòng quay: 360 độ = 1 vòng (Góc quay hiện tại)
    const countRotate = currentRotate + 360 * 10;
    setCurrentRotate(countRotate);

    // Gọi hàm quay
    rotateStartWheel(countRotate, gift?.index || 0);

    // Show phần thưởng
    handleRotationEnd(gift);
  };

  // Hàm quay vòng quay
  const rotateStartWheel = (rotationValue: number, index: number): void => {
    setRotateWheel(rotationValue - index * rotate - rotate / 2);
  };

  // Hàm lấy phần thưởng
  const getGift = (randomNumber: number): TWheelRotationData => {
    let currentPercent = 0;
    const list: TWheelRotationData[] = [];

    dataGifts.forEach((item, index) => {
      // Cộng lần lượt phần trăm trúng của các phần thưởng
      currentPercent += item.percent;

      // Số ngẫu nhiên nhỏ hơn phần trăm hiện tại thì thêm phần thưởng vào danh sách
      if (randomNumber < currentPercent) {
        list.push({ ...item, index });
      }
    });

    // Phần thưởng đầu tiên trong danh sách là phần thưởng quay được
    return list[0];
  };

  const handleRotationEnd = (gift: TWheelRotationData): void => {
    const timer = setTimeout(() => {
      setIsRotating(false);
      // Show phần thưởng
      onFinish?.(gift);

      clearTimeout(timer);
    }, 7000);
  };

  const handleStart = (): void => {
    !isRotating && startRotation();
  };

  useEffect(() => {
    if (triggerStart) {
      handleStart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerStart]);

  return (
    <div className="WheelRotation">
      <div className="WheelRotation-line2">
        <div className="WheelRotation-line1">
          <span className="WheelRotation-lucky-wheel">
            <span className="WheelRotation-icon-arrow">
              <img src={ImageArrow} alt="arrow" />
            </span>
            <ul
              className="WheelRotation-wheel"
              style={{
                transform: `rotate(${rotateWheel}deg)`,
              }}
            >
              {dataGifts.map((item, index) => (
                <WheelRotationItem key={item.label} index={index} skewY={skewY} rotate={rotate} label={item.label} />
              ))}
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WheelRotation;
