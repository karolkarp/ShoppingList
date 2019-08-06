import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import {
	withNavigation,
	NavigationParams,
	NavigationScreenProp,
	NavigationState
} from 'react-navigation';
import { Container, Content, Button } from 'native-base';
import SwitchLists from '../common/SwitchLists';
import {connect} from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/mapToProps';
import PurchaseListItem from './PurchaseListItem';
import AppHeader from '../common/AppHeader';

interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class Details extends Component<Props> {

	public render():React.ReactNode {
		return (
   		<Container>
				<AppHeader title="Archive shop list"/>
				<Content>
					<FlatList
						
						data={[
							{key: 'Devin'},
							{key: 'Jackson'},
							{key: 'James'},
							{key: 'Joel'},
							{key: 'John'},
							{key: 'Jillian'},
							{key: 'Jimmy'},
							{key: 'Julie'},
						]}
						keyExtractor={(item, index) => item.key}
						renderItem={({item}) => <PurchaseListItem item={item.key}/> }
					/>
				</Content>
				<SwitchLists />
			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Details));
