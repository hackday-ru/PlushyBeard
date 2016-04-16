'use strict';

import React, { Component, View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
	container: {
		marginTop: 100
	}
});

export default class Home extends Component {
	render() {
		const { homeActions, home } = this.props;
		return (
			<View style={styles.container}>
				<Text>Counter: {home.counter}</Text>
				<TouchableHighlight style={styles.button} onPress={() => homeActions.increment()}>
					<Text>Increment</Text>
				</TouchableHighlight>
			</View>
		);
	}
}