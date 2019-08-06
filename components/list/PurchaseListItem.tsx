import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Button, Text, Icon } from 'native-base';

interface Props {
	item:string;
}

function PurchaseListItem(props:Props):React.ReactNode{

	const { item } = props;

	const _onPress = ():void => {
		console.log('pressed');
	};
   
	return(
		<TouchableHighlight style={{display:'flex', alignItems:'center', justifyContent:'center', height:30}}
			onPress={() => _onPress(item)}
		>
			<Text>{item}</Text>
		</TouchableHighlight>
	);

}
export default PurchaseListItem;
