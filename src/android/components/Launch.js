'use strict';

import React, {
	Component,
	StyleSheet,
	Text,
	Image,
	View,
	TouchableHighlight
} from 'react-native';

export default class Layout extends Component {
	render() {
		const { actions } = this.props;
		return (
			<View style={styles.layout}>
				<Image source={require('../../resources/ui_boy.png')} style={styles.image} />
				<Text style={styles.h1}>
					Делай реще
				</Text>
				<Text style={styles.mediumSpan}>
					Агрессивный треккинг
				</Text>
				<TouchableHighlight style={styles.button} onPress={actions.routes.home()}>
					<Text>Go to home</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	layout: {
		paddingTop: 30,
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'rgb(74, 134, 204)',
		color: '#ffffff'
	},
	h1: {
		fontSize: 34,
		fontWeight: '700',
		textAlign: 'center',
		color: '#fff'
	},
	image: {
		marginTop: 105,
		width: 100,
		height: 170,
		marginBottom: 18
	},
	mediumSpan: {
		fontSize: 19,
		textAlign: 'center',
		color: '#fff'
	},
	button: {
		borderColor: '#fff'
	}
});