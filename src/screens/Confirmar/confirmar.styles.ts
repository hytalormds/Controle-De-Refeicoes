import { StyleSheet } from "react-native";
import { FONTS } from "@theme/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    marginBottom: 16,
  },
  titleSuccess: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: FONTS.bold,
    color: "#4caf50",
    textAlign: "center",
  },
  titleError: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: FONTS.bold,
    color: "#f44336",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 32,
  },
  imageContainer: {
    marginBottom: 32,
  },
  imagePlaceholder: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 32,
    alignItems: "center",
  },
  imagePlaceholderText: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: FONTS.semibold,
    color: "#333",
    textAlign: "center",
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "#333",
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FONTS.bold,
  },
});
