import React, { Component } from 'react';
import { View } from 'react-native';

import * as theme from '../theme'
import { Block, Text } from '../components'
class Settings extends Component {
  
  render() {
    const {navigation} = this.props;
    const name = navigation.getParam('name')
    return (
      <Block flex={1}>
        <Text> Settings for {name} </Text>
      </Block>
    );
  }
}
export default Settings;
