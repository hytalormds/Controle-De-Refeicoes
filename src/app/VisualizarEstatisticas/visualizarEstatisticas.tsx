import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMeals } from "../../hooks/useMeals";
import { styles } from "./visualizarEstatisticas.styles";

export default function VisualizarEstatisticas() {
  const navigation = useNavigation<any>();
  const { getStatistics } = useMeals();

  const stats = getStatistics();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Estatísticas</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Percentage Card */}
          <View style={styles.percentageCard}>
            <Text style={styles.percentageValue}>{stats.percentage}%</Text>
            <Text style={styles.percentageLabel}>
              das refeições dentro da dieta
            </Text>
          </View>

          {/* Statistics Title */}
          <Text style={styles.statisticsTitle}>Estatísticas gerais</Text>

          {/* Best Sequence */}
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.bestSequence}</Text>
            <Text style={styles.statLabel}>
              melhor sequência de pratos dentro da dieta
            </Text>
          </View>

          {/* Total Meals */}
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.totalMeals}</Text>
            <Text style={styles.statLabel}>refeições registradas</Text>
          </View>

          {/* Within Diet and Out of Diet Row */}
          <View style={styles.statsRow}>
            <View style={[styles.statCardHalf, styles.statCardHalfGreen]}>
              <Text style={[styles.statValue, styles.statValueGreen]}>
                {stats.mealsWithinDiet}
              </Text>
              <Text style={[styles.statLabel, styles.statLabelGreen]}>
                refeições dentro da dieta
              </Text>
            </View>

            <View style={[styles.statCardHalf, styles.statCardHalfRed]}>
              <Text style={[styles.statValue, styles.statValueRed]}>
                {stats.mealsOutOfDiet}
              </Text>
              <Text style={[styles.statLabel, styles.statLabelRed]}>
                refeições fora da dieta
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
