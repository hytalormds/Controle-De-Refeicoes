import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";
import { FONTS } from "@theme/fonts";

interface DietButtonProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
  disabled?: boolean;
  variant: "yes" | "no";
}

export const DietButton: React.FC<DietButtonProps> = ({
  label,
  isSelected,
  onPress,
  disabled = false,
  variant,
}) => {
  const getStyles = () => {
    if (isSelected) {
      return variant === "yes"
        ? [styles.dietButton, styles.dietButtonYesActive]
        : [styles.dietButton, styles.dietButtonNoActive];
    }
    return [styles.dietButton, styles.dietButtonInactive];
  };

  const getTextStyles = () => {
    if (isSelected) {
      return variant === "yes"
        ? [styles.dietButtonText, styles.dietButtonTextYes]
        : [styles.dietButtonText, styles.dietButtonTextNo];
    }
    return [styles.dietButtonText, styles.dietButtonTextInactive];
  };

  return (
    <TouchableOpacity style={getStyles()} onPress={onPress} disabled={disabled}>
      <Text style={getTextStyles()}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dietButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
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
    fontFamily: FONTS.semibold,
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
});
