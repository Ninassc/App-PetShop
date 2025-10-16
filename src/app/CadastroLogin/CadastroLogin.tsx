import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import Fundo from '../../assets/Fundo.png'
import Escrita from '../../assets/Escrita.png'
import Cachorro from '../../assets/Cachorro.png'
import LoginIcone from '../../assets/LoginIcone.png'
import RegistrarIcone from '../../assets/RegistrarIcone.png'
import { style } from './StyleCadastroLogin'
import {router} from 'expo-router'


export default function CadastroLogin() {

    function handleToLogin(){
        router.push("../login/Login")
    }

    function handleToCadastro(){
        router.push("../Cadastro/Cadastro")
    }

    return (
        <ImageBackground 
        source={Fundo}
        resizeMode="cover"
        style={style.container}>
            <View style={style.logo} >
                <Image source={Escrita}></Image>
                <Image source={Cachorro} />
            </View>

            <View style={style.boxTexto}>
                <Text style={style.texto}>Cuidar é amar. Peça o que seu pet precisa sem sair de casa </Text>
            </View>

            <View style={style.direcionar}>
                <View style={style.boxLR}>
                    <TouchableOpacity onPress={handleToLogin} style={style.btn}> 
                        <Text style={style.textoBtn}>Login</Text>
                    </TouchableOpacity>
                    <Image style={style.icone} source={LoginIcone}/>
                </View>
                <View style={style.boxLR}>
                    <TouchableOpacity onPress={handleToCadastro} style={style.btn}>
                        <Text style={style.textoBtn}>Cadastrar</Text>
                    </TouchableOpacity>
                    <Image style={style.icone} source={RegistrarIcone}/>
                </View>
            </View>
        </ImageBackground>
    )
}