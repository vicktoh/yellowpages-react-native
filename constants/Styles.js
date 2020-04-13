import Colors from './Colors';
let FontBold =  'Playfiar Display Bold';
let FontNormal = 'Playfair Display';

export default {
    shadow: {
        borderRadius: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 0,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 5
    },
    headerTextWithShadow: {
        fontFamily: FontBold,
        fontSize: 40,
        color: 'yellow',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 8
    },
    secondarySubHeading: {
        fontFamily: 'FontNormal',
        color: '#8a8986',
    },
    formInputText: {
        fontFamily: 'FontNormal',
        color: '#8a8986',
        fontSize: 14,
    },
    headerTextPrimary:{
        color: Colors.primaryText,
        fontSize: 24,
        fontFamily: FontBold,

    },
    header2TextPrimary:{
        color: Colors.primaryText,
        fontSize: 24,
        fontFamily: FontNormal, 
    },
    headerTextSecondary:{
        color: Colors.secondaryText,
        fontSize: 20,
        fontFamily: FontNormal,
    },
    header2TextSecondary:{
        color: Colors.secondaryText,
        fontSize: 18,
        fontFamily: FontNormal,
    },
    secondaryText:{
        fontSize: 16,
        fontFamily: FontNormal,
        color: Colors.secondaryText
    },
    secondaryTextSmall:{
        fontSize: 14,
        fontFamily: FontNormal,
        color: Colors.secondaryText
    },
    FontBold,
    FontNormal

}