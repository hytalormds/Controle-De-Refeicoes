import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FONTS } from "@theme/fonts";

interface ConfirmationDialogProps {
  visible: boolean;
  title: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  visible,
  title,
  confirmText = "Sim, excluir",
  cancelText = "Cancelar",
  onConfirm,
  onCancel,
  isLoading = false,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onCancel}
              disabled={isLoading}
            >
              <Text style={styles.cancelText}>{cancelText}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={onConfirm}
              disabled={isLoading}
            >
              <Text style={styles.confirmText}>
                {isLoading ? "Deletando..." : confirmText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "80%",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FONTS.bold,
    color: "#333",
    marginBottom: 24,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
    marginRight: 12,
  },
  cancelButton: {
    backgroundColor: "#f0f0f0",
  },
  confirmButton: {
    backgroundColor: "#f44336",
    marginRight: 0,
  },
  cancelText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: FONTS.semibold,
  },
  confirmText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: FONTS.semibold,
  },
});
