import React, { useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ArrowUpRight, Plus } from "phosphor-react-native";
import { homeScreenStyles } from "./homeScreen.styles";
import { useMeals } from "@hooks/useMeals";
import { MealCard } from "@components/MealCard";

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
        <Image
          source={require("../../../assets/logo.png")}
          style={homeScreenStyles.logo}
          resizeMode="contain"
        />
        <View style={homeScreenStyles.profileButton}>
          <Text style={homeScreenStyles.profileIcon}>👤</Text>
        </View>
      </View>

      <ScrollView
        style={homeScreenStyles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={homeScreenStyles.content}>
          <View style={homeScreenStyles.statisticsContainer}>
            <View style={homeScreenStyles.statisticsContent}>
              <View>
                <Text style={homeScreenStyles.statisticsValue}>
                  {statistics}%
                </Text>
                <Text style={homeScreenStyles.statisticsLabel}>
                  das refeições dentro da dieta
                </Text>
              </View>
              <TouchableOpacity
                style={homeScreenStyles.statisticsIconButton}
                onPress={() => navigation.navigate("VisualizarEstatisticas")}
              >
                <ArrowUpRight size={24} color="#4caf50" weight="bold" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={homeScreenStyles.mealsHeader}>
            <Text style={homeScreenStyles.mealsTitle}>Refeições</Text>
            <TouchableOpacity
              style={homeScreenStyles.addMealButton}
              onPress={() => navigation.navigate("Cadastro")}
            >
              <Plus size={20} color="#fff" weight="bold" />
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
