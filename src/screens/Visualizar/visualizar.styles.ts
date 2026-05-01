import { StyleSheet } from "react-native";
import { FONTS } from "@theme/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  mealCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: FONTS.semibold,
    color: "#666",
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: "#333",
    lineHeight: 24,
  },
  dietBadge: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  dietBadgeYes: {
    backgroundColor: "#e8f5e9",
  },
  dietBadgeNo: {
    backgroundColor: "#ffebee",
  },
  dietBadgeText: {
    fontWeight: "600",
    fontSize: 14,
    fontFamily: FONTS.semibold,
  },
  dietBadgeTextYes: {
    color: "#4caf50",
  },
  dietBadgeTextNo: {
    color: "#f44336",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginBottom: 12,
  },
  editButton: {
    backgroundColor: "#333",
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FONTS.bold,
  },
  deleteButton: {
    backgroundColor: "#f44336",
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FONTS.bold,
  },
});
