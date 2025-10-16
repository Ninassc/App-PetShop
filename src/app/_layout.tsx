import { Stack } from "expo-router";
import CadastroLogin from './CadastroLogin/CadastroLogin';


export default function MainLayoult(){

    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="CadastroLogin/CadastroLogin" options={{headerShown: false}}/>
            <Stack.Screen name="login/Login" options={{headerShown: false}} />
            <Stack.Screen name="Cadastro/Cadastro" options={{headerShown: false}} />
        </Stack>
    )
}