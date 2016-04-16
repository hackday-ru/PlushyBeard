'use strict';

import React, {
	Component
} from 'react-native';
import {
	actions as routerActions,
	NavBar,
	Route,
	Router,
	Schema
} from 'react-native-router-redux';
import { connect } from 'react-redux';
import { combineReducers, bindActionCreators } from 'redux';
import Launch from '../components/Launch';
import Home from '../components/Home';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import * as tasksActions from '../../ios/actions/homeActions';

const mapStateToProps = state => ({
	router: state.router,
	home: state.home
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(routerActions, dispatch),
	tasksActions: bindActionCreators(tasksActions, dispatch),
	dispatch
});

const defaultSchema = {
	navBar: NavBar
};

class App extends Component {
	render() {
		return (
			<Router {...this.props} initial="launch">
				<Schema name="default" {...defaultSchema} />
				<Route name="launch" component={Launch} hideNavBar={true} />
				<Route name="home" component={Home} hideNavBar={true}  />
				<Route name="addTask" component={AddTask} hideNavBar={true} />
				<Route name="taskList" component={TaskList} hideNavBar={true} />
			</Router>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);