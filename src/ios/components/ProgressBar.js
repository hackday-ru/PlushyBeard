'use strict';

import React, {
	Component,
	Animated,
	Easing,
	StyleSheet,
	View
} from 'react-native';

var styles = StyleSheet.create({
	background: {
		backgroundColor: 'rgb(74, 134, 204)',
		height: 5,
		overflow: 'hidden'
	},
	fill: {
		backgroundColor: '#3b5998',
		height: 5
	}
});

export default class ProgressBar extends Component {
	
	constructor(props) {
		super();
		
		this.state = {
			progress: new Animated.Value(props.progress)
		}
	}

	static get defaultProps() {
		return {
			style: styles,
			easing: Easing.inOut(Easing.ease),
			easingDuration: 500
		};
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(this.props.progress);
		if (this.props.progress >= 0 && this.props.progress != prevProps.progress) {
			this.update();
		}
	}

	render() {

		var fillWidth = this.state.progress.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 300]
		});

		return (
			<View style={styles.background}>
				<Animated.View style={[styles.fill, {width: fillWidth}]}/>
			</View>
		);
	}

	update() {
		Animated.timing(this.state.progress, {
			easing: this.props.easing,
			duration: this.props.easingDuration,
			toValue: this.props.progress
		}).start();
	}
}
