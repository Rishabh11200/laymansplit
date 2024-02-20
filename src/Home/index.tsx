import React, {useState, useMemo} from 'react';
import {SafeAreaView, ScrollView, Vibration, Text} from 'react-native';
import InputForm from '../InputForm';
import {splitFunction} from '../Constants/splitFunction';
import SplitView from '../SplitView';
import {person} from '../Constants/types';

const Home = () => {
  const [peopleList, setPeopleList] = useState<person[]>([]);

  const {splitDetails, avgPerPerson, totalPaidByPerson, debtInfo} =
    useMemo(() => {
      if (peopleList.length > 0) {
        return splitFunction(peopleList);
      } else {
        return {
          splitDetails: [],
          avgPerPerson: 0,
          totalPaidByPerson: {},
          debtInfo: [],
        };
      }
    }, [peopleList]);

  const handleAddPerson = (person: person) => {
    Vibration.vibrate(100);
    setPeopleList([...peopleList, person]);
  };

  const clearAll = () => {
    Vibration.vibrate(100);
    setPeopleList([]);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <InputForm onAddPerson={handleAddPerson} clearAll={clearAll} />
        {peopleList.length > 0 ? (
          <SplitView
            splitResult={splitDetails}
            avg={avgPerPerson}
            totalByPerson={totalPaidByPerson}
            debtInfo={debtInfo}
          />
        ) : (
          <Text style={{textAlign: 'center', marginTop: 20}}>
            {`Add the person's name with the amount! (Equal splits only!)`}
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
