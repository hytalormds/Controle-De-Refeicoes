import { StyleSheet } from "react-native";
import { FONTS } from "@theme/fonts";

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FONTS.bold,
    color: "#333",
  },
  logo: {
    height: 40,
    width: 120,
  },
  profileButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    fontSize: 18,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  statisticsContainer: {
    backgroundColor: "#e8f5e9",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  statisticsContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  statisticsValue: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: FONTS.bold,
    color: "#4caf50",
    marginBottom: 8,
  },
  statisticsLabel: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },
  statisticsIconButton: {
    padding: 8,
  },
  mealsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  mealsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  addMealButton: {
    backgroundColor: "#333",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 6,
    gap: 8,
  },
  addMealButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: FONTS.semibold,
  },
  dateGroup: {
    marginBottom: 20,
  },
  dateLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8,
  },
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
    color: "#333",
    minWidth: 40,
  },
  mealName: {
    fontSize: 14,
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
  emptyMealsText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
  },
  scrollView: {
    flex: 1,
  },
});
