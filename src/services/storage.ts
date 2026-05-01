import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "@types/meal.types";

const MEALS_STORAGE_KEY = "@refeicoes_app:meals";

export const storageService = {
  async getMeals(): Promise<Meal[]> {
    try {
      const data = await AsyncStorage.getItem(MEALS_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Erro ao carregar refeições:", error);
      return [];
    }
  },

  async saveMeals(meals: Meal[]): Promise<void> {
    try {
      await AsyncStorage.setItem(MEALS_STORAGE_KEY, JSON.stringify(meals));
    } catch (error) {
      console.error("Erro ao salvar refeições:", error);
      throw error;
    }
  },
};
