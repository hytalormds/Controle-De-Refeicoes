import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { FONTS } from "@theme/fonts";

interface MealCardProps {
  time: string;
  name: string;
  isWithinDiet: boolean;
  onPress: () => void;
}

export const MealCard: React.FC<MealCardProps> = ({
  time,
  name,
  isWithinDiet,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.mealItem, !isWithinDiet && styles.mealItemOutOfDiet]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.mealTime}>{time}</Text>
      <Text style={styles.mealName}>{name}</Text>
      <View
        style={[
          styles.statusIndicator,
          !isWithinDiet && styles.statusIndicatorOutOfDiet,
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#4caf50",
  },
  mealItemOutOfDiet: {
    borderLeftColor: "#f44336",
  },
  mealTime: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: FONTS.semibold,
    color: "#333",
    minWidth: 40,
  },
  mealName: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: "#666",
    flex: 1,
    marginLeft: 16,
  },
  statusIndicator: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#4caf50",
  },
  statusIndicatorOutOfDiet: {
    backgroundColor: "#f44336",
  },
});
