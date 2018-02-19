import React, { Component } from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class Tab2 extends Component {
    constructor(props) {
        super(props);
    }

    goToTab1 = () => {
        this.props.navigation.navigate('Tab1');
    }
    
    render() {
        const {navigation} = this.props;

        return (
            <ScrollView>
                <List>
                    <ListItem title={'Test'} />
                    <ListItem title={'Test2'} />
                    <ListItem onPress={this.goToTab1} title={'Return to Tab1'} />
                </List>
            </ScrollView>
        );
    }
}

export default Tab2;