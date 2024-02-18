import {SplitResult, debtInfo, finalPerson, person} from './types';

export function splitFunction(objectsPaid: person[]): SplitResult {
  const amountsPaid = objectsPaid.map(person => person.amount);
  const totalPaid = amountsPaid.reduce((acc, current) => acc + current, 0);
  const numPeople = amountsPaid.length;

  if (numPeople <= 0) {
    throw new Error('At least one person should have paid an amount.');
  }

  const averageShare = totalPaid / numPeople;

  const remainingAmounts: finalPerson[] = objectsPaid.map(person => {
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

  let debtInfo: debtInfo[] = [];
  remainingAmounts.forEach(person => {
    if (person.remainingAmount < 0) {
      const oweAmount = Math.abs(person.remainingAmount);
      const payers = remainingAmounts.filter(p => p.remainingAmount > 0);
      let totalAmount = payers.reduce(
        (acc, cur) => acc + cur.remainingAmount,
        0,
      );
      payers.forEach(payer => {
        const ratio = payer.remainingAmount / totalAmount;
        const share = parseFloat((oweAmount * ratio).toFixed(2));
        debtInfo.push({from: payer.name, to: person.name, amount: share});
      });
    }
  });

  return {
    avgPerPerson: averageShare,
    splitDetails: remainingAmounts,
    totalPaidByPerson,
    debtInfo,
  };
}
