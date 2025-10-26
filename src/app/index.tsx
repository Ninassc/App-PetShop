import { StatusBar } from 'expo-status-bar';

import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black_Italic } from '@expo-google-fonts/poppins';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Logo from "../assets/LogoInicio.png"
import Pessoa from "../assets/PessoaGatinho.png"
import Fundo from "../assets/Fundo.png"

import { style } from "./StyleIndex"
import { router } from 'expo-router';

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black_Italic,
  });

  if (!fontLoaded) return null;

  function handleToCadastroLogin() {
    router.push("./CadastroLogin/CadastroLogin")
  }

  return (
    <TouchableOpacity onPress={handleToCadastroLogin} style={style.container}>
      <ImageBackground style={style.container} source={Fundo} resizeMode='cover'>
        <View style={style.boxLogo}>
          <Image style={style.logo} source={Logo} />
          <Text style={style.texto}>A farmácia pet que chega até você</Text>
        </View>
        <View style={style.boxPessoa} >
          <Image style={style.pessoa} source={Pessoa} />
          <Text style={style.clique}>Clique na tela para continuar</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}