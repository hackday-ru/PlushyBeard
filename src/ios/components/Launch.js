'use strict';

import React, { Component, View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
	container: {
		marginTop: 100
	},
	text: {
		flex: 4
	},
	button: {
		flex: 1
	}
});

export default class Launch extends Component {
	render() {
		const { actions } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Launch screen</Text>
				<TouchableHighlight style={styles.button} onPress={actions.routes.home()}>
					<Text>Go to home</Text>
				</TouchableHighlight>
			</View>
		);
	}
}