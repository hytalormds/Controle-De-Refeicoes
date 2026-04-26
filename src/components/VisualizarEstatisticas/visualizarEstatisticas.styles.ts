import { StyleSheet } from "react-native";
import { FONTS } from "../../theme/fonts";

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
  percentageCard: {
    backgroundColor: "#e8f5e9",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 24,
    alignItems: "center",
  },
  percentageValue: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: FONTS.bold,
    color: "#4caf50",
    marginBottom: 8,
  },
  percentageLabel: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },
  statisticsTitle: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FONTS.semibold,
    color: "#333",
    marginBottom: 12,
  },
  statCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
  },
  statValue: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: FONTS.bold,
    color: "#333",
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 13,
    fontFamily: FONTS.regular,
    color: "#666",
    textAlign: "center",
    lineHeight: 18,
  },
  statsRow: {
    flexDirection: "row",
    marginTop: 12,
  },
  statCardHalf: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginHorizontal: 6,
  },
  statCardHalfGreen: {
    backgroundColor: "#e8f5e9",
  },
  statCardHalfRed: {
    backgroundColor: "#ffebee",
  },
  statValueGreen: {
    color: "#4caf50",
  },
  statValueRed: {
    color: "#f44336",
  },
  statLabelGreen: {
    color: "#4caf50",
  },
  statLabelRed: {
    color: "#f44336",
  },
});
