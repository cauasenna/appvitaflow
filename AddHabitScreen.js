// App.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';

export default function App() {
  // Estados dos checkboxes
  const [morningHabits, setMorningHabits] = useState({
    meditacao: false,
    cafe: false,
    toDo: false,
    calendario: false,
  });

  const [nightHabits, setNightHabits] = useState({
    leitura: false,
    planejar: false,
    meditacaoNoite: false,
  });

  // Marcar todos como feito
  const marcarTodosComoFeito = () => {
    setMorningHabits({
      meditacao: true,
      cafe: true,
      toDo: true,
      calendario: true,
    });
    setNightHabits({
      leitura: true,
      planejar: true,
      meditacaoNoite: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus Hábitos</Text>
        <Ionicons name="settings-outline" size={20} color="black" />
      </View>

      <ScrollView style={styles.scroll}>
        {/* Rotina da Manhã */}
        <Text style={styles.sectionTitle}>Rotina Da Manhã</Text>
        {renderCheckbox("Meditação", morningHabits.meditacao, () =>
          setMorningHabits({ ...morningHabits, meditacao: !morningHabits.meditacao })
        )}
        {renderCheckbox("Café", morningHabits.cafe, () =>
          setMorningHabits({ ...morningHabits, cafe: !morningHabits.cafe })
        )}
        {renderCheckbox("Escrever Na To-do-list", morningHabits.toDo, () =>
          setMorningHabits({ ...morningHabits, toDo: !morningHabits.toDo })
        )}
        {renderCheckbox("Ver Calendario", morningHabits.calendario, () =>
          setMorningHabits({ ...morningHabits, calendario: !morningHabits.calendario })
        )}

        {/* Rotina da Noite */}
        <Text style={styles.sectionTitle}>Rotina Da Noite</Text>
        {renderCheckbox("Ler 10 Páginas", nightHabits.leitura, () =>
          setNightHabits({ ...nightHabits, leitura: !nightHabits.leitura })
        )}
        {renderCheckbox("Planejar o Proximo Dia", nightHabits.planejar, () =>
          setNightHabits({ ...nightHabits, planejar: !nightHabits.planejar })
        )}
        {renderCheckbox("Meditação", nightHabits.meditacaoNoite, () =>
          setNightHabits({ ...nightHabits, meditacaoNoite: !nightHabits.meditacaoNoite })
        )}
      </ScrollView>

      {/* Botão verde */}
      <TouchableOpacity style={styles.botaoFeito} onPress={marcarTodosComoFeito}>
        <Text style={styles.botaoTexto}>Marcar Todos Como Feito</Text>
      </TouchableOpacity>

      {/* Menu inferior */}
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Entypo name="cup" size={20} color="black" />
          <Text style={styles.footerText}>Hábitos</Text>
        </View>
        <View style={styles.footerItem}>
          <FontAwesome name="heart" size={20} color="black" />
          <Text style={styles.footerText}>Sumário</Text>
        </View>
        <View style={styles.footerItem}>
          <Entypo name="add-to-list" size={20} color="black" />
          <Text style={styles.footerText}>Add Hábito</Text>
        </View>
      </View>
    </View>
  );
}

// Componente de checkbox reutilizável
const renderCheckbox = (label, status, onPress) => (
  <View style={styles.checkboxContainer}>
    <Checkbox.Android
      status={status ? 'checked' : 'unchecked'}
      onPress={onPress}
      color="#4ade80"
    />
    <Text style={styles.checkboxLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FFF5',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  scroll: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#333',
  },
  botaoFeito: {
    backgroundColor: '#22c55e',
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    marginTop: 5,
  },
});
