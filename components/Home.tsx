import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Container, Text, Content,  Header, Footer, Icon, Button } from 'native-base';
import SwitchLists from './common/SwitchLists';
interface Props{
	navigation: {navigate:object};
}
class Home extends Component< Props> {
	public render(): React.ReactNode {
		return (
			<Container>
				{/* <Header /> */}
				<Button success style={{alignSelf:'flex-end', padding:5, margin:10}}>
					<Icon type="SimpleLineIcons"  name='plus' />
					<Text>Add</Text>
				</Button>
				<Content />
				<SwitchLists />
			</Container>
		);
	}
}
export default withNavigation(Home);
