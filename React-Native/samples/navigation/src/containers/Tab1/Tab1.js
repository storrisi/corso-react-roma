import React, { Component } from 'react';
import {ScrollView, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {List, ListItem } from 'react-native-elements';

class Tab1 extends Component {
    constructor(props) {
        super(props);
    }

    goToTab2 = () => {
        this.props.navigation.navigate('Tab2');
    }
 
    render() {
        return (
            <ScrollView>
                <Text>This is Tab1</Text>
                <List>
                    <ListItem onPress={this.goToTab2} title={'Navigate to Tab2'} />
                </List>
            </ScrollView>
        );
    }
}

export default Tab1;