import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Vibration} from 'react-native';
import InputForm from '../InputForm';
import {splitFunction} from '../Constants/spliFunction';
import SplitView from '../SplitView';
import {SplitResult, finalPerson, person} from '../Constants/types';

const Home = () => {
  const [peopleList, setPeopleList] = useState<person[]>([]);
  const splitResult =
    peopleList.length > 0 ? splitFunction(peopleList).splitDetails : [];
  const avg =
    peopleList.length > 0 ? splitFunction(peopleList).avgPerPerson : 0;
  const totalByPerson =
    peopleList.length > 0 ? splitFunction(peopleList).totalPaidByPerson : {};

  const handleAddPerson = (person: person) => {
    Vibration.vibrate(1000);
    setPeopleList([...peopleList, person]);
  };

  const clearAll = () => {
    Vibration.vibrate(1000);
    setPeopleList([]);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <InputForm onAddPerson={handleAddPerson} clearAll={clearAll} />
        <SplitView
          splitResult={splitResult}
          avg={avg}
          totalByPerson={totalByPerson}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
