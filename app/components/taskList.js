
'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    Image,
    ListView,
    View
} from 'react-native';

export default class TaskList extends Component {

	componentWillMount(){

		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

		this.setState({
			dataSource:  ds.cloneWithRows([
		        {
		        	label: 'Choosing The Perfect',
		        	status: 0        	
		        },
		        {
		        	label: 'Cooking For One',
		        	status: 0        	
		        }
	        ]),
		});
	}

	renderRow(item, i, k) {
		return(
			<View style={styles.task}>
				<Text style={styles.taskNum}>                    
					{k-0+1}
                </Text>
				<Text style={styles.taskText}>                    
					{item.label}
                </Text>
                <Text style={styles.taskCheckButton}>                    
					{'close'}
                </Text>
			</View>
		)
	}  

    render() {    	
        return (
            <View style={styles.block}>
            	<Image source={require('../../images/ui_boy1.png')} style={styles.image}></Image>
         		<Text style={styles.mediumSpan}>
                    Еще 5 задач! f gfdg fdgdgfd
                </Text>
            	<ListView 
            		contentContainerStyle={styles.tasks}
					dataSource={this.state.dataSource}
					renderRow={this.renderRow.bind(this)}
			    />
            </View>
        );
    }
}

const styles = StyleSheet.create({

	block: {
		alignItems: 'stretch',
	},

    h1: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        color: '#fff'
    },
    image: {
    	alignItems: 'center',
		width: 110, 
		height: 200,
		marginBottom: 10
    },
    mediumSpan: {
        fontSize: 16,
        textAlign: 'center',
        color: '#fff'
    },

    tasks: {
        //flexDirection: 'column',
        justifyContent: 'space-between', 
        alignItems: 'stretch',
    },

    task: {
    	alignSelf: 'stretch',
    	flexDirection: 'row',
    	justifyContent: 'space-between', 
    	alignItems: 'center',
    	color: '#fff',
    },

    taskNum: {
    	color: '#fff',
    	fontSize: 30,
    	fontWeight: '700'
    },

    taskText: {
    	fontSize: 12,
    	color: '#fff',
    	fontWeight: '100'
    },

    taskCheckButton: {
    	color: '#fff',
    },
});





