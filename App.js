/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSize: {
    textAlign: 'center',
  },
});

export default App;
