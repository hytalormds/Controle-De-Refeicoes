import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./cadastro.styles";
import { useMeals } from "../../hooks/useMeals";

export default function Cadastro() {
  const navigation = useNavigation<any>();
  const { addMeal } = useMeals();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [dietaStatus, setDietaStatus] = useState<"sim" | "nao" | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCadastro = async () => {
    // Validar campos obrigatórios
    if (!nome.trim()) {
      Alert.alert("Erro", "Por favor, preencha o nome da refeição");
      return;
    }
    if (!data.trim()) {
      Alert.alert("Erro", "Por favor, preencha a data");
      return;
    }
    if (!hora.trim()) {
      Alert.alert("Erro", "Por favor, preencha a hora");
      return;
    }
    if (dietaStatus === null) {
      Alert.alert("Erro", "Por favor, indique se está dentro da dieta");
      return;
    }

    setLoading(true);

    try {
      const newMeal = await addMeal({
        time: hora,
        name: nome,
        description: descricao,
        date: data,
        isWithinDiet: dietaStatus === "sim",
      });

      if (newMeal) {
        // Navegar para tela de confirmação baseado na resposta
        if (dietaStatus === "sim") {
          navigation.navigate("ConfirmarSim");
        } else {
          navigation.navigate("ConfirmarNao");
        }
      }
    } catch (error) {
      Alert.alert("Erro", "Erro ao salvar refeição. Tente novamente.");
      console.error("Erro ao cadastrar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nova refeição</Text>
      </View>

      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome da refeição"
            placeholderTextColor="#ccc"
            value={nome}
            onChangeText={setNome}
            editable={!loading}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={[styles.input, { minHeight: 80 }]}
            placeholder="Digite a descrição da refeição"
            placeholderTextColor="#ccc"
            value={descricao}
            onChangeText={setDescricao}
            multiline
            numberOfLines={4}
            editable={!loading}
          />
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.halfField}>
            <Text style={styles.label}>Data</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/YYYY"
              placeholderTextColor="#ccc"
              value={data}
              onChangeText={setData}
              editable={!loading}
            />
          </View>

          <View style={styles.halfField}>
            <Text style={styles.label}>Hora</Text>
            <TextInput
              style={styles.input}
              placeholder="HH:MM"
              placeholderTextColor="#ccc"
              value={hora}
              onChangeText={setHora}
              editable={!loading}
            />
          </View>
        </View>

        <View style={styles.dietQuestion}>
          <Text style={styles.dietLabel}>Está dentro da dieta?</Text>
          <View style={styles.dietButtonsRow}>
            <TouchableOpacity
              style={[
                styles.dietButton,
                dietaStatus === "sim"
                  ? styles.dietButtonYesActive
                  : styles.dietButtonInactive,
              ]}
              onPress={() => setDietaStatus("sim")}
              disabled={loading}
            >
              <Text
                style={[
                  styles.dietButtonText,
                  dietaStatus === "sim"
                    ? styles.dietButtonTextYes
                    : styles.dietButtonTextInactive,
                ]}
              >
                ✓ Sim
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.dietButton,
                dietaStatus === "nao"
                  ? styles.dietButtonNoActive
                  : styles.dietButtonInactive,
              ]}
              onPress={() => setDietaStatus("nao")}
              disabled={loading}
            >
              <Text
                style={[
                  styles.dietButtonText,
                  dietaStatus === "nao"
                    ? styles.dietButtonTextNo
                    : styles.dietButtonTextInactive,
                ]}
              >
                ✕ Não
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.6 }]}
          onPress={handleCadastro}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Salvando..." : "Cadastrar refeição"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
