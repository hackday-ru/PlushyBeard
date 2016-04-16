'use strict';

import React, { Component, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	text: {
		marginTop: 100
	}
});

export class InitialView extends Component {
	render() {
		return (
			<View>
				<Text style={styles.text}>Initial screen</Text>
			</View>
		);
	}
}