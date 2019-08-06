import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import {
	withNavigation,
	NavigationParams,
	NavigationScreenProp,
	NavigationState
} from 'react-navigation';
import { Container, Text, Content,  Header, Footer, Icon, Button } from 'native-base';
import SwitchLists from './common/SwitchLists';
import AppHeader from './common/AppHeader';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../store/mapToProps';
interface Props{
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
class Home extends Component< Props> {
	public constructor(props: Props){
		super(props);
		this.handleAddList = this.handleAddList.bind(this);
	}

	public handleAddList():void{
		const { navigation } = this.props;
		navigation.navigate('Details');
	}

	public render(): React.ReactNode {
		return (
			<Container>
				<AppHeader title="Shop List"/>
				<Button onPress={this.handleAddList} success style={{alignSelf:'flex-end', padding:5, margin:10}}>
					<Icon type="SimpleLineIcons"  name='plus' />
					<Text>Add</Text>
				</Button>
				<Content />
				<SwitchLists />
			</Container>
		);
	}
}
export default connect( mapStateToProps, mapDispatchToProps )(withNavigation(Home));
