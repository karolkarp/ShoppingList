import React, { Component, Fragment } from 'react';
import { View, FlatList } from 'react-native';
import {
	withNavigation,
	NavigationParams,
	NavigationScreenProp,
	NavigationState
} from 'react-navigation';
import { Container, Text, Content,  Header, Footer, Icon, Button } from 'native-base';
import SwitchLists from './common/SwitchLists';
import PurchaseListItem from './list/PurchaseListItem';
import AppHeader from './common/AppHeader';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../store/mapToProps';
interface Props{
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
	purchases: {shopLists: object[], addNew:boolean};
	
}
class Home extends Component< Props> {
	public constructor(props: Props){
		super(props);
		this.handleAddList = this.handleAddList.bind(this);
	}

	public handleAddList():void{
		const { addNewList } = this.props;
		addNewList();
	}

	public componentDidUpdate():void{
		const { purchases: { addNew }, navigation } = this.props;

		if(addNew){
			navigation.navigate('Details');
		}
	}

	public render(): React.ReactNode {
		const { purchases:{ shopLists } } = this.props;
		return (
			<Container>
				<AppHeader title="Shop List"/>
				<Button onPress={this.handleAddList} success style={{alignSelf:'flex-end', padding:5, margin:10}}>
					<Icon type="SimpleLineIcons"  name='plus' />
					<Text>Add</Text>
				</Button>
				<View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
					{shopLists.length === 0 &&
						<Text>Any shopping lists yet</Text>
					}
					<FlatList
						data={shopLists}
						keyExtractor={(item):string => item.key}
						renderItem={({item}):React.ReactNode => <PurchaseListItem item={item.key}/> }
					/>
				</View>
				<Content />
				<SwitchLists />
			</Container>
		);
	}
}
export default connect( mapStateToProps, mapDispatchToProps )(withNavigation(Home));
