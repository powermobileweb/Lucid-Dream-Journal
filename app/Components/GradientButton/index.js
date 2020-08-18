import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../../Theme'
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = props => {
  return (
    <TouchableOpacity onPress={props.customClick}>
    <LinearGradient colors={['#817DE8', '#9E68F0']} style={styles.button}>
        <Text style={[props.style,styles.text]}>{props.title}</Text>
    </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#ffffff',
    width: '100%',
    padding: 15,
    borderRadius: 30,
    borderWidth: 0,
  },
  text: {
    color: '#ffffff',
    fontFamily: theme.FONT_SEMI_BOLD,
    fontSize:16,
    letterSpacing: 0.3,
    opacity:0.9,
    textAlign:'center'
  },
});
export default GradientButton;
