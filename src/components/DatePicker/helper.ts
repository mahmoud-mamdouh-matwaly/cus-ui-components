import { format, addDays } from 'date-fns';

export const datePattern = 'yyyy-MM-dd';
export const dataUiPattern = 'MMM dd,yyyy';

export const formatDate = (date: Date, pattern: string) => {
  return format(date, pattern);
};

export const initialState = {
  startDate: addDays(new Date(), -6),
  endDate: new Date(),
  key: 'selection',
};

export const dateActions = [
  {
    text: 'Today',
    data: {
      from: 0,
      to: 0,
    },
  },
  {
    text: 'Yesterday',
    data: {
      from: 1,
      to: 1,
    },
  },
  {
    text: 'Last 3 Days',
    data: {
      from: 2,
      to: 0,
    },
  },
  {
    text: 'Last 7 Days',
    data: {
      from: 6,
      to: 0,
    },
  },
  {
    text: 'Last 30 Days',
    data: {
      from: 29,
      to: 0,
    },
  },
];
