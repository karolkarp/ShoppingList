/* eslint-disable @typescript-eslint/no-use-before-define */
/**
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Root } from 'native-base';
import Routes from './components/Routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';


const App = (): ReactNode  => {
	return (
		<SafeAreaView style={styles.SafeAreaView}>
			<PersistGate loading={null} persistor={persistor}>
				<Provider store={store}>
					<Root>
						<Routes />
					</Root>
				</Provider>
			</PersistGate>
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	SafeAreaView: {
		flex: 1,
	},
});
