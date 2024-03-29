import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';

import HeaderSkew from '@/components/HeaderSkew';
import { EMealScheduleStepKey } from '@/pages/MealScheduleConfig/MealScheduleConfig.enums';
import MealScheduleEmpty from '@/containers/MealScheduleEmpty';
import BodyInformationForm from '@/containers/BodyInformationForm';
import BodyStatusForm from '@/containers/BodyStatusForm';
import MealPackage from '@/containers/MealPackage';
import MealScheduleOverview from '@/containers/MealScheduleOverview';
import { scrollToTop } from '@/utils/functions';
import MealPackageDetail from '@/containers/MealPackageDetail';
import { LayoutPaths, Paths } from '@/pages/routers';

import { TDataGlobalStep } from './MealScheduleConfig.types';
import './MealScheduleConfig.scss';

const MealScheduleConfig: React.FC = () => {
  const [step, setStep] = useState<EMealScheduleStepKey>(EMealScheduleStepKey.REGISTER);
  const [dataGlobalStep, setDataGlobalStep] = useState<TDataGlobalStep>({});

  const handleBackStep = (): void => {
    switch (step) {
      case EMealScheduleStepKey.MEAL_SCHEDULE_OVERVIEW:
        setStep(EMealScheduleStepKey.MEAL_PACKAGE);
        break;
      case EMealScheduleStepKey.MEAL_PACKAGE:
        setStep(EMealScheduleStepKey.BODY_STATUS);
        break;
      case EMealScheduleStepKey.BODY_STATUS:
        setStep(EMealScheduleStepKey.BODY_INFORMATION);
        break;
      case EMealScheduleStepKey.BODY_INFORMATION:
        setStep(EMealScheduleStepKey.REGISTER);
        break;
      case EMealScheduleStepKey.MEAL_PACKAGE_DETAIL:
        setStep(EMealScheduleStepKey.MEAL_PACKAGE);
        break;
      default:
        break;
    }
  };

  const handleNextStep = (): void => {
    switch (step) {
      case EMealScheduleStepKey.REGISTER:
        setStep(EMealScheduleStepKey.BODY_INFORMATION);
        break;
      case EMealScheduleStepKey.BODY_INFORMATION:
        setStep(EMealScheduleStepKey.BODY_STATUS);
        break;
      case EMealScheduleStepKey.BODY_STATUS:
        setStep(EMealScheduleStepKey.MEAL_PACKAGE);
        break;
      case EMealScheduleStepKey.MEAL_PACKAGE:
      case EMealScheduleStepKey.MEAL_PACKAGE_DETAIL:
        setStep(EMealScheduleStepKey.MEAL_SCHEDULE_OVERVIEW);
        break;
      case EMealScheduleStepKey.MEAL_SCHEDULE_OVERVIEW:
        navigate(`${LayoutPaths.Admin}${Paths.MealSchedule}`);
        break;
      default:
        break;
    }
  };

  const handleClickMealPackageDetail = (idPackMeal: string): void => {
    setStep(EMealScheduleStepKey.MEAL_PACKAGE_DETAIL);
    setDataGlobalStep({ ...dataGlobalStep, idPackMeal });
  };

  const renderSectionByStep = (): React.ReactNode => {
    switch (step) {
      case EMealScheduleStepKey.REGISTER:
        return <MealScheduleEmpty onNext={handleNextStep} />;
      case EMealScheduleStepKey.BODY_INFORMATION:
        return <BodyInformationForm onBack={handleBackStep} onNext={handleNextStep} />;
      case EMealScheduleStepKey.BODY_STATUS:
        return (
          <BodyStatusForm
            onBack={handleBackStep}
            onNext={(values): void => {
              setDataGlobalStep({ ...dataGlobalStep, ...values });
              handleNextStep();
            }}
          />
        );
      case EMealScheduleStepKey.MEAL_PACKAGE:
        return (
          <MealPackage
            dataGlobalStep={dataGlobalStep}
            onBack={handleBackStep}
            onNext={handleNextStep}
            onClickDetail={handleClickMealPackageDetail}
          />
        );
      case EMealScheduleStepKey.MEAL_PACKAGE_DETAIL:
        return (
          <MealPackageDetail
            dataGlobalStep={dataGlobalStep}
            id={dataGlobalStep.idPackMeal}
            onBack={handleBackStep}
            onNext={handleNextStep}
          />
        );
      case EMealScheduleStepKey.MEAL_SCHEDULE_OVERVIEW:
        return <MealScheduleOverview onBack={handleBackStep} onNext={handleNextStep} />;

      default:
        return <></>;
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [step]);

  return (
    <div className="MealScheduleConfig style-container">
      <HeaderSkew title="Lịch Ăn Uống" />

      <div className="MealScheduleConfig-main">{renderSectionByStep()}</div>
    </div>
  );
};

export default MealScheduleConfig;
