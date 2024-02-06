import {StyleSheet} from 'react-native';
import Colors from '../Constants/Colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'flex-start',
  },
  insideView: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: Colors.Gray,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  btnView: {flexDirection: 'row', justifyContent: 'space-evenly'},
});
