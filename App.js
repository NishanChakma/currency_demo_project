import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './component/main';
import DetailsData from './component/DataDetails';
import 'react-native-gesture-handler';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      header: null,
    },
  },
  Details: {
    screen: DetailsData,
  },
});

let MyNav = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyNav />
      </Provider>
    );
  }
}
