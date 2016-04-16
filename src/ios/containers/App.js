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
import { completeTask } from '../actions/homeActions';

const mapStateToProps = state => ({
	router: state.router,
	home: state.home
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(routerActions, dispatch),
	homeActions: bindActionCreators({
		completeTask
	}, dispatch),
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
			</Router>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);