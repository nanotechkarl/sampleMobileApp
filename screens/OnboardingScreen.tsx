import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to my app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default OnboardingScreen;
