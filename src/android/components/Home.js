'use strict';

import React, { Component, View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
	layout: {
		paddingTop: 30,
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'rgb(74, 134, 204)',
		color: '#ffffff'
	},
	counter: {
		marginTop: 100
	}
});

export default class Home extends Component {
	render() {
		const { homeActions, home } = this.props;
		return (
			<View style={styles.layout}>
				<Text style={styles.counter}>Counter: {home.counter}</Text>
				<TouchableHighlight style={styles.button} onPress={() => homeActions.increment()}>
					<Text>Increment</Text>
				</TouchableHighlight>
			</View>
		);
	}
}