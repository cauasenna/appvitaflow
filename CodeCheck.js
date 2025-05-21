import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const VerificationCodeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite o código que acabamos de enviar para você</Text>
      <TextInput
        style={styles.input}
        placeholder=">"
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default VerificationCodeScreen;