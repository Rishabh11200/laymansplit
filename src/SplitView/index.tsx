import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {debtInfo, finalPerson} from '../Constants/types';

interface SplitViewProps {
  splitResult: finalPerson[];
  avg: number;
  totalByPerson: {[name: string]: number};
  debtInfo: debtInfo[];
}

const SplitView: React.FC<SplitViewProps> = ({
  splitResult,
  avg,
  totalByPerson,
  debtInfo,
}) => {
  const renderOwedText = (person: finalPerson) => {
    if (person.remainingAmount < 0) {
      const amountOwed = -person.remainingAmount;
      return (
        <Text style={styles.detailsText}>+ Owes ₹{amountOwed.toFixed(2)}</Text>
      );
    } else if (person.remainingAmount > 0) {
      return (
        <Text style={styles.detailsText}>
          - Borrowed ₹{person.remainingAmount.toFixed(2)}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {splitResult.length > 0 ? (
        <>
          <View style={styles.averageContainer}>
            <Text style={styles.averageText}>
              Total Average per person: ₹{avg.toFixed(2)}
            </Text>
          </View>
          {splitResult.length === 1 ? (
            <Text style={styles.NoText}>
              Add the second person's name with the amount to calculate...
            </Text>
          ) : (
            splitResult.map((person, index) => (
              <View style={styles.underlineMainView} key={`person_${index}`}>
                <View key={index} style={styles.personContainer}>
                  <Text style={styles.name}>{`${person.name} - ₹${
                    totalByPerson[person.name]
                  }`}</Text>
                  <View style={styles.owedContainer}>
                    {renderOwedText(person)}
                  </View>
                </View>
                <View>
                  {debtInfo.map(debts => {
                    if (debts.to === person.name) {
                      console.log(debts, 'bye');
                      return (
                        <>
                          <Text
                            style={
                              styles.debtText
                            }>{`${debts.from} will send ₹${debts.amount}`}</Text>
                        </>
                      );
                    }
                    return null;
                  })}
                </View>
              </View>
            ))
          )}
        </>
      ) : (
        <Text style={styles.NoText}>
          {`Add the person's name with the amount! (Equal splits only!)`}
        </Text>
      )}
    </View>
  );
};

export default SplitView;
