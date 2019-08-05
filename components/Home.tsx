import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Container, Text, Content,  Header, Footer, FooterTab, Button } from 'native-base';
import SwitchLists from './common/SwitchLists';
interface Props{
	navigation: {navigate:object};
}
class Home extends Component< Props> {
	public render(): React.ReactNode {
		return (
			<Container>
				<Header />
				<Content />
				<SwitchLists />
			</Container>
		);
	}
}
export default withNavigation(Home);
