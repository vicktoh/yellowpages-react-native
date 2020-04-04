import Colors from './Colors';

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
        fontFamily: 'Playfiar Display Bold',
        fontSize: 40,
        color: 'yellow',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 8
    },
    secondarySubHeading: {
        fontFamily: 'Playfair Display',
        color: '#8a8986',
    },
    formInputText: {
        fontFamily: 'Playfair Display',
        color: '#8a8986',
        fontSize: 14,
    },
    headerTextPrimary:{
        color: Colors.primaryText,
        fontSize: 24,
        fontFamily: 'Playfiar Display Bold',

    }

}