import { StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import { themes } from '../global/themes'

const { branco, azulEscuro, verde, azulBorda } = themes.colors

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
    },

    boxLogo: {
        //backgroundColor: azulBorda,
        width: "80%",
        flex: 4,
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 15,
        paddingBottom: 100
    },

    logo:{

    },

    texto:{
        fontFamily: "Poppins_700Bold",
        color: verde,
        fontSize: RFValue(14)
    },

    boxPessoa: {
        width: "80%",
        flex: 6,
        alignItems: "center",
        position: "relative",
        //backgroundColor: azulBorda
    },

    pessoa:{
        position:"absolute",
        top: -40
    },

    clique: {
        fontFamily: "Poppins_700Bold",
        color: verde,
        fontSize: RFValue(10),
        position:"absolute",
        bottom: 70
    },
})