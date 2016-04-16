
'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

export default class MainLayout extends Component {
  
    render() {

        const { name } = this.props;

        return (
            <View style={styles.block}>
            	<Image source={require('../../images/ui_boy.png')} style={styles.image}></Image>
                <Text style={styles.h1}>
                    Делай реще
                </Text>
                <Text style={styles.mediumSpan}>
                    Агрессивный треккинг
                </Text>
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

	block: {
		alignItems: 'center',
	},
    h1: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        color: '#fff'
    },
    image: {
		width: 110, 
		height: 200,
		marginBottom: 10
    },
    mediumSpan: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff'
    }
});





