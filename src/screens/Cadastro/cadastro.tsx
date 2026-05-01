import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useMeals } from "@hooks/useMeals";
import { Header, FormInput, DietQuestion } from "@components/index";
import { styles } from "./cadastro.styles";

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
      <Header title="Nova refeição" onBackPress={() => navigation.goBack()} />

      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
        <FormInput
          label="Nome"
          placeholder="Digite o nome da refeição"
          value={nome}
          onChangeText={setNome}
          editable={!loading}
        />

        <FormInput
          label="Descrição"
          placeholder="Digite a descrição da refeição"
          value={descricao}
          onChangeText={setDescricao}
          multiline
          numberOfLines={4}
          editable={!loading}
        />

        <View style={styles.rowContainer}>
          <View style={styles.halfField}>
            <FormInput
              label="Data"
              placeholder="DD/MM/YYYY"
              value={data}
              onChangeText={setData}
              editable={!loading}
            />
          </View>

          <View style={styles.halfField}>
            <FormInput
              label="Hora"
              placeholder="HH:MM"
              value={hora}
              onChangeText={setHora}
              editable={!loading}
            />
          </View>
        </View>

        <DietQuestion
          value={dietaStatus}
          onChange={setDietaStatus}
          disabled={loading}
        />
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
