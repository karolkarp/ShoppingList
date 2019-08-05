import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';

const MainNavigator = createStackNavigator({
	Home:  Home,
},
{
	initialRouteName: 'Home',
	headerMode:'none'
}
);

const App = createAppContainer(MainNavigator);

export default App;