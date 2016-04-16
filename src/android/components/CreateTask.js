'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    Image,
    View
} from 'react-native';

export default class CreateTask extends Component {

    componentWillMount() {
        this.setState({
            text: ''
        })
    }

    render() {
        const { actions, tasksActions } = this.props;
        return (
            <View style={styles.layout}>
                <Image source={require('../../resources/ui_boy.png')} style={styles.image}></Image>
                <Text style={styles.mediumSpan}>
                    Что еще ты придумал?
                </Text>
                <View style={styles.textInputWrapper}>
                    <TextInput
                        ref="text"
                        style={styles.textInput}
                        selectionColor="#fff"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text} />
                </View>

                <TouchableHighlight style={styles.createTask}
                                    underlayColor="rgb(74, 134, 204)"
                                    onPress={() => { if(this.state.text) { tasksActions.addTask(this.state.text); actions.routes.home()();}}}>
                    <Text style={styles.createTaskText}>Cоздать задачу</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.cancelTask}
                                    underlayColor="rgb(74, 134, 204)"
                                    onPress={actions.routes.home()}>
                    <Text  style={styles.cancelTaskText}>Отмена</Text>
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
        backgroundColor: 'rgb(74, 134, 204)',
        color: '#ffffff'
    },

    image: {
        marginTop: 105,
        width: 100,
        height: 170,
        marginBottom: 18
    },

    mediumSpan: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff'
    },

    textInput: {
        height: 40,
        fontSize: 18,
        fontWeight: '100',
        color: '#fff'
    },

    textInputWrapper: {
        alignSelf: 'stretch',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        marginBottom: 15,
        marginLeft: 23,
        marginRight: 22
    },

    createTask: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderStyle: 'solid'
    },

    createTaskText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '100'
    },

    cancelTask: {
        padding: 10
    },

    cancelTaskText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '100'
    },
});





