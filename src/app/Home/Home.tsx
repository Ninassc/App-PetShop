import React, { useEffect, useState } from "react"
import { Text, View, Image, ImageBackground, TextInput, Linking, TouchableOpacity, Alert } from 'react-native';
import { style } from "./StyleHome"
import EscritaMenor from "../../assets/EscritaMenor.png"
import pesquisar from "../../assets/pesquisar.png"
import usuario from "../../assets/usuario.png"
import carrinho from "../../assets/carrinho.png"
import menu from "../../assets/menu.png"
import Fundo from "../../assets/Fundo.png"
import Mask from "../../assets/Maskgroup.png"
import Fale from "../../assets/Fale.png"
import Remedios from "../../assets/Remedios.png"
import Osso from "../../assets/Osso.png"
import { supabase } from "../../lib/supabase";


export default function Home() {

    const [nome, setNome] = useState("")

    async function infoUser() {
        const { data, error } = await supabase.auth.getUser()

        if (error) {
            console.log('getUser error', error.message)
            return
        }

        const user = data.user
        const name = user?.user_metadata?.name
        setNome(name)
    }

    useEffect(() => {
        infoUser()
    }, [])

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

            <View style={style.servicos}>
                <Image source={Mask} />
                <View style={style.funcionalidades}>
                    <View style={style.textinho}>
                        <Text style={style.ola}>Olá,</Text>
                        <Text>{nome}</Text>
                    </View>
                    <View style={style.oque}>
                        <Text style={style.textoOque}>O que precisam hoje?</Text>
                    </View>

                    <View style={style.quadradinhos}>
                        <View style={[style.quadrado, style.verdeQuadrado]}>
                            <Text style={style.TqPrincipal}>Fale com um veterinário</Text>
                            <Text style={style.TqSecundario}>Consultas online com especialistas de confiança</Text>
                            <Image style={style.imagemQuadrado} source={Fale} />
                        </View>

                        <View style={[style.quadrado, style.laranja]}>
                            <Text style={style.TqPrincipal}>Compre remédios</Text>
                            <Text style={style.TqSecundario}>Remédios veterinários com entrega rápida
                                e segura</Text>
                            <Image style={style.imagemQuadrado} source={Remedios} />
                        </View>

                        <View style={[style.quadrado, style.verde]}>
                            <Text style={style.TqPrincipal}>Produtos gerais</Text>
                            <Text style={style.TqSecundario}>Tudo o que seu pet precisa em um único lugar</Text>
                            <Image style={style.imagemQuadrado} source={Osso} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={style.produtos}>

            </View>
        </ImageBackground>

    )
}