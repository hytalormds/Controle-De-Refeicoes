import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

// Importar telas
import Home from "../Home/home";
import Cadastro from "../components/cadastrar/cadastro";
import ConfirmarSim from "../components/confirmar/confirmarSim";
import ConfirmarNao from "../components/confirmar/confirmarNao";
import VisualizarEstatisticas from "../components/VisualizarEstatisticas/visualizarEstatisticas";
import Visualizar from "../components/visualizar/visualizar";
import Editar from "../components/editar/editar";

const Stack = createNativeStackNavigator();

// Manter a splash screen visível enquanto as fontes carregam
SplashScreen.preventAutoHideAsync();

export default function RootNavigator() {
  const [fontsLoaded, fontError] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Não renderizar enquanto as fontes não carregarem
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="ConfirmarSim" component={ConfirmarSim} />
        <Stack.Screen name="ConfirmarNao" component={ConfirmarNao} />
        <Stack.Screen
          name="VisualizarEstatisticas"
          component={VisualizarEstatisticas}
        />
        <Stack.Screen name="Visualizar" component={Visualizar} />
        <Stack.Screen name="Editar" component={Editar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
