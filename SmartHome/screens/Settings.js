import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as theme from '../theme'
import { Block, Text } from '../components'
import mocks from '../settings';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
class Settings extends Component {
  static navigationOptions = {
    headerLeft: ({ onPress }) => (
      //** Use construct: onPress in headerLeft to go back easily */
        <TouchableWithoutFeedback onPress={() => onPress()}>
          <FontAwesome size={theme.sizes.font*1.5} color={'black'} name="arrow-left"/>
        </TouchableWithoutFeedback>
    ),
    headerLeftContainerStyle: {
      paddingLeft: theme.sizes.base *2
    },
    headerStyle: {
      borderBottomColor: 'transparent'
    }
  }
  
  render() {
    const {navigation} = this.props;
    const name = navigation.getParam('name');
    return (
      <Block flex={1} style={styles.settings}>
        <Text> Settings for {name} </Text>
      </Block>
    );
  }
}

Settings.defaultProps = {
  settings: mocks,
}

export default Settings;

const styles = StyleSheet.create({
  settings:{
    padding:theme.sizes.base *2,
  
  },
})