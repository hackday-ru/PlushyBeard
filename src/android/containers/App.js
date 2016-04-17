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
import CreateTask from '../components/CreateTask';
import * as tasksActions from '../../ios/actions/homeActions';
import * as beardmanActions from '../../ios/actions/beardmanActions';

const mapStateToProps = state => ({
	router: state.router,
	home: state.home,
	beardman: state.beardman
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(routerActions, dispatch),
	tasksActions: bindActionCreators(tasksActions, dispatch),
	beardmanActions: bindActionCreators(beardmanActions, dispatch),
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
				<Route name="createTask" component={CreateTask} hideNavBar={true}  />
				<Route name="home" component={Home} hideNavBar={true}  />
			</Router>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);