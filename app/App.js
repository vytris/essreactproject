import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';

let screen = Dimensions.get('window');
import Perfil from './screens/perfil';
import Equipamentos from './screens/equipamentos';
import Menu from './screens/menu'
import showData from './screens/showData';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Menu: {screen: Menu},
  Profile: {screen: Perfil},
  Tools: {screen: Equipamentos},
  showData: {screen: showData},
});

const App = createAppContainer(MainNavigator);

export default App;