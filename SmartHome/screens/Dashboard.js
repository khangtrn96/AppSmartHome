import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

import * as theme from '../theme'
import { Block, Text } from '../components'

class Dashboard extends Component {
  static navigationOptions = {
      header: (
        null
      )
    }

  render() {
    const { navigation } = this.props;
    return (
    <ScrollView contentContainerStyle={styles.dashboard}>
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
        <Block flex column space="around">
          <Block row space="around">
            <TouchableOpacity 
              activeOpacity={0.8} 
              onPress={() =>navigation.navigate('Settings', { name: 'light'})}>
            <Block center middle style={styles.button}>
              <Text button >Light</Text>
            </Block>
            </TouchableOpacity>
            
            <TouchableOpacity 
              activeOpacity={0.8} 
              onPress={() =>navigation.navigate('Settings', { name: 'ac'})}>
            <Block center middle style={styles.button}>
              <Text button >AC</Text>
            </Block>
            </TouchableOpacity>
          </Block>

          <Block row space="around">
              <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={() =>navigation.navigate('Settings', { name: 'temperature'})}>
              <Block center middle style={styles.button}>
                <Text button >Temperature</Text>
              </Block>
              </TouchableOpacity>
              
              <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={() =>navigation.navigate('Settings', { name: 'fan'})}>

              <Block center middle style={styles.button}>
                <Text button >Fan</Text>
              </Block>
              </TouchableOpacity>
          </Block>
         
          <Block row space="around">
              <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={() =>navigation.navigate('Settings', { name: 'wi-fi'})}>

              <Block center middle style={styles.button}>
                <Text button >Wi-fi</Text>
              </Block>
              </TouchableOpacity>
              
              <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={() =>navigation.navigate('Settings', { name: 'electricity'})}>

              <Block center middle style={styles.button}>
                <Text button >Electricity</Text>
              </Block>
              </TouchableOpacity>
          </Block>
        </Block>
    </ScrollView>
    );
  }
}
export default Dashboard;

const styles = StyleSheet.create({
  dashboard:{
    padding:theme.sizes.base *2,
    flex:1,
  },
  button:{
    backgroundColor: theme.colors.button,
    width:151,
    height:151,
    borderRadius: 151/2,

  }
})
