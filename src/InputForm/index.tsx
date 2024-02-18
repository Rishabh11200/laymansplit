import {View, Text, TextInput, Button, Alert, ButtonProps, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {person} from '../Constants/types';
import Colors from '../Constants/Colors';

interface InputFormProps {
  onAddPerson: (person: person) => void;
  clearAll: () => void;
}
const InputForm: React.FC<InputFormProps> = ({onAddPerson, clearAll}) => {
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [amountError, setAmountError] = useState<boolean>(false);

  const numericRegEx = /^[0-9 .]*$/;

  const nameInputRef = useRef<TextInput>(null);
  const amtInputRef = useRef<TextInput>(null);

  const handleAddPerson = () => {
    if (name && amount) {
      onAddPerson({name: name, amount: parseFloat(amount)});
      setName('');
      setAmount('');
    }
  };

  const handleInputChange = (str: string) => {
    if (numericRegEx.test(str)) {
      setAmount(str);
      setAmountError(false);
    } else {
      setAmountError(true);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.insideView}>
        <TextInput
          placeholder="Name"
          placeholderTextColor={Colors.Gray}
          value={name}
          onChangeText={setName}
          style={styles.input}
          onSubmitEditing={() => {
            if (amtInputRef.current) {
              amtInputRef.current.focus();
            }
          }}
          returnKeyType="next"
          ref={nameInputRef}
        />
        <TextInput
          placeholder="Amount"
          placeholderTextColor={Colors.Gray}
          value={amount}
          onChangeText={dataStr => handleInputChange(dataStr)}
          keyboardType="numeric"
          style={[
            styles.input,
            amountError ? {borderColor: Colors.red} : undefined,
          ]}
          onSubmitEditing={handleAddPerson}
          ref={amtInputRef}
        />
        <View style={styles.btnView}>
        <TouchableOpacity style={styles.button} onPress={handleAddPerson}>
          <Text style={styles.buttonText}>{" + Add Person"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: Colors.lightRed}]} onPress={clearAll}>
          <Text style={styles.buttonText}>{" X Clear"}</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InputForm;
