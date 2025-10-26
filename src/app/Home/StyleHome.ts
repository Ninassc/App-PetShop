import { StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import { themes } from '../../global/themes';

const { branco, azulEscuro, verde, azulBorda } = themes.colors


export const style = StyleSheet.create({

    container: {
        flex: 1,
    },

    header: {
        flex: 0.15,
        backgroundColor: verde,
        borderRadius: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:"center"
    },

    icones: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        columnGap: RFValue(10)
    }


})