import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import {Icon} from 'react-native-elements';

import Tab1 from '../containers/Tab1';
import Tab2 from '../containers/Tab2';

export const TabsStack = StackNavigator({
    Tab1: {
        screen: Tab1,
        navigationOptions: {
            title: 'Tab1'
        }
    },
    Tab2: {
        screen: Tab2,
        navigationOptions: {
            title: 'Tab2'
        }
    },
})

export const TabNavigation = TabNavigator({
    Tab1: {
        screen: TabsStack,
        navigationOptions: {
            tabBarLabel: 'Tab1',
            tabBarIcon: ({tintColor}) => <Icon name="list" size={35} color={tintColor} />
        }
    },
    Tab2: {
        screen: Tab2,
        navigationOptions: {
            tabBarLabel: 'Tab2',
            tabBarIcon: ({tintColor}) => <Icon name="account-circle" size={35} color={tintColor} />
        }
    },
});