import React from 'react';
import moment from 'moment';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactCalendar from 'react-range-calendar';

import { TCalendarProps } from './Calendar.types';

import './Calendar.scss';

const Calendar: React.FC<TCalendarProps> = ({ value = [moment(), moment()], onChange }) => {
  const handleCalendarChange = (minDate: any, maxDate: any): void => {
    onChange?.([minDate, maxDate]);
  };

  return (
    <div className="Calendar">
      <ReactCalendar
        visible
        dateRange={value}
        onDateClick={handleCalendarChange}
        type="free-range"
        disabledColor="rgba(0, 0, 0, 0.05)"
        hoverBackgroundColor="rgba(2, 30, 174, 0.1)"
        weekendsDaysColor="#fff"
        baseColor="#021EAE"
      />
    </div>
  );
};

export default Calendar;
