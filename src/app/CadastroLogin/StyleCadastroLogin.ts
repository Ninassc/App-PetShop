import { StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import { themes } from '../../global/themes'

const { branco, azulEscuro, verde, azulBorda } = themes.colors

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
    },

    logo: {
        paddingTop: 60,
        display: "flex",
        //backgroundColor: verde,
        width: "80%",
        flex: 6,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 20,
    },

    boxTexto: {
        width: "80%",
        flex: 1,
        //backgroundColor: azulEscuro,
        alignItems: "center",
        paddingTop: 5,
    },

    texto: {
        fontFamily: "Poppins_800ExtraBold",
        fontSize: RFValue(20),
        width: "90%",
        textAlign: "center",
        color: branco,
        lineHeight: 28,

    },

    direcionar: {
        width: "80%",
        flex: 3,
        //backgroundColor: azulEscuro,
        display: "flex",
        flexDirection: "column",
    },

    boxLR: {
        width: "100%",
        marginTop: 20,
        position: "relative"
    },

    btn: {
        position: "relative",
        height: RFValue(60),
        width: '100%',
        borderColor: azulBorda,
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 14,
        display: "flex",
        justifyContent: "center"
    },

    icone: {
        position: "absolute",
        top: "25%",
        right: 20,
        width: 40,
        height: 40
    },

    textoBtn: {
        color: azulBorda,
        fontFamily: "Poppins_700Bold",
        fontSize: RFValue(14)
    }


})