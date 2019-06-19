import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import * as theme from '../theme';

export default class Typography extends Component {
  render() {
    const {
      center,
      right,
      color,
      size,
      height,
      weight,
      spacing,
      h1,
      welcome,
      name,
      medium,
      bold,
      light,
      italic,
      button,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      welcome && styles.welcome,
      name && styles.name,
      button && styles.button,
      center && styles.center,
      right && styles.right,
      color && { color },
      color && color === 'accent' && styles.accent,
      color && color === 'black' && styles.black,
      color && color === 'white' && styles.white,
      color && color === 'gray' && styles.gray,
      size && { fontSize: size },
      bold && styles.bold,
      light && styles.light,
      height && { lineHeight: height },
      weight && { fontWeight: weight },
      spacing && { letterSpacing: spacing },
      style
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.sizes.font,
    color: theme.colors.black,
  },
  bold: { fontWeight: 'bold' },
  light: { fontFamily: '200' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  black: { color: theme.colors.black, },
  white: { color: theme.colors.white, },
  gray: { color: theme.colors.gray, },
  button: theme.fonts.button,
  welcome: theme.fonts.welcome,
  name: theme.fonts.name,
  h1: theme.fonts.h1,
});
