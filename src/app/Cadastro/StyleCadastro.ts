import { StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import { themes } from '../../global/themes';

const { branco, azulEscuro, verde, azulBorda } = themes.colors


export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    boxTop: {
        flex: 4.5,              // ~50%
        width: '100%',
        paddingTop: 60,
        alignItems: 'center',
        //backgroundColor: 'green', 
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Poppins_800ExtraBold',
        width: '60%',
        textAlign: 'center',
        color: verde,
        marginTop: 30,
        lineHeight: 28,
        fontSize: RFValue(22),
    },

    botoesConectar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 24,
        marginTop: 28,
    },

    imgConectar: {

    },

    ou: {
        fontFamily: 'Poppins_700Bold',
        color: branco,
        fontSize: RFValue(15),
        textAlign: 'center',
        backgroundColor: azulEscuro,
        width: RFValue(60),
        height: RFValue(48),
        lineHeight: RFValue(48),
        borderRadius: 70,
        marginTop: 40,
    },

    //Inputs
    boxMid: {
        flex: 4,
        width: '100%',
        //backgroundColor: "green",
        display: "flex",
        alignItems: "center",
        marginBottom: 10
    },

    email: {
        //backgroundColor: "blue",
        flex: 4,
        width: "80%",
        flexDirection: 'column',
    },

    senha: {
        flex: 4,
        width: "80%",
        flexDirection: 'column'
    },


    tLogin: {
        paddingTop: 20,
        color: branco,
        fontFamily: 'Poppins_700Bold',
        fontSize: RFValue(13),
    },

    inputLogin: {
        width: '100%',
        height: 60,
        borderColor: azulBorda,
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 14,
        color: branco,
    },

    tesqueci: {
        fontFamily: "Poppins_400Regular",
        color: branco,
        textAlign: 'center',
    },

    //Botao
    boxBottom: {
        flex: 1.5,            // ~15%
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
        //backgroundColor: "aqua"
    },

    botao: {
        borderRadius: 8,
        width: "80%",
        backgroundColor: verde,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },

    textoBotao: {
        fontFamily: "Poppins_800ExtraBold",
        fontSize: RFValue(16),
        color: azulBorda,
    }

})