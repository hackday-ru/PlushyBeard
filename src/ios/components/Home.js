'use strict';

import React, {
	Component,
	StyleSheet,
	Text,
	Image,
	ListView,
	View,
	ScrollView,
	TouchableHighlight
} from 'react-native';
import ImmutableDataSource from 'react-native-immutable-listview-datasource';
import ProgressBar from './ProgressBar';
import { MAX, MIN } from '../reducers/beardman';

const Row = ({label, isComplete, complete, number}) => {
	const circle =
		isComplete ?
			<TouchableHighlight style={styles.taskCompleteStyles}>
				<View style={styles.taskCompleteInnerStyles}></View>
			</TouchableHighlight> :
			<TouchableHighlight
				style={styles.taskCompleteStyles}
				onPress={() => complete(number)}
				underlayColor="rgb(74, 134, 204)">
				<View></View>
			</TouchableHighlight>;
	return (
		<View style={styles.task}>
			<Text style={styles.taskNum}>
				{number + 1}
			</Text>
			<Text style={styles.taskText}>
				{label}
			</Text>
			{circle}
		</View>
	)
};

const renderRow = (rowData, _, index) => (
	<Row label={rowData.get('label')}
		 complete={rowData.get('complete')}
		 isComplete={rowData.get('isComplete')}
		 number={+index}/>
);

export default class Home extends Component {

	constructor() {
		super();

		this._ds = new ImmutableDataSource();
	}

	componentDidUpdate(){
		this.componentDidMount();
	}

	componentDidMount(){
		if(this.props.beardman.get('hasNewCompletedTask')) {
			setTimeout(() => {
				this.props.beardmanActions.markNewCompletedTask();
			}, 2000);
		}
		if(this.props.beardman.get('hasNewTask')) {
			setTimeout(() => {
				this.props.beardmanActions.markNewTask();
			}, 2000);
		}
	}

	render() {
		const { actions, tasksActions: { completeTask } } = this.props;
		const listSource = this._ds.cloneWithRows(
			this.props.home.get('tasks')
				.map(t => t.set('complete', completeTask)));

		const beardman = this.props.beardman;
		const hasNewTask = beardman.get('hasNewTask'); // => false | true
		const hasNewCompletedTask = beardman.get('hasNewCompletedTask');
		const angryValue = beardman.get('angry');
		const progress = Math.floor((angryValue - MIN) / (MAX - MIN) * 100) / 100;
		const image =
			hasNewCompletedTask || hasNewTask ?
				<View style={styles.imageWrapper}>
					<Image source={require('../../resources/ui_boy_ruki.gif')} style={styles.image}/>
				</View> :
				<View style={styles.imageWrapper}>
					<Image source={require('../../resources/ui_boy.png')} style={styles.image}/>
				</View>;

		const anrgymeter =
			<View style={styles.angrymeterWrapper}>
				<ProgressBar fillStyle={styles.angrymeterFill} backgroundStyle={styles.angrymeterBg} progress={progress} />
			</View>;
		return (
			<View style={styles.layout}>
				{anrgymeter}
				{image}
				<Text style={styles.mediumSpan}>
					Еще {this.props.home.get('tasks').filter(t => t.get('isComplete') === false).size} задач!
				</Text>
				<ScrollView style={styles.tasks}>
					<ListView
						dataSource={listSource}
						renderRow={renderRow}
					/>
				</ScrollView>
				<TouchableHighlight style={styles.addTaskBlock}
				                    underlayColor="rgb(74, 134, 204)"
				                    onPress={actions.routes.createTask()}>
					<Text style={styles.addTaskButton}>+</Text>
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
		backgroundColor: 'rgb(74, 134, 204)'
	},

	h1: {
		fontSize: 24,
		fontWeight: '700',
		textAlign: 'center',
		color: '#fff'
	},
	imageWrapper: {
		alignSelf: 'stretch',
		alignItems: 'center',
		marginBottom: 18
	},
	image: {
		width: 100,
		height: 170
	},
	mediumSpan: {
		fontSize: 16,
		textAlign: 'center',
		color: '#fff'
	},

	tasks: {
		//flexDirection: 'column',
		alignSelf: 'stretch',
		paddingLeft: 10,
		paddingRight: 10
	},

	task: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	taskNum: {
		color: '#fff',
		fontSize: 50,
		fontWeight: '700'
	},

	taskText: {
		fontSize: 18,
		color: '#fff',
		fontWeight: '100'
	},

	taskCompleteStyles: {
		borderWidth: 1,
		borderColor: '#fff',
		borderRadius: 15,
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	taskCompleteInnerStyles: {
		width: 14,
		height: 14,
		backgroundColor: '#fff',
		borderRadius: 7
	},

	addTaskBlock: {
		position: 'absolute',
		right: 10,
		top: 30,
		padding: 0,
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#fff',
		borderRadius: 23
	},

	addTaskButton: {
		color: '#fff',
		fontSize: 30,
		fontWeight: '300',
		marginTop: -5
	},

	angrymeterWrapper: {
		alignSelf: 'stretch',
		paddingLeft: 18,
		paddingRight: 50,
		marginBottom: 18,
		marginTop: 8
	},

	angrymeterFill: {
		backgroundColor: '#ccc'
	},

	angrymeterBg: {
		backgroundColor: 'rgb(74, 134, 204)'
	}
});