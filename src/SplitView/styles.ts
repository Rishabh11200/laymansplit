import {StyleSheet} from 'react-native';
import Colors from '../Constants/Colors';

export default StyleSheet.create({
  container: {
    margin: 20,
  },
  personContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  underlineMainView: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    paddingBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  owedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  detailsText: {
    fontSize: 16,
    color: Colors.blue,
  },
  NoText: {
    fontSize: 20,
    color: Colors.red,
    textAlign: 'center',
  },
  averageContainer: {
    marginBottom: 10,
  },
  averageText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
  debtText: {
    color: Colors.black,
    marginStart: 10,
    fontStyle: 'italic',
    marginVertical: 2,
    fontSize: 15,
  },
});
