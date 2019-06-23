import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';

import * as theme from '../theme'
import { Block, Text } from '../components'

class Dashboard extends Component {
  static navigationOptions = {
      header: (
        null
      )
    }

  render() {
    return (
      <Block style={styles.dashboard}>
        {/* Block #1 */}
        <Block column>
          <Text welcome> Welcome </Text>
          <Text name> John Doe </Text>
        </Block>
        
        {/* Block #2 */}
        <Block row style={{paddingVertical: 12}}>
          <Block flex={1.2} row style={{alignItems:'flex-end'}}>
            <Text h1 >34</Text>
            <Text h1 size={34} height={80} weight={'600'} spacing={0.1}>°C</Text>
          </Block>

          <Block flex column>
            <Text caption>Humidity</Text>
            <Text>Chart</Text>
          </Block>
        </Block>
        {/* Block #3 */}
        <Block flex column>
          <Block row >
            <Block flex={1} style={styles.button}>
              <Text></Text>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}
export default Dashboard;

const styles = StyleSheet.create({
  dashboard:{
    padding:theme.sizes.base *2,
  },
  button:{
    backgroundColor: theme.colors.button,
    width:151,
    height:151,
    borderRadius: 151/2,

  }
})
