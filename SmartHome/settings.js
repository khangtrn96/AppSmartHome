import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import theme from './theme';
export default{
    'light':{
        name: 'Light',
        icon: (
            <FontAwesome  
                size={theme.sizes.font} 
                color={theme.colors.accent}
                name=""
            />)
    },
    'ac':{
        name: 'AC',
        icon: (
            <FontAwesome  
                size={theme.sizes.font} 
                color={theme.colors.accent}
                name=""
            />)    },
    'temperature':{
        name: 'Temperature',
        icon: (
            <FontAwesome  
                size={theme.sizes.font} 
                color={theme.colors.accent}
                name=""
            />)
    },
    'fan':{
        name: 'Fan',
        icon: (
            <FontAwesome  
                size={theme.sizes.font} 
                color={theme.colors.accent}
                name=""
            />)
    },
    'wi-fi':{
        name: 'Wi-Fi',
        icon: (
            <FontAwesome  
                size={theme.sizes.font} 
                color={theme.colors.accent}
                name=""
            />)
    },
    'electricity':{
        name: 'Electricity',
        icon: (
            <FontAwesome  
                size={theme.sizes.font} 
                color={theme.colors.accent}
            />)
    }
}