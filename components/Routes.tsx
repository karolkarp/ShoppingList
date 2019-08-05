import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';
import Archives from './list/Archives';

const MainNavigator = createStackNavigator({
	Home:  Home,
	Archives:  Archives,
},
{
	initialRouteName: 'Home',
	headerMode:'none'
}
);

const App = createAppContainer(MainNavigator);

export default App;