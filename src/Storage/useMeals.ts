import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Meal {
  id: string;
  time: string;
  name: string;
  description: string;
  date: string;
  isWithinDiet: boolean;
}

const MEALS_STORAGE_KEY = "@refeicoes_app:meals";

export const useMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carregar refeições do AsyncStorage
  const loadMeals = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await AsyncStorage.getItem(MEALS_STORAGE_KEY);
      if (data) {
        setMeals(JSON.parse(data));
      } else {
        setMeals([]);
      }
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : "Erro ao carregar refeições";
      setError(errorMsg);
      console.error("Erro ao carregar refeições:", err);
    } finally {
      setLoading(false);
    }
  };

  // Salvar refeições no AsyncStorage
  const saveMeals = async (mealsToSave: Meal[]) => {
    try {
      await AsyncStorage.setItem(
        MEALS_STORAGE_KEY,
        JSON.stringify(mealsToSave),
      );
      setMeals(mealsToSave);
    } catch (error) {
      console.error("Erro ao salvar refeições:", error);
    }
  };

  // Adicionar nova refeição
  const addMeal = async (meal: Omit<Meal, "id">) => {
    try {
      const newMeal: Meal = {
        ...meal,
        id: Date.now().toString(),
      };
      const updatedMeals = [newMeal, ...meals];
      await saveMeals(updatedMeals);
      return newMeal;
    } catch (error) {
      console.error("Erro ao adicionar refeição:", error);
    }
  };

  // Deletar refeição
  const deleteMeal = async (mealId: string) => {
    try {
      // Carregar dados atuais do AsyncStorage para evitar problemas de closure
      const data = await AsyncStorage.getItem(MEALS_STORAGE_KEY);
      const currentMeals: Meal[] = data ? JSON.parse(data) : [];

      const updatedMeals = currentMeals.filter((meal) => meal.id !== mealId);
      await saveMeals(updatedMeals);
      return true;
    } catch (error) {
      console.error("Erro ao deletar refeição:", error);
      return false;
    }
  };

  // Editar refeição
  const editMeal = async (mealId: string, updatedMeal: Partial<Meal>) => {
    try {
      // Carregar dados atuais do AsyncStorage para evitar problemas de closure
      const data = await AsyncStorage.getItem(MEALS_STORAGE_KEY);
      const currentMeals: Meal[] = data ? JSON.parse(data) : [];

      const updatedMeals = currentMeals.map((meal) =>
        meal.id === mealId ? { ...meal, ...updatedMeal } : meal,
      );
      await saveMeals(updatedMeals);
      return true;
    } catch (error) {
      console.error("Erro ao editar refeição:", error);
      return false;
    }
  };

  // Calcular estatísticas
  const getStatistics = () => {
    const mealsWithinDiet = meals.filter((m) => m.isWithinDiet).length;
    const mealsOutOfDiet = meals.filter((m) => !m.isWithinDiet).length;
    const percentage =
      meals.length > 0
        ? ((mealsWithinDiet / meals.length) * 100).toFixed(2)
        : "0.00";

    // Calcular melhor sequência
    let bestSequence = 0;
    let currentSequence = 0;

    meals.forEach((meal) => {
      if (meal.isWithinDiet) {
        currentSequence += 1;
        bestSequence = Math.max(bestSequence, currentSequence);
      } else {
        currentSequence = 0;
      }
    });

    return {
      totalMeals: meals.length,
      mealsWithinDiet,
      mealsOutOfDiet,
      percentage,
      bestSequence,
    };
  };

  // Agrupar refeições por data
  const getMealsByDate = () => {
    const grouped: { [key: string]: Meal[] } = {};
    meals.forEach((meal) => {
      if (!grouped[meal.date]) {
        grouped[meal.date] = [];
      }
      grouped[meal.date].push(meal);
    });
    return grouped;
  };

  // Carregar refeições ao montar o componente
  useEffect(() => {
    loadMeals();
  }, []);

  return {
    meals,
    loading,
    error,
    addMeal,
    deleteMeal,
    editMeal,
    getStatistics,
    getMealsByDate,
    loadMeals,
  };
};
