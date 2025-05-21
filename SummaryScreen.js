import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HealthSummaryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sumário</Text>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.label}>Domnir</Text>
          <Text style={styles.value}>7hr31min</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Passos</Text>
          <Text style={styles.value}>5,349</Text>
        </View>
      </View>

      <View style={styles.dataContainer}>
        <View style={styles.dataItem}>
          <Text style={styles.dataLabel}>Anciando</Text>
          <Text style={styles.dataValue}>2.5ml</Text>
        </View>
        <View style={styles.dataItem}>
          <Text style={styles.dataLabel}>Peso</Text>
          <Text style={styles.dataValue}>110Kg</Text>
        </View>
        <View style={styles.dataItem}>
          <Text style={styles.dataLabel}>Altura</Text>
          <Text style={styles.dataValue}>1'87</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mostrar todos os dados de saúde</Text>
      </TouchableOpacity>

      <Text style={styles.sectionHeader}>Sumário</Text>
      <Text style={styles.sectionHeader}>Hábitas</Text>
      <Text style={styles.habitText}>Aqui Hábito</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  table: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dataContainer: {
    marginBottom: 20,
  },
  dataItem: {
    marginBottom: 10,
  },
  dataLabel: {
    fontSize: 16,
    color: '#555',
  },
  dataValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  habitText: {
    fontSize: 16,
    color: '#555',
  },
});

export default HealthSummaryScreen;