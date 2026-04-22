import React from "react";
import { Alert } from "react-native";

interface ConfirmDialogProps {
  visible: boolean;
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  visible,
  title,
  message,
  onCancel,
  onConfirm,
  cancelText = "Cancelar",
  confirmText = "Sim, excluir",
}) => {
  React.useEffect(() => {
    if (visible) {
      Alert.alert(title, message, [
        {
          text: cancelText,
          onPress: onCancel,
          style: "cancel",
        },
        {
          text: confirmText,
          onPress: onConfirm,
          style: "destructive",
        },
      ]);
    }
  }, [visible, title, message, onCancel, onConfirm, cancelText, confirmText]);

  return null;
};
