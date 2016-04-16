'use strict';

import React, {
	Component,
	StyleSheet,
	Text,
	AppRegistry,
	NavigatorIOS
} from 'react-native';

import { InitialView } from './src/ios/containers/InitialView';

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

class PlushyBeardApp extends Component {
	render() {
		return (
			<NavigatorIOS
				style={styles.container}
	            initialRoute={{
	                title: 'PlushyBeard',
	                component: InitialView
	            }} />
		);
	}
}

AppRegistry.registerComponent('PlushyBeard', () => PlushyBeardApp);