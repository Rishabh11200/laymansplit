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
    color: Colors.black,
    borderColor: Colors.Gray,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  btnView: {flexDirection: 'row', justifyContent: 'space-evenly'},
  button: {
    borderColor: Colors.black,
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 20,
    backgroundColor: Colors.cyan,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.black,
  },
});
