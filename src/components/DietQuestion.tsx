import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { DietButton } from "./DietButton";
import { FONTS } from "@theme/fonts";

interface DietQuestionProps {
  value: "sim" | "nao" | null;
  onChange: (value: "sim" | "nao") => void;
  disabled?: boolean;
}

export const DietQuestion: React.FC<DietQuestionProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <View style={styles.dietQuestion}>
      <Text style={styles.dietLabel}>Está dentro da dieta?</Text>
      <View style={styles.dietButtonsRow}>
        <DietButton
          label="✓ Sim"
          isSelected={value === "sim"}
          onPress={() => onChange("sim")}
          disabled={disabled}
          variant="yes"
        />
        <DietButton
          label="✕ Não"
          isSelected={value === "nao"}
          onPress={() => onChange("nao")}
          disabled={disabled}
          variant="no"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dietQuestion: {
    marginBottom: 20,
  },
  dietLabel: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: FONTS.semibold,
    color: "#333",
    marginBottom: 12,
  },
  dietButtonsRow: {
    flexDirection: "row",
    marginBottom: 12,
    gap: 12,
  },
});
