import React from "react";
import { styles } from "./app.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  StyleSheetProperties,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation<any>();

  const handleAcessar = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image
            source={require("../../../assets/logo.png")}
            style={{ width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.titulo}>
          Este é o primeiro passo para transformar sua rotina alimentar em algo
          leve, equilibrado e prazeroso.
        </Text>
        <Text style={styles.subtitulo}>
          Entre para começar a usar o aplicativo.
        </Text>

        <TouchableOpacity style={styles.botao} onPress={handleAcessar}>
          <Text style={styles.botaoEntrar}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
