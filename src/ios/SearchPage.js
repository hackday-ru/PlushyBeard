'use strict';

import React, {
	Component,
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	ActivityIndicatorIOS,
	Image,
	AppRegistry,
	NavigatorIOS
} from 'react-native';

const styles = StyleSheet.create({
	description: {
		marginBottom: 20,
		fontSize: 18,
		textAlign: 'center',
		color: '#656565'
	},
	container: {
		padding: 30,
		marginTop: 65,
		alignItems: 'center'
	},
	flowRight: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch'
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	button: {
		height: 36,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#48bbe9',
		borderColor: '#48bbec',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	searchInput: {
		height: 36,
		padding: 4,
		marginRight: 5,
		flex: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48bbec',
		borderRadius: 8,
		color: '#48bbec'
	},
	image: {
		width: 217,
		height: 138
	}
});

function urlForQueryAndPage(key, value, pageNumber) {
	const data = {
		country: 'uk',
		pretty: '1',
		encoding: 'json',
		listing_type: 'buy',
		action: 'search_listing',
		page: pageNumber,
		[ key ]: value
	};

	const queryString =
		Object.keys(data)
			.map(key => `${key}=${encodeURIComponent(data[key])}`)
			.join('&');

	return `http://api.nestoria.co.uk/api?${queryString}`;
}

export class SearchPage extends Component {
	constructor() {
		super();

		this.state = {
			searchString: 'london',
			isLoading: false,
			message: ''
		}
	}

	onSearchTextChanged(event) {
		this.setState({
			searchString: event.nativeEvent.text
		});
	}

	onSearchPressed() {
		const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
		this.setState({isLoading: true});
	}

	render() {
		const spinner =
			this.state.isLoading ?
				<ActivityIndicatorIOS size="large" /> :
				<View />;
		return (
			<View style={styles.container}>
				<Text style={styles.description}>
					Search for houses to buy!
				</Text>
				<Text style={styles.description}>
					Search by place-name, postcode or search near your location.
				</Text>
				<View style={styles.flowRight}>
					<TextInput
						style={styles.searchInput}
						value={this.state.searchString}
						onChange={e => this.onSearchTextChanged(e)}
					    placeholder="Search via name or postcode" />
					<TouchableHighlight style={styles.button} underlayColor="#99d9f4" onPress={() => this.onSearchPressed()}>
						<Text style={styles.buttonText}>Go</Text>
					</TouchableHighlight>
				</View>
				<TouchableHighlight style={styles.button} underlayColor="#99d9f4">
					<Text style={styles.buttonText}>Location</Text>
				</TouchableHighlight>
				<Image source={require('../../Resources/house.png')} style={styles.image} />
				{spinner}
			</View>
		);
	}
}