import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./visualizar.styles";
import { useMeals, Meal } from "../../hooks/useMeals";

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
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Refeição</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <>
      <Modal visible={showDeleteConfirm} transparent animationType="fade">
        <View style={confirmStyles.overlay}>
          <View style={confirmStyles.dialog}>
            <Text style={confirmStyles.title}>
              Tem certeza que deseja excluir esta refeição?
            </Text>

            <View style={confirmStyles.buttonRow}>
              <TouchableOpacity
                style={[confirmStyles.button, confirmStyles.cancelButton]}
                onPress={() => setShowDeleteConfirm(false)}
              >
                <Text style={confirmStyles.cancelText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[confirmStyles.button, confirmStyles.confirmButton]}
                onPress={handleConfirmDelete}
                disabled={isDeleting}
              >
                <Text style={confirmStyles.confirmText}>
                  {isDeleting ? "Deletando..." : "Sim, excluir"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Refeição</Text>
        </View>

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
                <Text style={styles.editButtonText}>Editar refeição</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleDelete}
              >
                <Text style={styles.deleteButtonText}>Excluir refeição</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const confirmStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "80%",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 24,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
    marginRight: 12,
  },
  cancelButton: {
    backgroundColor: "#f0f0f0",
  },
  confirmButton: {
    backgroundColor: "#f44336",
    marginRight: 0,
  },
  cancelText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "600",
  },
  confirmText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
