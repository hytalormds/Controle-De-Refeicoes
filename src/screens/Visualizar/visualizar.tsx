import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { useMeals } from "@hooks/useMeals";
import { Meal } from "@types/meal.types";
import { Header, ConfirmationDialog } from "@components/index";
import { styles } from "./visualizar.styles";

export default function Visualizar() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const mealParam = route.params?.meal as Meal;
  const mealId = route.params?.mealId;
  const { meals, deleteMeal } = useMeals();
  const [meal, setMeal] = useState<Meal | null>(mealParam || null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    if (mealParam) {
      setMeal(mealParam);
    } else if (mealId && meals.length > 0) {
      const foundMeal = meals.find((m) => m.id === mealId);
      if (foundMeal) {
        setMeal(foundMeal);
      }
    }
  }, [mealParam, mealId, meals]);

  const handleConfirmDelete = async () => {
    if (!meal || isDeleting) {
      return;
    }

    setIsDeleting(true);
    try {
      const success = await deleteMeal(meal.id);
      setShowDeleteConfirm(false);
      if (success) {
        navigation.navigate("HomeScreen");
      } else {
        setIsDeleting(false);
      }
    } catch (error) {
      setIsDeleting(false);
    }
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  if (!meal) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Refeição" onBackPress={() => navigation.goBack()} />
      </SafeAreaView>
    );
  }

  return (
    <>
      <ConfirmationDialog
        visible={showDeleteConfirm}
        title="Tem certeza que deseja excluir esta refeição?"
        confirmText="Sim, excluir"
        cancelText="Cancelar"
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowDeleteConfirm(false)}
        isLoading={isDeleting}
      />

      <SafeAreaView style={styles.container}>
        <Header title="Refeição" onBackPress={() => navigation.goBack()} />

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <View style={styles.mealCard}>
              <Text style={styles.label}>Nome</Text>
              <Text style={styles.value}>{meal.name}</Text>

              <Text style={[styles.label, { marginTop: 20 }]}>Descrição</Text>
              <Text style={styles.value}>{meal.description}</Text>

              <Text style={[styles.label, { marginTop: 20 }]}>Data</Text>
              <Text style={styles.value}>{meal.date}</Text>

              <Text style={[styles.label, { marginTop: 20 }]}>Hora</Text>
              <Text style={styles.value}>{meal.time}</Text>

              <Text style={[styles.label, { marginTop: 20 }]}>
                Dentro da dieta?
              </Text>
              <View
                style={[
                  styles.dietBadge,
                  meal.isWithinDiet ? styles.dietBadgeYes : styles.dietBadgeNo,
                ]}
              >
                <Text
                  style={[
                    styles.dietBadgeText,
                    meal.isWithinDiet
                      ? styles.dietBadgeTextYes
                      : styles.dietBadgeTextNo,
                  ]}
                >
                  {meal.isWithinDiet ? "Sim" : "Não"}
                </Text>
              </View>
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => navigation.navigate("Editar", { meal })}
              >
                <PencilSimpleLine size={20} color="#fff" weight="bold" />
                <Text style={styles.editButtonText}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleDelete}
              >
                <Trash size={20} color="#fff" weight="bold" />
                <Text style={styles.deleteButtonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
