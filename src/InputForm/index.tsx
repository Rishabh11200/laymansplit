import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {person} from '../Constants/types';

interface InputFormProps {
  onAddPerson: (person: person) => void;
  clearAll: () => void;
}
const InputForm: React.FC<InputFormProps> = ({onAddPerson, clearAll}) => {
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const handleAddPerson = () => {
    if (name && amount) {
      onAddPerson({name: name, amount: parseFloat(amount)});
      setName('');
      setAmount('');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.insideView}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={styles.input}
        />
        <View style={styles.btnView}>
          <Button title="Add Person" onPress={handleAddPerson} />
          <Button title="Clear" onPress={clearAll} />
        </View>
      </View>
    </View>
  );
};

export default InputForm;
