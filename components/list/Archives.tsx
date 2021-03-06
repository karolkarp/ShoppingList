import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import {
	withNavigation,
	NavigationParams,
	NavigationScreenProp,
	NavigationState
} from 'react-navigation';
import { Container, Content} from 'native-base';
import SwitchLists from '../common/SwitchLists';
import {connect} from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/mapToProps';
import PurchaseListItem from './PurchaseListItem';
import AppHeader from '../common/AppHeader';

interface Props{
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
	shopArchivedLists: object[];
}
class Archives extends Component< Props> {


	public render(): React.ReactNode {
		const { navigation : { navigate }, shopArchivedLists } = this.props;
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
export default connect( mapStateToProps, mapDispatchToProps )(withNavigation(Archives));

const styles = StyleSheet.create({
	container: {
	 flex: 1,
	 paddingTop: 22
	},
	item: {
	  padding: 10,
	  fontSize: 18,
	  height: 44,
	},
});
 