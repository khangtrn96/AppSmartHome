import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

import * as theme from '../theme'
import { Block, Text } from '../components'
import * as mocks from '../settings';

class Dashboard extends Component {
  static navigationOptions = {
      header: (
        null
      )
    }

  render() {
    const { navigation, settings } = this.props;
    const LightIcon = settings['light'].icon;
    const AccessIcon = settings['ac'].icon;
    const TemperatureIcon = settings['temperature'].icon;
    const FanIcon = settings['fan'].icon;
    const WifiIcon = settings['wi-fi'].icon;
    const FlashIcon = settings['electricity'].icon;
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
              <LightIcon size={40}/>
              <Text button >{settings['light'].name}</Text>
            </Block>
            </TouchableOpacity>
            
            <TouchableOpacity 
              activeOpacity={0.8} 
              onPress={() =>navigation.navigate('Settings', { name: 'ac'})}>
            <Block center middle style={styles.button}>
              <AccessIcon size={40}/>
              <Text button >{settings['ac'].name}</Text>
            </Block>
            </TouchableOpacity>
          </Block>

          <Block row space="around">
              <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={() =>navigation.navigate('Settings', { name: 'temperature'})}>
              <Block center middle style={styles.button}>
                <TemperatureIcon size={40} />
                <Text button >{settings['temperature'].name}</Text>
              </Block>
              </TouchableOpacity>
              
              <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={() =>navigation.navigate('Settings', { name: 'fan'})}>

              <Block center middle style={styles.button}>
                <FanIcon size={40} />
                <Text button >{settings['fan'].name}</Text>
              </Block>
              </TouchableOpacity>
          </Block>
         
          <Block row space="around">
              <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={() =>navigation.navigate('Settings', { name: 'wi-fi'})}>

              <Block center middle style={styles.button}>
                <WifiIcon size={40}/>
                <Text button >{settings['wi-fi'].name}</Text>
              </Block>
              </TouchableOpacity>
              
              <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={() =>navigation.navigate('Settings', { name: 'electricity'})}>

              <Block center middle style={styles.button}>
                <FlashIcon size={40}/>
                <Text button >{settings['electricity'].name}</Text>
              </Block>
              </TouchableOpacity>
          </Block>
        </Block>
    </ScrollView>
    );
  }
}
Dashboard.defaultProps = {
  settings: mocks,
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
