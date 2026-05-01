import React, { useState, useEffect } from "react";
import { ScrollView, View, TouchableOpacity, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useMeals } from "@hooks/useMeals";
import { Meal } from "@types/meal.types";
import { Header, FormInput, DietQuestion } from "@components/index";
import { styles } from "./editar.styles";

export default function Editar() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const mealParam = route.params?.meal as Meal;
  const { editMeal } = useMeals();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [dietaStatus, setDietaStatus] = useState<"sim" | "nao" | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (mealParam) {
      setMeal(mealParam);
      setNome(mealParam.name);
      setDescricao(mealParam.description);
      setData(mealParam.date);
      setHora(mealParam.time);
      setDietaStatus(mealParam.isWithinDiet ? "sim" : "nao");
    }
  }, [mealParam]);

  const handleSave = async () => {
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

    if (!meal) {
      Alert.alert("Erro", "Refeição não encontrada.");
      setLoading(false);
      return;
    }

    try {
      const success = await editMeal(meal.id, {
        name: nome,
        description: descricao,
        date: data,
        time: hora,
        isWithinDiet: dietaStatus === "sim",
      });

      if (success) {
        navigation.navigate("HomeScreen");
      } else {
        Alert.alert("Erro", "Erro ao atualizar refeição. Tente novamente.");
      }
    } catch (error) {
      Alert.alert("Erro", "Erro ao atualizar refeição. Tente novamente.");
      console.error("Erro ao editar:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!meal) {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          title="Editar refeição"
          onBackPress={() => navigation.goBack()}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Editar refeição" onBackPress={() => navigation.goBack()} />

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
          onPress={handleSave}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Salvando..." : "Atualizar refeição"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
