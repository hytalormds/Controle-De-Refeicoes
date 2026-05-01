export interface Meal {
  id: string;
  time: string;
  name: string;
  description: string;
  date: string;
  isWithinDiet: boolean;
}

export interface MealStats {
  totalMeals: number;
  mealsWithinDiet: number;
  mealsOutOfDiet: number;
  percentage: string;
  bestSequence: number;
}
