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

export default class AddTask extends Component {

    componentWillMount() {
        this.setState({
            text: ''
        })
    }

    createTask() {

    }

    cancelTask() {

    }

    render() {

        return (
            <View style={styles.layout}>
                <Image source={require('../../resources/ui_boy.png')} style={styles.image}></Image>
                <Text style={styles.mediumSpan}>
                    Что еще ты придумал?
                </Text>
                <TextInput
                    ref="text"
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />

                <TouchableHighlight style={styles.createTask} onPress={() => this.createTask()}>
                    <Text style={styles.createTaskText}>Cоздать задачу</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.cancelTask} onPress={this.cancelTask}>
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
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        marginBottom: 15
    },

    createTask: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderStyle: 'solid'
    },

    createTaskText: {
        color: '#fff'
    },

    cancelTask: {
        padding: 10
    },

    cancelTaskText: {
        color: '#fff'
    },
});





