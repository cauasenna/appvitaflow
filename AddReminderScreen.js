import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

export default function AddReminderScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Adicione um lembrete</Text>
        <TouchableOpacity>
          <Text style={styles.save}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Lembrete</Text>
      <TouchableOpacity>
        <Text style={styles.link}>Ler</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <Feather name="clock" size={20} color="black" />
        <Text style={styles.text}>Reunião às 8</Text>
        <TouchableOpacity style={styles.editIcon}>
          <Feather name="edit-2" size={18} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Feather name="play" size={20} color="black" />
        <Text style={styles.text}>Repetir Reunião</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.add}>Adicionar à lista</Text>
      </TouchableOpacity>

      {/* Rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Feather name="plus" size={20} />
          <Text>Add Hábito</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Feather name="heart" size={20} />
          <Text>Hábito</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Feather name="bar-chart-2" size={20} />
          <Text>Sumário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FFF5',
    padding: 20,
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  save: {
    color: '#22c55e',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  label: {
    marginTop: 20,
    color: '#555',
    fontWeight: '500',
  },
  link: {
    color: '#22c55e',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
  editIcon: {
    marginLeft: 'auto',
  },
  add: {
    marginTop: 10,
    fontWeight: '500',
    textAlign: 'center',
    color: '#444',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  footerItem: {
    alignItems: 'center',
  },
});
