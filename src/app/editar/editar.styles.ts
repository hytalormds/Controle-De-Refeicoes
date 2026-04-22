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
    marginLeft: 16,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d0d0d0",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: "#333",
  },
  inputFocus: {
    borderColor: "#007AFF",
    backgroundColor: "#f9f9f9",
  },
  rowContainer: {
    flexDirection: "row",
  },
  halfField: {
    flex: 1,
    marginRight: 12,
  },
  dietQuestion: {
    marginBottom: 20,
  },
  dietLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  dietButtonsRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  dietButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  dietButtonActive: {
    borderWidth: 2,
  },
  dietButtonInactive: {
    borderWidth: 1,
    borderColor: "#d0d0d0",
    backgroundColor: "#f5f5f5",
  },
  dietButtonYesActive: {
    backgroundColor: "#e8f5e9",
    borderColor: "#4caf50",
  },
  dietButtonNoActive: {
    backgroundColor: "#ffebee",
    borderColor: "#f44336",
  },
  dietButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },
  dietButtonTextYes: {
    color: "#4caf50",
  },
  dietButtonTextNo: {
    color: "#f44336",
  },
  dietButtonTextInactive: {
    color: "#999",
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
  },
});
