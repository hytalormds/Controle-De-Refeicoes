import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  backButton: {
    padding: 8,
    marginRight: 12,
  },
  backButtonText: {
    fontSize: 24,
    color: "#333",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
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
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  percentageValue: {
    fontSize: 32,
    fontWeight: "700",
    color: "#4caf50",
    marginBottom: 8,
  },
  percentageLabel: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  statisticsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  statCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 12,
    alignItems: "center",
  },
  statValue: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 13,
    color: "#999",
    textAlign: "center",
    lineHeight: 18,
  },
  statsRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  statCardHalf: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: "center",
    marginRight: 12,
  },
  statCardHalfGreen: {
    backgroundColor: "#e8f5e9",
  },
  statCardHalfRed: {
    backgroundColor: "#ffebee",
    marginRight: 0,
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
