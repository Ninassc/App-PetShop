import { StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import { themes } from '../../global/themes';

const { branco, azulEscuro, verde, azulBorda, verdeQuadrado, laranja } = themes.colors


export const style = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center"
    },

    header: {
        flex: 1.2,
        backgroundColor: verde,
        borderRadius: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:"center",
        width: "100%"
    },

    icones: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        columnGap: RFValue(10)
    },

    servicos: {
        flex: 6,
        backgroundColor: branco,
        width: "89%",
        justifyContent: "center"
    },

    quadradinhos: {
        width: "95%",
        flexDirection: "row",
        flexWrap:"wrap",
        gap: 5,
        alignSelf: "center", 
    },

    verdeQuadrado : {
        backgroundColor: verdeQuadrado
    },

    laranja: {
        backgroundColor: laranja
    },

    verde: {
        backgroundColor: verde
    },

    TqPrincipal: {
        fontFamily: "Poppins_700Bold",
        fontSize: RFValue(12),
    },

    TqSecundario: {
        fontFamily: "Poppins_400Regular",
        fontSize: RFValue(8), 
      
    },

    imagemQuadrado: {
       
    },

    quadrado: {
        flex: 1,
        padding: RFValue(3),
        borderRadius: 10,
        position: "relative"
    },

    produtos: {
        flex: 3
    }


})