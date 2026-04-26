import React, { useEffect, useCallback } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { homeScreenStyles } from "./homeScreen.styles";
import { useMeals } from "../Storage/useMeals";
import { MealCard } from "../components/MealCard";

export default function Home() {
  const navigation = useNavigation<any>();
  const { meals, loading, getMealsByDate, loadMeals } = useMeals();

  // Carregar dados ao montar o componente
  useEffect(() => {
    loadMeals();
  }, []);

  // Recarregar dados quando a tela ganha foco
  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  const getStatistics = () => {
    const mealsWithinDiet = meals.filter((m) => m.isWithinDiet).length;
    const percentage =
      meals.length > 0
        ? ((mealsWithinDiet / meals.length) * 100).toFixed(2)
        : "0.00";
    return percentage;
  };

  const mealsByDate = getMealsByDate();
  const statistics = getStatistics();

  return (
    <SafeAreaView style={homeScreenStyles.container}>
      <View style={homeScreenStyles.header}>
        <Text style={homeScreenStyles.headerTitle}>Daily Diet</Text>
        <TouchableOpacity
          style={homeScreenStyles.profileButton}
          onPress={() => navigation.navigate("VisualizarEstatisticas")}
        >
          <Text style={homeScreenStyles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={homeScreenStyles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={homeScreenStyles.content}>
          <View style={homeScreenStyles.statisticsContainer}>
            <Text style={homeScreenStyles.statisticsValue}>{statistics}%</Text>
            <Text style={homeScreenStyles.statisticsLabel}>
              das refeições dentro da dieta
            </Text>
          </View>

          <View style={homeScreenStyles.mealsHeader}>
            <Text style={homeScreenStyles.mealsTitle}>Refeições</Text>
            <TouchableOpacity
              style={homeScreenStyles.addMealButton}
              onPress={() => navigation.navigate("Cadastro")}
            >
              <Text style={homeScreenStyles.addMealButtonText}>+</Text>
              <Text style={homeScreenStyles.addMealButtonText}>
                Nova refeição
              </Text>
            </TouchableOpacity>
          </View>

          {!loading && meals.length === 0 ? (
            <Text style={homeScreenStyles.emptyMealsText}>
              Nenhuma refeição registrada ainda
            </Text>
          ) : (
            Object.entries(mealsByDate).map(([date, dateMeals]) => (
              <View key={date} style={homeScreenStyles.dateGroup}>
                <Text style={homeScreenStyles.dateLabel}>{date}</Text>
                {dateMeals.map((meal) => (
                  <MealCard
                    key={meal.id}
                    time={meal.time}
                    name={meal.name}
                    isWithinDiet={meal.isWithinDiet}
                    onPress={() =>
                      navigation.navigate("Visualizar", {
                        meal,
                        mealId: meal.id,
                      })
                    }
                  />
                ))}
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
