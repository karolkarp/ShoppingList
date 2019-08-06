import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Container, Text, Content,  Header, Footer, FooterTab, Button } from 'native-base';

interface Props {
	navigation: {navigate:object}
}

function SwitchLists(props: Props): React.ReactNode {

	const {navigate} = props.navigation;

	return (
		<React.Fragment>
   			<Footer>
   				<FooterTab>
					<Button onPress={()=>navigate('Home')}>
						<Text>Lista</Text>
					</Button>
					<Button onPress={()=>navigate('Archives')}>
						<Text>Archiwum</Text>
					</Button>
				</FooterTab>
			</Footer>
		</React.Fragment>
	);

}


export default withNavigation(SwitchLists); 