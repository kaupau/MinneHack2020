import * as React from 'react';
import { View, Text, TextInput, Keyboard, KeyboardAvoidingView,
    TouchableOpacity, StyleSheet } from 'react-native';
import Statusbar from '../components/statusbar.js';

export default class SubscriptionsScreen extends React.Component {
    render() {
        return (
            <View>
                <Statusbar/>
                <Text>Sign up to see the hottest bills trending in your area.</Text>
                <Text style={styles.header}>Login</Text>
                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Username:</Text>
                    <TextInput
                        style={styles.inputSpace}
                        onChangeText={this.onChangeUsername}
                    />
                </View>
                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Password:</Text>
                    <TextInput
                        style={styles.inputSpace}
                        onChangeText={this.onChangePassword}
                    />
                </View>
                <TouchableOpacity onPress={this.submit}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {

    },
    inputField: {
        flexDirection: 'row',
    },
    inputSpace: {
        flex: 1,
        height: 25,
        borderWidth: 1,
        margin: 4,
        borderRadius: 5,
    }
});