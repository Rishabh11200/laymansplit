import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';

type AppStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{title: 'Split'}} component={Home} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
