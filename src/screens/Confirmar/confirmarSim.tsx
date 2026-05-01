import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Header } from "@components/index";
import { styles } from "./confirmar.styles";

export default function ConfirmarSim() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="" onBackPress={() => navigation.navigate("HomeScreen")} />

      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleSuccess}>Continue assim!</Text>
        </View>

        <Text style={styles.subtitle}>
          Você continua dentro da dieta. Muito bem!
        </Text>

        <View style={styles.imageContainer}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>
              ✅ Excelente trabalho!
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.buttonText}>Ir para a página inicial</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
