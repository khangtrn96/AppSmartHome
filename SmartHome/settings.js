import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// ** Icon get from "https://oblador.github.io/react-native-vector-icons/"
import * as theme from './theme';

export default{
    'light':{
        name: 'Light',
        icon: ({size, color, ...props}) => (
            <MaterialCommunityIcons  
                size={size || theme.sizes.font} 
                color={color || theme.colors.accent}
                name="lightbulb-outline"
                {...props}
            />)
    },
    'ac':{
        name: 'AC',
        icon: ({size, color, ...props}) => (
            <MaterialCommunityIcons  
                size={size || theme.sizes.font} 
                color={color || theme.colors.accent}
                name="access-point"
                {...props}
            />)    },
    'temperature':{
        name: 'Temperature',
        icon: ({size, color, ...props}) => (
            <MaterialCommunityIcons  
                size={size || theme.sizes.font} 
                color={color || theme.colors.accent}
                name="temperature-celsius"
                {...props}
            />)
    },
    'fan':{
        name: 'Fan',
        icon: ({size, color, ...props}) => (
            <MaterialCommunityIcons  
                size={size || theme.sizes.font} 
                color={color || theme.colors.accent}
                name="fan"
                {...props}
            />)
    },
    'wi-fi':{
        name: 'Wi-Fi',
        icon: ({size, color, ...props}) => (
            <MaterialCommunityIcons  
                size={size || theme.sizes.font} 
                color={color || theme.colors.accent}
                name="wifi"
                {...props}
            />)
    },
    'electricity':{
        name: 'Electricity',
        icon: ({size, color, ...props}) => (
            <MaterialCommunityIcons  
                size={size || theme.sizes.font} 
                color={color || theme.colors.accent}
                name="flash-outline"
                {...props}
            />)
    }
}