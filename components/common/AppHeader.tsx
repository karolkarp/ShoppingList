import React from 'react';
import {Body, Title, Header } from 'native-base';

interface Props {
	title:string;
}

function AppHeader(props:Props):React.SFCElement<Props> {

	const { title } = props;
   
	return (
		<Header>
			<Body>
				<Title>{title}</Title>
			</Body>
		</Header>
	);
}
export default AppHeader;
