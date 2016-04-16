'use strict';

import {bindActionCreators} from 'redux';
import MainLayout from '../components/mainLayout';
import TaskList from '../components/taskList';

//import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Main extends Component {

    render() {
        const { main } = this.props; /*<MainLayout {...main} />*/

        return (
        	<View style={styles.layout}>	        	
	        	<TaskList />
	        </View>
        )        
    }
}


const styles = StyleSheet.create({
    layout: {
    	paddingTop: 30,
    	flex: 1,
    	flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4A86CC',
        color: '#ffffff'
    }
});


function mapStateToProps (state) {
    return {
        main: state.main,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //inventoryActions: bindActionCreators(inventoryActions, dispatch)
    }
}

export default connect(mapStateToProps, void 0)(Main)


