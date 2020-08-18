import {Platform, StyleSheet} from 'react-native';

export default {

    PRIMARY_COLOR:'#715cd2',
    FONT_PRIMARY: Platform.OS === 'ios' ? 'SFProDisplay-Bold' : 'SF-Pro-Display-Bold',
    FONT_CURVED:Platform.OS === 'ios' ? 'SFCompactRounded-Semibold' : 'SF-Compact-Rounded-Semibold',
    
    
    FONT_CURVED_LIGHT: Platform.OS === 'ios' ? 'SFCompactRounded-Regular' : 'SF-Compact-Rounded-Regular',
    FONT_NORMAL: Platform.OS === 'ios' ? 'BentonSans Regular':'BentonSans Regular',

    FONT_REGULAR: Platform.OS === 'ios' ? 'SFProDisplay-Regular' : 'SF-Pro-Display-Regular',
    FONT_MEDIUM: Platform.OS === 'ios' ? 'SFProDisplay-Medium' : 'SF-Pro-Display-Medium',
    FONT_LIGHT: Platform.OS === 'ios' ? 'SFProText-Light' : 'SF-Pro-Text-Light',
    FONT_DISPLAY_BLACK: Platform.OS === 'ios' ? "SFProDisplay-Black" : "SF-Pro-Display-Black",
    FONT_DISPLAY_BOLD: Platform.OS === 'ios' ? "SFProDisplay-Bold" : "SF-Pro-Display-Bold",
    FONT_SEMI_BOLD: Platform.OS === 'ios' ? "SFProText-Semibold" : "SF-Pro-Text-Semibold",
    FONT_TEXT_BOLD: Platform.OS === 'ios' ? "SFProText-Bold" : "SF-Pro-Text-Bold",

    FONT_HEAVY: Platform.OS === 'ios' ? 'SFProText-Heavy' : 'SF-Pro-Text-Heavy',
    FONT_SMALL: Platform.OS === 'ios' ? 'SFProDisplay-Thin' : 'SF-Pro-Display-Thin',


}