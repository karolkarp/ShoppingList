import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Container, Text, Content,  Header, Footer, FooterTab, Button } from 'native-base';
import SwitchLists from '../common/SwitchLists';

interface Props{
	navigation: {navigate:object};
}
class Archives extends Component< Props> {
	public render(): React.ReactNode {
		const { navigation : { navigate } } = this.props;
		return (
			<Container>
				<Header />
				<Content />
				<SwitchLists />
			</Container>
		);
	}
}
export default withNavigation(Archives);
