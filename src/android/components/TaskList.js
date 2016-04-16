
'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    Image,
    ListView,
    View
} from 'react-native';


var data = [
        {
        	label: 'Choosing The Perfect',
        	status: 0        	
        },
        {
        	label: 'Cooking For One',
        	status: 0        	
        }
    ];

export default class TaskList extends Component {

	componentWillMount(){
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

		this.setState({
			dataSource:  ds.cloneWithRows(data),
		});
	}

	closeTask(k){
		//lert('closeTask');
		console.warn('closeTask', k)
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
                <Text style={styles.taskCheckButton} onPress={(item) => this.closeTask(item)}>                    
					{'close'}
                </Text>
			</View>
		)
	}  

    render() {    	
        return (
            <View style={styles.block}>
            	<View style={styles.imageBlock}>
            		<Image source={require('../../images/ui_boy.png')} style={styles.image}></Image>
            	</View>
         		<Text style={styles.mediumSpan}>
                    Еще {data.length} задач(и)! 
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

	layout: {
		paddingTop: 30,
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'rgb(74, 134, 204)',
		color: '#ffffff'
	},

	block: {
		alignItems: 'stretch',
	},

    h1: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        color: '#ffffff'
    },

    imageBlock: {		
		alignItems: 'center',
		marginBottom: 30,
    },

    image: {
    	alignItems: 'center',
		width: 110, 
		height: 200
    },

    mediumSpan: {
        fontSize: 16,
        textAlign: 'center',
        color: '#ffffff',
        marginBottom: 10
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
    	color: '#ffffff',
    	marginBottom: 5
    },

    taskNum: {
    	color: '#ffffff',
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





