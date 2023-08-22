import React, { useState, useRef, useEffect } from 'react';
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import { addDays, formatDistance } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import CalendarIcon from './images/calendar-icon.svg';

import useClickOutside from '../../hooks/useClickOutside';
import { dateActions, formatDate, dataUiPattern, datePattern, initialState } from './helper';
import './style.css';

import { Props, Range, DateActions } from './Date.types';

const DatePicker = (props: Props) => {
  const { handelUpdateDate, dateRange } = props;

  const calendarRef = useRef<HTMLDivElement>(null);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [dateDynamic, setDateDynamic] = useState<DateActions>(dateActions[3]);
  const [date, setDate] = useState<Range[]>([initialState]);

  useEffect(() => {
    if (dateRange) {
      const today = new Date().setHours(0, 0, 0, 0);
      const convertDateFrom = new Date(dateRange?.from).setHours(0, 0, 0, 0);
      const getDistanceBetweenDate = formatDistance(convertDateFrom, today);

      const getDateActionsIndex = dateActions.find(
        (item: DateActions) => item.data.from === +getDistanceBetweenDate.split(' ')[0]
      );
      if (getDateActionsIndex || getDistanceBetweenDate.includes('minute')) {
        setDateDynamic(getDateActionsIndex || dateActions[0]);
      } else {
        setDateDynamic(dateActions[3]);
      }

      setDate([
        {
          startDate: new Date(dateRange?.from),
          endDate: new Date(dateRange?.to),
          key: 'selection',
        },
      ]);
    } else {
      setDate([initialState]);
      setDateDynamic(dateActions[3]);
    }
  }, [dateRange]);

  useEffect(() => {
    setDate([initialState]);
    setDateDynamic(dateActions[3]);
  }, []);

  useClickOutside(
    calendarRef,
    () => {
      setIsMenuOpened(false);
      setDate(date);
      setDateDynamic(dateDynamic);
    },
    isMenuOpened
  );

  const handleDate = (rang: RangeKeyDict) => {
    const data = {
      startDate: rang.selection.startDate,
      endDate: rang.selection.endDate,
      key: rang.selection.key,
    };
    setDate([data]);
    setDateDynamic(dateActions[3]);
  };

  const applyDate = () => {
    setIsMenuOpened(false);
    if (date[0] && date[0].endDate && date[0].startDate) {
      handelUpdateDate({
        from: formatDate(date[0].startDate, datePattern),
        to: formatDate(date[0].endDate, datePattern),
      });
    }
  };

  const updateDynamic = (index: number) => {
    const convertDate = addDays(new Date(), -dateActions[index].data.from);
    if (date[0] && date[0].endDate && date[0].startDate) {
      setDate([
        {
          ...date[0],
          startDate: convertDate,
        },
      ]);
    }
    setDateDynamic(dateActions[index]);
  };

  const getDateRangeDisplay = () => {
    return (
      <div
        data-testid="label"
        className="openerWrapper"
        onClick={() => setIsMenuOpened((isMenuOpened: boolean) => !isMenuOpened)}
      >
        <>
          {dateDynamic?.text && dateDynamic.text}
          {!dateDynamic?.text && (
            <>
              {date[0] && date[0]?.startDate && formatDate(date[0]?.startDate, dataUiPattern)}
              <span className="arrowIcon">-</span>
              {date[0] && date[0]?.endDate && formatDate(date[0]?.endDate, dataUiPattern)}
            </>
          )}
        </>

        <img src={CalendarIcon} alt="" />
      </div>
    );
  };

  return (
    <div className="datePickerWrapper" data-testid="datePickerFilters">
      <div>{getDateRangeDisplay()}</div>
      {isMenuOpened && (
        <div className="calendarWrapper" ref={calendarRef}>
          <div className="upperContainer">
            {dateActions.map((action, index) => (
              <div
                data-testid={action.text.replace(/\s+/g, '')}
                className="dateActionButton"
                key={action.text}
                onClick={() => updateDynamic(index)}
              >
                {action.text}
              </div>
            ))}
          </div>

          <DateRangePicker
            ranges={date}
            onChange={(item: RangeKeyDict) => handleDate(item)}
            monthDisplayFormat="MMMM yyyy"
            moveRangeOnFirstSelection={true}
            fixedHeight={true}
            maxDate={new Date()}
            months={2}
            direction="horizontal"
          />
          <div className="bottomContainer">
            <div data-testid="applyDate" className="applyButton" onClick={applyDate}>
              Apply
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { DatePicker };
