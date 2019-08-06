import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';
import Archives from './list/Archives';
import Details from './list/Details';

const MainNavigator = createStackNavigator({
	Home:  Home,
	Archives:  Archives,
	Details:  Details,
},
{
	initialRouteName: 'Home',
	headerMode:'none'
}
);

const App = createAppContainer(MainNavigator);

export default App;