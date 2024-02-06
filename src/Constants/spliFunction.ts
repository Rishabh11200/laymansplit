import {SplitResult, person} from './types';

export function splitFunction(objectsPaid: person[]): SplitResult {
  const amountsPaid = objectsPaid.map(person => person.amount);
  const totalPaid = amountsPaid.reduce((acc, current) => acc + current, 0);
  const numPeople = amountsPaid.length;

  if (numPeople <= 0) {
    throw new Error('At least one person should have paid an amount.');
  }

  const averageShare = totalPaid / numPeople;
  const remainingAmounts = objectsPaid.map(person => {
    const remaining = parseFloat((averageShare - person.amount).toFixed(2));
    return {name: person.name, remainingAmount: remaining};
  });

  const totalPaidByPerson: {[name: string]: number} = {};
  objectsPaid.forEach(person => {
    if (!totalPaidByPerson[person.name]) {
      totalPaidByPerson[person.name] = 0;
    }
    totalPaidByPerson[person.name] += person.amount;
  });

  return {
    avgPerPerson: averageShare,
    splitDetails: remainingAmounts,
    totalPaidByPerson,
  };
}
