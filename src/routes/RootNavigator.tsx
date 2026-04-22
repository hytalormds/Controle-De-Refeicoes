import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importar telas
import App from "../app/Home/App";
import Home from "../app/Home/home";
import Cadastro from "../app/cadastrar/cadastro";
import ConfirmarSim from "../app/confirmar/confirmarSim";
import ConfirmarNao from "../app/confirmar/confirmarNao";
import VisualizarEstatisticas from "../app/VisualizarEstatisticas/visualizarEstatisticas";
import Visualizar from "../app/visualizar/visualizar";
import Editar from "../app/editar/editar";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={App} />
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
