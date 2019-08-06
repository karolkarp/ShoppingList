import React, { Component } from 'react';
import { View, FlatList, TouchableHighlight } from 'react-native';
import {
	withNavigation,
	NavigationParams,
	NavigationScreenProp,
	NavigationState
} from 'react-navigation';
import { Container, Content, Button, Form, Item, Label, Input, Icon, Text  } from 'native-base';
import SwitchLists from '../common/SwitchLists';
import {connect} from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/mapToProps';
import PurchaseListItem from './PurchaseListItem';
import AppHeader from '../common/AppHeader';

interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
	purchases: {shopLists: object[], addNew:boolean, temporaryList: string[]};
	setShopLists: ()=>{};
	setTemporaryList: ()=>{};
}
interface State {
	form: {listName: string, listElement: string};
}

class Details extends Component<Props, State> {
	public constructor(props){
		super(props);
		this.state = {
			form: {
				listName: '',
				listElement: '',
			},
		};
      
		this.handleAddElement = this.handleAddElement.bind(this);
		// this.handleInput = this.handleInput.bind(this);
	}
	public componentDidMount():void{
		const { navigation:{ state: { params } } } = this.props;
		if(params){
			console.log('podano parametr:', params);
		}
	}
   
	public handleAddList():void{
		const { setShopLists } = this.props;
		const { form } = this.state;
		setShopLists();
		form.listElement = '';
		this.setState({ form });
	}
   
	private handleInput(name:string, value:string):void {
		const { form } = this.state;
		form[name] = value;
		this.setState({ form });
	}
   
	private handleAddElement():void {
		const { setTemporaryList } = this.props;
		const { form: { listElement } } = this.state;
      
		setTemporaryList(listElement);
	}

	public render():React.ReactNode {
		const { purchases: { addNew, temporaryList } } = this.props;
		const { form: { listElement } } = this.state;
		return (
   		<Container>
				<AppHeader title="Details"/>
				<Content style={{flex:1}}>
					
					<Form>
						{addNew &&
               	<Item floatingLabel>
               		<Label>Provide list name</Label>
               		<Input onChangeText={(value:string):void => this.handleInput('listName', value)}/>
               	</Item>
						}
						<View style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'row', flexWrap:'nowrap'}}>
							<Item style={{flex:4}} floatingLabel>
								<Label>Provide list element</Label>
								<Input value={listElement} onChangeText={(value:string):void => this.handleInput('listElement', value)}/>
							</Item>
							<TouchableHighlight onPress={this.handleAddElement} style={{flex:2, display:'flex', alignItems:'center', justifyContent:'center' }}>
								<Icon style={{color:'green'}} type="SimpleLineIcons" name='plus'></Icon>
							</TouchableHighlight>
						</View>
					</Form>

					<FlatList
						data={temporaryList}
						keyExtractor={(item, index) => index}
						renderItem={({item}) => <PurchaseListItem item={item}/> }
					/>

					<Button onPress={this.handleAddList} success style={{alignItems:'center', justifyContent:'center', padding:5, margin:10}}>
						{/* <Icon type="SimpleLineIcons"  name='plus' /> */}
						<Text>Done</Text>
					</Button>
				</Content>
				<SwitchLists />
			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Details));
