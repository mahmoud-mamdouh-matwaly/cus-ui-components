export type DateRange = {
  from: number | string | Date;
  to: number | string | Date;
};

export type Range = {
  startDate: Date | undefined;
  endDate: Date | undefined;
  key: string | undefined;
};

export type DateActions = {
  text: string;
  data: {
    from: number | string | Date;
    to: number | string | Date;
  };
};

export type Props = {
  dateRange: DateRange;
  handelUpdateDate: (range: { from: string; to: string }) => void;
};
