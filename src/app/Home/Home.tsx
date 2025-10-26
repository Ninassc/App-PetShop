import React from "react"
import { Text, View, Image, ImageBackground, TextInput, Linking, TouchableOpacity, Alert } from 'react-native';
import { style } from "./StyleHome"
import EscritaMenor from "../../assets/EscritaMenor.png"
import pesquisar from "../../assets/pesquisar.png"
import usuario from "../../assets/usuario.png"
import carrinho from "../../assets/carrinho.png"
import menu from "../../assets/menu.png"
import Fundo from "../../assets/Fundo.png"


export default function Home() {

    return (
        <ImageBackground
            style={style.container} 
            source={Fundo}
            resizeMode="cover">

            <View style={style.header}>
                <View style={style.escrita}>
                    <Image source={EscritaMenor} />
                </View>
                
                <View style={style.icones}>
                    <TouchableOpacity>
                        <Image source={pesquisar}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={usuario}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={carrinho}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={menu}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>

    )
}