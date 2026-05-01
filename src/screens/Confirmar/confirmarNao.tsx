import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Header } from "@components/index";
import { styles } from "./confirmar.styles";

export default function ConfirmarNao() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="" onBackPress={() => navigation.navigate("HomeScreen")} />

      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleError}>Que pena!</Text>
        </View>

        <Text style={styles.subtitle}>
          Você saiu da dieta dessa vez, mas continue se esforçando e não
          desista!
        </Text>

        <View style={styles.imageContainer}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>
              💪 Próxima chance será sua!
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
