import React from 'react';
import {
	withNavigation,
	NavigationParams,
	NavigationScreenProp,
	NavigationState
} from 'react-navigation';
import { Text, Footer, FooterTab, Button } from 'native-base';

interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

function SwitchLists(props: Props): React.SFCElement<Props> {

	const { navigation } = props;

	return (
		<React.Fragment>
   			<Footer>
   				<FooterTab>
					<Button onPress={():boolean=>navigation.navigate('Home')}>
						<Text>Lista</Text>
					</Button>
					<Button onPress={():boolean=>navigation.navigate('Archives')}>
						<Text>Archiwum</Text>
					</Button>
				</FooterTab>
			</Footer>
		</React.Fragment>
	);

}


export default withNavigation(SwitchLists); 