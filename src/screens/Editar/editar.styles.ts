import { StyleSheet } from "react-native";
import { FONTS } from "@theme/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  rowContainer: {
    flexDirection: "row",
  },
  halfField: {
    flex: 1,
    marginRight: 12,
  },
  button: {
    backgroundColor: "#333",
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FONTS.bold,
  },
});
