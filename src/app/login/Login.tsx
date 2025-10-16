import React, { useState } from "react";
import { Text, View, Image, ImageBackground, TextInput, Linking, TouchableOpacity, Alert } from 'react-native';
import { style } from './StyleLogin'
import Logo from '../../assets/Logo.png';
import Fundo from '../../assets/Fundo.png';
import Google from '../../assets/Google.png';
import Apple from '../../assets/Apple.png';
import Message from '../../assets/Message.png';
import { Link } from "expo-router";

export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [loading, setLoading] = useState(false)

    function handleLogin() {

    }

    return (
        <ImageBackground
            source={Fundo}
            style={style.container}
            resizeMode="cover"
        >
            <View style={style.boxTop}>
                <Image source={Logo}></Image>
                <Text style={style.title}>Que bom que você está aqui!</Text>
                <Text style={style.subtitle}>Escolha a sua forma de login</Text>
                <View style={style.botoesConectar} >
                    <Image style={style.imgConectar} source={Google} />
                    <Image style={style.imgConectar} source={Apple} />
                    <Image style={style.imgConectar} source={Message} />
                </View>
                <Text style={style.ou}>ou</Text>
            </View>

            <View style={style.boxMid}>
                <View style={style.email}>
                    <Text style={style.tLogin}>Email</Text>
                    <TextInput value={email} style={style.inputLogin} onChangeText={setEmail} />
                </View>
                <View style={style.senha}>
                    <Text style={style.tLogin}>Senha</Text>
                    <TextInput value={senha} onChangeText={setSenha} style={style.inputLogin} />
                </View>
                <View style={style.esqueci}>
                    <Link href={"#"}>
                        <Text style={style.tesqueci}>ESQUECI MINHA SENHA</Text>
                    </Link>
                </View>

            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity onPress={handleLogin} style={style.botao}>
                    <Text style={style.textoBotao}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}