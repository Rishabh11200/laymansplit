export type person = {
  name: string;
  amount: number;
};

export type finalPerson = {
  name: string;
  remainingAmount: number;
};

export type debtInfo = {
  from: string;
  to: string;
  amount: number;
};

export type SplitResult = {
  avgPerPerson: number;
  splitDetails: finalPerson[];
  totalPaidByPerson: {[name: string]: number};
  debtInfo: debtInfo[];
};
