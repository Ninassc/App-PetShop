import React, { useState } from "react"
import { Text, View, Image, ImageBackground, TextInput, Linking, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { style } from './StyleCadastro'
import Logo from '../../assets/Logo.png';
import Fundo from '../../assets/Fundo.png';
import Google from '../../assets/Google.png';
import Apple from '../../assets/Apple.png';
import Message from '../../assets/Message.png';
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { supabase } from "../../lib/supabase";

export default function Cadastro() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleLogin() {
            setLoading(true)
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: senha,
                options: {
                    data: {
                        name: nome
                    }
                }
            })
            if (error) {
                Alert.alert("Erro", error.message)
                setLoading(false)
                return
            }

            setLoading(false)
            router.replace("../login/Login")
    }

    return (
        <ImageBackground
            source={Fundo}
            style={style.container}
            resizeMode="cover"
        >
            <View style={style.boxTop}>
                <Image source={Logo}></Image>
                <Text style={style.title}>Cadastre-se!</Text>
                <View style={style.botoesConectar} >
                    <Image style={style.imgConectar} source={Google} />
                    <Image style={style.imgConectar} source={Apple} />
                    <Image style={style.imgConectar} source={Message} />
                </View>
                <Text style={style.ou}>ou</Text>
            </View>


            <View style={style.boxMid}>
                 <View style={style.email}>
                    <Text style={style.tLogin}>Nome</Text>
                    <TextInput value={nome} style={style.inputLogin} onChangeText={setNome} />
                </View>

                <View style={style.email}>
                    <Text style={style.tLogin}>Email</Text>
                    <TextInput value={email} style={style.inputLogin} onChangeText={setEmail} />
                </View>
                <View style={style.senha}>
                    <Text style={style.tLogin}>Senha</Text>
                    <TextInput secureTextEntry value={senha} style={style.inputLogin} onChangeText={setSenha} />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.botao} onPress={handleLogin}>
                    <Text style={style.textoBotao}>{loading ? "CARREGANDO..." : "CADASTRAR"}</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}